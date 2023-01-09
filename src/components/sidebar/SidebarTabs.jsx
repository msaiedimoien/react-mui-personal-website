import {Tab, Tabs} from "@mui/material";
import {grey} from "@mui/material/colors";
import {useContext} from "react";
import MainContext from "../../context";
import {tabsList} from "../tabs/tabsList.sidebar";

const SidebarTabs = () => {
    const {pageNumber, handlePageNumber, setDrawerOpen} = useContext(MainContext);

    const data = tabsList();

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            allowScrollButtonsMobile
            style={{width: "100%"}}
            value={pageNumber}
            onChange={handlePageNumber}
        >
            {
                data.map((tab, index) => (
                    <Tab
                        key={index}
                        label= {tab.label}
                        icon={tab.icon} iconPosition="start"
                        sx={{
                            mt: 2, color: grey[900], justifyContent: "start",
                            "&.MuiTab-root": {
                                minHeight: 35
                            }
                        }}
                        onClick={() => setDrawerOpen(false)}
                        {...tab}
                    />
                ))
            }
        </Tabs>
    );
};

export default SidebarTabs;
