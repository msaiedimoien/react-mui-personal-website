import {Box, Drawer, Fab} from "@mui/material";
import {useState} from "react";
import DrawerContent from "../DrawerContent";
import {MenuOutlined} from '@mui/icons-material';
import {amber} from "@mui/material/colors";

const Sidebar = ({value, handleChange}) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <Box
                sx={{
                    display: {
                        xs: "block",
                        sm: "block",
                        md: "none",
                        lg: "none",
                        xl: "none"
                    },

                }}
            >
                <Fab
                    aria-label="Sidebar" onClick={() => setOpenDrawer(true)} size="medium"
                    sx={{m: 3, backgroundColor: amber[400]}}
                >
                    <MenuOutlined/>
                </Fab>
            </Box>
            <DrawerContent value={value} handleChange={handleChange}/>
            <Drawer
                open={openDrawer}
                variant="temporary"
                anchor="right"
                onClose={() => setOpenDrawer(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 300,
                    },
                    display: {
                        xs: "block", sm: "block", md: "none", lg: "none", xl: "none"
                    }
                }}
            >
                <DrawerContent
                    value={value} handleChange={handleChange}
                    openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
            </Drawer>
        </>
    )
};

export default Sidebar;
