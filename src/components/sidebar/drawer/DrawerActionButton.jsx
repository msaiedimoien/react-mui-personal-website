import {Box, Fab} from "@mui/material";
import {amber} from "@mui/material/colors";
import {MenuOutlined} from "@mui/icons-material";
import {useContext} from "react";
import MainContext from "../../../context";

const DrawerActionButton = () => {
    const {setDrawerOpen} = useContext(MainContext);

    return (
        <Box
            sx={{
                position: "absolute",
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
                aria-label="Sidebar" onClick={() => setDrawerOpen(true)} size="medium"
                sx={{m: 3, backgroundColor: amber[400]}}
            >
                <MenuOutlined/>
            </Fab>
        </Box>
    );
};

export default DrawerActionButton;
