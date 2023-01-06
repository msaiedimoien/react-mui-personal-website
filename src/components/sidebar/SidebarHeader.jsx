import {Avatar, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

const SidebarHeader = ({openDrawer}) => {
  return(
      <>
          <Avatar
              src={require("../../assets/Avatar.png")}
              sx={{height: 120, width: 120, margin: "0 auto", display: {
                      xs: openDrawer ? "block" : "none", sm: openDrawer ? "block" : "none",
                      md: "block", lg: "block", xl: "block"
                  }}}
          />
          <Typography variant="h6" sx={{color: grey[900], mt: 1}}>Mustafa Saeidi Moein</Typography>
          <Typography variant="caption" sx={{color: grey[800]}}>ReactJS Programmer</Typography>
      </>
  );
};

export default SidebarHeader;
