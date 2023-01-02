import {Toolbar, Typography} from "@mui/material";
import {MainLayout} from "./components/layouts/MainLayout";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";
import {useState} from "react";
import TabPanel from "./components/tabs/TabPanel";

function App() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <MainLayout>
                <Sidebar value={value} handleChange={handleChange}/>
                <ContentContainer>
                    <TabPanel value={value} index={0}>
                        <Typography variant="h5" sx={{textAlign: "center"}}>
                            Home
                        </Typography>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Typography variant="h5" sx={{textAlign: "center"}}>
                            About
                        </Typography>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Typography variant="h5" sx={{textAlign: "center"}}>
                            Resume
                        </Typography>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Typography variant="h5" sx={{textAlign: "center"}}>
                            Portfolio
                        </Typography>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <Typography variant="h5" sx={{textAlign: "center"}}>
                            Services
                        </Typography>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <Typography variant="h5" sx={{textAlign: "center"}}>
                            Contact
                        </Typography>
                    </TabPanel>
                </ContentContainer>
            </MainLayout>
            <Toolbar id="back-to-top-anchor"/>
        </>
    );
};

export default App;
