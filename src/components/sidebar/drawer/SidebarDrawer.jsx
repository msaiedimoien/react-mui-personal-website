import {Drawer} from "@mui/material";
import SidebarContent from "../SidebarContent";
import {useContext} from "react";
import MainContext from "../../../context";

const SidebarDrawer = () => {
    const {drawerOpen, setDrawerOpen} = useContext(MainContext);

    return (
        <Drawer
            open={drawerOpen}
            variant="temporary"
            anchor="right"
            onClose={() => setDrawerOpen(false)}
            sx={{
                "& .MuiDrawer-paper": {
                    width: 300,
                },
                display: {
                    xs: "block", sm: "block", md: "none", lg: "none", xl: "none"
                }
            }}
        >
            <SidebarContent/>
        </Drawer>
    );
};

export default SidebarDrawer;
