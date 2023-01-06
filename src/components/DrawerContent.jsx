import {Box, Divider, Tab, Tabs} from "@mui/material";
import {grey} from "@mui/material/colors";
import {
    HomeOutlined,
    MiscellaneousServicesOutlined, PermContactCalendarOutlined,
    PersonOutlineOutlined,
    RecommendOutlined,
    SummarizeOutlined
} from "@mui/icons-material";
import SidebarHeader from "./sidebar/SidebarHeader";

const DrawerContent = ({value, handleChange, openDrawer, setOpenDrawer}) => {

    const a11yProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            'aria-controls': `tabpanel-${index}`,
        };
    }

    return (
        <Box
            sx={{justifyContent: "center", textAlign: "center", mt: 2}}
        >
            <SidebarHeader openDrawer={openDrawer}/>
            <Divider variant="middle" color={grey[900]} sx={{mt: 2}}/>

            <Box
                style={{paddingLeft: 15, paddingRight: 15}}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    allowScrollButtonsMobile
                    style={{width: "100%"}}
                    value={value}
                    onChange={handleChange}
                >
                    <Tab
                        label=" Home"
                        icon={<HomeOutlined/>} iconPosition="start"
                        sx={{
                            mt: 2, color: grey[900], justifyContent: "start",
                            "&.MuiTab-root": {
                                minHeight: 35
                            }
                        }}
                        onClick={() => setOpenDrawer(false)}
                        {...a11yProps(0)}
                    />
                    <Tab
                        label=" About"
                        icon={<PersonOutlineOutlined/>} iconPosition="start"
                        sx={{
                            mt: 2, color: grey[900], justifyContent: "start",
                            "&.MuiTab-root": {
                                minHeight: 35
                            }
                        }}
                        onClick={() => setOpenDrawer(false)}
                        {...a11yProps(1)}
                    />
                    <Tab
                        label=" Resume"
                        icon={<SummarizeOutlined/>} iconPosition="start"
                        sx={{
                            mt: 2, color: grey[900], justifyContent: "start",
                            "&.MuiTab-root": {
                                minHeight: 35
                            }
                        }}
                        onClick={() => setOpenDrawer(false)}
                        {...a11yProps(2)}
                    />
                    <Tab
                        label=" Portfolio"
                        icon={<RecommendOutlined/>} iconPosition="start"
                        sx={{
                            mt: 2, color: grey[900], justifyContent: "start",
                            "&.MuiTab-root": {
                                minHeight: 35
                            }
                        }}
                        onClick={() => setOpenDrawer(false)}
                        {...a11yProps(3)}
                    />
                    <Tab
                        label=" Services"
                        icon={<MiscellaneousServicesOutlined/>} iconPosition="start"
                        sx={{
                            mt: 2, color: grey[900], justifyContent: "start",
                            "&.MuiTab-root": {
                                minHeight: 35
                            }
                        }}
                        onClick={() => setOpenDrawer(false)}
                        {...a11yProps(4)}
                    />
                    <Tab
                        label=" Contact"
                        icon={<PermContactCalendarOutlined/>} iconPosition="start"
                        sx={{
                            mt: 2, color: grey[900], justifyContent: "start",
                            "&.MuiTab-root": {
                                minHeight: 35
                            }
                        }}
                        onClick={() => setOpenDrawer(false)}
                        {...a11yProps(5)}
                    />
                </Tabs>
            </Box>
        </Box>
    );
};

export default DrawerContent;
