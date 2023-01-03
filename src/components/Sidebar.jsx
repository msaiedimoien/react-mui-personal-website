import {Box, Drawer, Fab} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {useState} from "react";
import DrawerContent from "./ui/DrawerContent";
import {MenuOutlined} from '@mui/icons-material';

const Sidebar = ({value, handleChange}) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerToggle = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <Grid
            xs={0} sm={0} md={3} lg={3} xl={2}
            sx={{backgroundColor: "primary.main"}}
        >
            <Box
                sx={{
                    display: {
                        xs: "block",
                        sm: "block",
                        md: "none",
                        lg: "none",
                        xl: "none"
                    },
                    m: 3
                }}
            >
                <Fab aria-label="Sidebar" color="primary" onClick={handleDrawerToggle} size="medium">
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
                <DrawerContent value={value} handleChange={handleChange} openDrawer={openDrawer}/>
            </Drawer>
        </Grid>
    )
};

export default Sidebar;
