import {useCallback, useEffect, useState} from 'react';
import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges, Controls,
    getOutgoers,
    MarkerType,
    ReactFlow,
    useReactFlow
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomNode from "./nodes/CustomNode.jsx";
import FloatingEdge from "./nodes/FloatingEdge.jsx";
import CustomConnectionLine from "./nodes/CustomConnectionLine.jsx";
import {NbtList, NbtObject, NbtString, parseNbtString} from "snbt-js";
import {Button, Stack} from "@mui/material";


export default function Map({mapText, saveFile}) {


    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    const [data, setData] = useState(new NbtObject());


    const onNodesChange = useCallback((changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)), [],);
    const onEdgesChange = useCallback((changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)), [],);

    const onConnect = useCallback((params) => {
        setEdges((eds) => addEdge(params, eds));

        console.log(params);
        console.log(data);
        data.childs.forEach((quest) => {
            if (quest.get("id").value === params.target) {
                let dep = quest.get("dependencies");
                if (dep === undefined) {
                    quest.addChild("dependencies", new NbtList());
                    dep = quest.get("dependencies");
                }
                dep.addChild(new NbtString(params.source))
            }
        });
        setData(data);
        console.log(data);
    }, [setEdges, data]);

    const {getNodes, getEdges} = useReactFlow();

    const isValidConnection = useCallback(
        (connection) => {
            // we are using getNodes and getEdges helpers here
            // to make sure we create isValidConnection function only once
            const nodes = getNodes();
            const edges = getEdges();
            const target = nodes.find((node) => node.id === connection.target);
            const hasCycle = (node, visited = new Set()) => {
                if (visited.has(node.id)) return false;

                visited.add(node.id);

                for (const outgoer of getOutgoers(node, nodes, edges)) {
                    if (outgoer.id === connection.source) return true;
                    if (hasCycle(outgoer, visited)) return true;
                }
            };

            if (target.id === connection.source) return false;
            return !hasCycle(target);
        },
        [getNodes, getEdges],
    );


    useEffect(() => {
        if (!mapText) return
        console.log(mapText);
        const data = mapText;
        const newNodes = [];
        setData(data);
        data.childs.forEach(quest => {
            let size = quest.get("size")?.value || 1;
            newNodes.push({
                id: quest.get("id").value, position: {
                    x: quest.get("x").value * 150 - size * 50,
                    y: quest.get("y").value * 150 - size * 50,
                }, type: "custom", data: {
                    label: quest.get("title")?.value,
                    size: size,
                    dependencies: JSON.parse(quest.get("dependencies")?.text().replaceAll(`'`, `"`) || "[]"),
                },
            })
        })
        setNodes(newNodes);

        // init connection (dependencies)
        const newEdges = [];
        newNodes.forEach(node => {
            node.data.dependencies.forEach(dependency => {
                newEdges.push({
                    id: `${dependency}->${node.id}`, source: dependency, target: node.id,
                })
            })
        });
        setEdges(newEdges);

    }, [mapText]);

    return (<Stack style={{width: '100vw', height: '100vh'}}>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            colorMode={'dark'}
            nodeTypes={{custom: CustomNode,}}
            edgeTypes={{floating: FloatingEdge}}

            defaultEdgeOptions={{
                type: 'floating', style: {
                    strokeWidth: "4px",
                }, markerEnd: {
                    type: MarkerType.ArrowClosed, color: '#b1b1b7'
                },
            }}
            isValidConnection={isValidConnection}
            connectionLineComponent={CustomConnectionLine}
            connectionLineStyle={{
                stroke: "#b1b1b7",
            }}
        >
            <Controls/>
        </ReactFlow>
        <Stack direction={"row"} sx={{height: "30vh"}}>
            <Button variant={"contained"} color={"success"} onClick={() => saveFile(data)}>Save</Button>
        </Stack>
    </Stack>);
}