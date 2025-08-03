import './App.css'
import Map from "./map.jsx";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Box,
    Button,
    ButtonBase,
    createTheme, Divider,
    Stack,
    ThemeProvider, ToggleButton, ToggleButtonGroup, Typography
} from "@mui/material";
import {FileDownload, FileUpload} from "@mui/icons-material";
import {useState} from "react";
import {fixFomat, parseNbt} from "./utils.js";
import {ReactFlowProvider} from "@xyflow/react";
import { saveAs } from "file-saver";

function App() {
    const [files, setFiles] = useState([]);

    const [cat, setCat] = useState([]);

    const [lastClick, setLastClick] = useState("");

    const [mode, setMode] = useState(true);

    const handleFolderChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        const readedFiles = [];

        selectedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = (e) => {

                if (file.name === "chapter_groups.snbt") {
                    let data = parseNbt(e.target.result).get("chapter_groups");
                    let cData = [];
                    data.childs.forEach((c) => {
                        cData.push({
                            id: c.get("id").value, title: c.get("title").value,
                        })
                    })
                    setCat(cData)
                } else if (file.name === "data.snbt") {
                } else {
                    let data = parseNbt(e.target.result);
                    readedFiles.push({
                        name: file.name,
                        path: file.webkitRelativePath,
                        id: data.get("id").value,
                        group: data.get("group").value,
                        order_index: data.get("order_index").value,
                        title: data.get("title").value,
                        quests: data.get("quests"),
                        data: data
                    });
                    setFiles(readedFiles);
                }
            };
            reader.readAsText(file)
        });


    };

    return <ThemeProvider theme={createTheme({palette: {mode: "dark"}})}>
        <Stack direction={"row"} sx={{width: "100vw"}}>
            <Stack sx={{width: "30%", p: 5}} spacing={3}>
                <Typography variant={"h3"}>FTB Quest Tool</Typography>
                <input
                    type="file"
                    webkitdirectory="true"
                    directory="true"
                    multiple
                    onChange={handleFolderChange}
                />
                <ToggleButtonGroup
                    color="primary"
                    value={mode}
                    exclusive
                    onChange={(_e, n) => setMode(n !== null ? n : mode)}
                    aria-label="Platform"
                >
                    <ToggleButton value={true}><FileDownload sx={{rotate: "-90deg"}}/>Dependencies</ToggleButton>
                    <ToggleButton value={false}><FileUpload sx={{rotate: "90deg"}}/>Dependents</ToggleButton>
                </ToggleButtonGroup>
                <Box sx={{maxHeight: "90vh", overflowY: "auto"}}>
                    <Stack>
                        {files.map(f => {
                            if (f.group === "") {
                                return <><Divider/><ButtonBase
                                    fullWidth
                                    sx={{
                                        p: 1,
                                        ...f.id === lastClick.id ? {
                                            background: "rgba(255,255,255,0.2)",
                                            border: "white 1px solid",
                                            borderRadius: "4px"
                                        } : {}
                                    }}
                                    onClick={() => {
                                        setLastClick(f);
                                    }}
                                >{f.title}</ButtonBase></>
                            }
                        })}
                    </Stack>
                    {cat.map((item, i) => <Accordion>
                        <AccordionSummary><b>{item.title}</b></AccordionSummary>
                        <AccordionDetails>
                            <Stack>
                                {files.map(f => {
                                    if (f.group === item.id) {
                                        return <><Divider/><ButtonBase
                                            fullWidth
                                            sx={{
                                                p: 1,
                                                ...f.id === lastClick.id ? {
                                                    background: "rgba(255,255,255,0.2)",
                                                    border: "white 1px solid",
                                                    borderRadius: "4px"
                                                } : {}
                                            }}
                                            onClick={() => {
                                                setLastClick(f);
                                            }}
                                        >{f.title}</ButtonBase></>
                                    }
                                })}
                            </Stack>
                        </AccordionDetails>
                    </Accordion>)}
                </Box>
            </Stack>


            <ReactFlowProvider>
                <Map mapText={lastClick.quests || ""} saveFile={(newQuests) => {
                    let out = lastClick.data;
                    out.set("quests", newQuests);
                    out = fixFomat(out.text());
                    saveAs(new File([out], lastClick.name,{type: "text/plain;charset=utf-8"}))
                }}/>
            </ReactFlowProvider>
        </Stack>
    </ThemeProvider>
}

export default App
