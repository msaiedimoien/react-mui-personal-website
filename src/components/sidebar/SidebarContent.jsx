import {Box, Divider} from "@mui/material";
import {grey} from "@mui/material/colors";
import {SidebarHeader, SidebarTabs} from "./";

const SidebarContent = ({value, handleChange, openDrawer, setOpenDrawer}) => {

    return (
        <Box
            sx={{justifyContent: "center", textAlign: "center", mt: 2}}
        >
            <SidebarHeader openDrawer={openDrawer}/>
            <Divider variant="middle" color={grey[900]} sx={{mt: 2}}/>

            <Box
                style={{paddingLeft: 15, paddingRight: 15}}
            >
                <SidebarTabs value={value} handleChange={handleChange} setOpenDrawer={setOpenDrawer} />
            </Box>
        </Box>
    );
};

export default SidebarContent;
