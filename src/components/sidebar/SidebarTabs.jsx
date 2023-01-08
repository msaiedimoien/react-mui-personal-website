import {Tab, Tabs} from "@mui/material";
import {
    HomeOutlined,
    MiscellaneousServicesOutlined, PermContactCalendarOutlined,
    PersonOutlineOutlined,
    RecommendOutlined,
    SummarizeOutlined
} from "@mui/icons-material";
import {grey} from "@mui/material/colors";
import {useContext} from "react";
import MainContext from "../../context";

const SidebarTabs = () => {
    const {pageNumber, handlePageNumber, setDrawerOpen} = useContext(MainContext);
    const a11yProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            'aria-controls': `tabpanel-${index}`,
        };
    }

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            allowScrollButtonsMobile
            style={{width: "100%"}}
            value={pageNumber}
            onChange={handlePageNumber}
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
                onClick={() => setDrawerOpen(false)}
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
                onClick={() => setDrawerOpen(false)}
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
                onClick={() => setDrawerOpen(false)}
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
                onClick={() => setDrawerOpen(false)}
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
                onClick={() => setDrawerOpen(false)}
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
                onClick={() => setDrawerOpen(false)}
                {...a11yProps(5)}
            />
        </Tabs>
    );
};

export default SidebarTabs;
