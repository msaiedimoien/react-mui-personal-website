import {Avatar, Box, Divider, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {blueGrey, grey} from "@mui/material/colors";

const Sidebar = () => {
  return(
      <Grid
          xs={0} sm={0} md={3} lg={3} xl={2}
          sx={{backgroundColor: "primary.main"}}
      >
          <Box
              sx={{justifyContent: "center", textAlign: "center", mt: 2}}
          >
              <Avatar
                  src={require("../../assets/Avatar.png")}
                  sx={{height: 150, width: 150, margin: "0 auto"}}
              />
              <Typography variant="h6" sx={{color: grey[900]}}>Mustafa Saeidi Moein</Typography>
              <Typography variant="caption" sx={{color: grey[800]}}>ReactJS Programmer</Typography>
              <Divider variant="middle" color={grey[900]} sx={{mt: 2}}/>
          </Box>
      </Grid>
  )
};

export default Sidebar;
