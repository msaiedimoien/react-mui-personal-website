import {Box, Toolbar, Typography} from "@mui/material";
import {MainLayout} from "../layouts/MainLayout";
import {Sidebar} from "../components/sidebar";
import {useState} from "react";
import Page from "../components/pages/Page";
import PageContainer from "./PageContainer";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import DrawerActionButton from "../components/sidebar/drawer/DrawerActionButton";

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
                    <DrawerActionButton />
                    <SidebarContainer>
                        <Sidebar/>
                    </SidebarContainer>
                    <PageContainer>
                        <Page pageNumber={pageNumber} index={0}>
                            <Box sx={{
                                backgroundImage: `url(${require("../assets/bg01.jpeg")})`,
                                height: "100vh",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                            }}>
                                <Typography variant="h5" sx={{textAlign: "center", color: "whiteSmoke"}}>
                                    Home
                                </Typography>
                            </Box>

                        </Page>
                        <Page pageNumber={pageNumber} index={1}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>
                                About
                            </Typography>
                        </Page>
                        <Page pageNumber={pageNumber} index={2}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>
                                Resume
                            </Typography>
                        </Page>
                        <Page pageNumber={pageNumber} index={3}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>
                                Portfolio
                            </Typography>
                        </Page>
                        <Page pageNumber={pageNumber} index={4}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>
                                Services
                            </Typography>
                        </Page>
                        <Page pageNumber={pageNumber} index={5}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>
                                Contact
                            </Typography>
                        </Page>
                    </PageContainer>
                </MainLayout>
                {/*<Toolbar id="back-to-top-anchor"/>*/}
            </>
        </MainContext.Provider>
    );
};

export default App;
