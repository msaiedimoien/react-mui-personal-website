import {Toolbar, Typography} from "@mui/material";
import {MainLayout} from "../layouts/MainLayout";
import {Sidebar} from "../components/sidebar";
import {useState} from "react";
import TabPanel from "../components/TabPanel";
import ContentContainer from "./ContentContainer";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";

function App() {
    const [pageNumber, setPageNumber] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handlePageNumber = (event, newValue) => {
        setPageNumber(newValue);
    };

    return (
        <MainContext.Provider value={{pageNumber, handlePageNumber, drawerOpen, setDrawerOpen}}>
            <>
                <MainLayout>
                    <SidebarContainer>
                        <Sidebar/>
                    </SidebarContainer>
                    <ContentContainer>
                        <TabPanel value={pageNumber} index={0}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>
                                Home
                            </Typography>
                        </TabPanel>
                        <TabPanel value={pageNumber} index={1}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>
                                About
                            </Typography>
                        </TabPanel>
                        <TabPanel value={pageNumber} index={2}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>
                                Resume
                            </Typography>
                        </TabPanel>
                        <TabPanel value={pageNumber} index={3}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>
                                Portfolio
                            </Typography>
                        </TabPanel>
                        <TabPanel value={pageNumber} index={4}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>
                                Services
                            </Typography>
                        </TabPanel>
                        <TabPanel value={pageNumber} index={5}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>
                                Contact
                            </Typography>
                        </TabPanel>
                    </ContentContainer>
                </MainLayout>
                <Toolbar id="back-to-top-anchor"/>
            </>
        </MainContext.Provider>
    );
};

export default App;
