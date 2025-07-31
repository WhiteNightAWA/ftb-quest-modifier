import {useCallback, useEffect, useState} from 'react';
import {addEdge, applyEdgeChanges, applyNodeChanges, MarkerType, ReactFlow} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {parseNbt, text} from "./utils.js";
import CustomNode from "./nodes/CustomNode.jsx";
import FloatingEdge from "./nodes/FloatingEdge.jsx";
import CustomConnectionLine from "./nodes/CustomConnectionLine.jsx";

export default function Map() {


    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);


    const onNodesChange = useCallback((changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)), [],);
    const onEdgesChange = useCallback((changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)), [],);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges],);


    useEffect(() => {
        // init nodes (quests)
        const data = parseNbt(text);
        const newNodes = [];
        data.get("quests").childs.forEach(quest => {
            newNodes.push({
                id: quest.get("id").value, position: {
                    x: quest.get("x").value * 100, y: quest.get("y").value * 100,
                }, type: "custom", data: {
                    label: quest.get("title")?.value,
                    size: quest.get("size")?.value || 1,
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

    }, []);

    return (<div style={{width: '100vw', height: '100vh'}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                colorMode={'dark'}
                nodeTypes={{ custom: CustomNode, }}
                edgeTypes={{ floating: FloatingEdge }}
                defaultEdgeOptions={{
                    type: 'floating', style: {
                        strokeWidth: "4px",
                    }, markerEnd: {
                        type: MarkerType.ArrowClosed, color: '#b1b1b7'
                    },
                }}
                connectionLineComponent={CustomConnectionLine}
                connectionLineStyle={{
                    stroke: "#b1b1b7",
                }}
            />
        </div>);
}