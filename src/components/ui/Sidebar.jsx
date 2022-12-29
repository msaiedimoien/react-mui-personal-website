import {Avatar, Box, Divider, Hidden, Tab, Tabs, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {grey} from "@mui/material/colors";
import {HomeOutlined, PersonOutlineOutlined, SummarizeOutlined,
    RecommendOutlined, MiscellaneousServicesOutlined, PermContactCalendarOutlined} from '@mui/icons-material';

const Sidebar = () => {
  return(
      <Grid
          xs={0} sm={0} md={3} lg={3} xl={2}
          sx={{backgroundColor: "primary.main"}}
      >
          <Box
              sx={{justifyContent: "center", textAlign: "center", mt: 2}}
          >
              <Hidden mdDown>
                  <Avatar
                      src={require("../../assets/Avatar.png")}
                      sx={{height: 120, width: 120, margin: "0 auto"}}
                  />
              </Hidden>
              <Typography variant="h6" sx={{color: grey[900], mt: 1}}>Mustafa Saeidi Moein</Typography>
              <Typography variant="caption" sx={{color: grey[800]}}>ReactJS Programmer</Typography>
              <Divider variant="middle" color={grey[900]} sx={{mt: 2}}/>

              <Box
                  style={{paddingLeft: 15, paddingRight: 15}}
              >
                  <Tabs
                      orientation= "vertical"
                      variant= "scrollable"
                      allowScrollButtonsMobile
                      style={{width: "100%"}}
                  >
                      <Tab
                          label=" Home"
                          icon={<HomeOutlined />} iconPosition= "start"
                          sx={{mt: 2, color: grey[900], justifyContent: "start"}}
                      />
                      <Tab
                          label=" About"
                          icon={<PersonOutlineOutlined />} iconPosition= "start"
                          sx={{color: grey[900], justifyContent: "start"}}
                      />
                      <Tab
                          label=" Resume"
                          icon={<SummarizeOutlined />} iconPosition= "start"
                          sx={{color: grey[900], justifyContent: "start"}}
                      />
                      <Tab
                          label=" Portfolio"
                          icon={<RecommendOutlined />} iconPosition= "start"
                          sx={{color: grey[900], justifyContent: "start"}}
                      />
                      <Tab
                          label=" Services"
                          icon={<MiscellaneousServicesOutlined />} iconPosition= "start"
                          sx={{color: grey[900], justifyContent: "start"}}
                      />
                      <Tab
                          label=" Contact"
                          icon={<PermContactCalendarOutlined />} iconPosition= "start"
                          sx={{color: grey[900], justifyContent: "start"}}
                      />
                  </Tabs>
              </Box>
          </Box>
      </Grid>
  )
};

export default Sidebar;
