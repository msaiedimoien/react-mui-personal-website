import {Avatar, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {useContext} from "react";
import MainContext from "../../context";
import avatar from "../../assets/Avatar.png"

const SidebarHeader = () => {
    const {drawerOpen} = useContext(MainContext);

    return (
        <>
            <Avatar
                src={avatar}
                sx={{
                    height: 120, width: 120, margin: "0 auto", display: {
                        xs: drawerOpen ? "block" : "none", sm: drawerOpen ? "block" : "none",
                        md: "block", lg: "block", xl: "block"
                    }
                }}
            />
            <Typography variant="h6" sx={{color: grey[900], mt: 1}}>Mustafa Saeidi Moein</Typography>
            <Typography variant="caption" sx={{color: grey[800]}}>ReactJS Programmer</Typography>
        </>
    );
};

export default SidebarHeader;
