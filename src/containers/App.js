import {Typography} from "@mui/material";
import {MainLayout} from "../layouts/MainLayout";
import {Sidebar} from "../components/sidebar";
import {useState} from "react";
import Page from "../components/pages/Page";
import PageContainer from "./PageContainer";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import DrawerActionButton from "../components/sidebar/drawer/DrawerActionButton";
import SwipeableViews from "react-swipeable-views";
import {Home, About} from "../components/pages";

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
                        <SwipeableViews
                            index={pageNumber}
                            onChangeIndex={handlePageNumber}
                        >
                            <Page pageNumber={pageNumber} index={0}>
                                <Home />
                            </Page>

                            <Page pageNumber={pageNumber} index={1}>
                                <About />
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
                        </SwipeableViews>
                    </PageContainer>
                </MainLayout>
                {/*<Toolbar id="back-to-top-anchor"/>*/}
            </>
        </MainContext.Provider>
    );
};

export default App;
