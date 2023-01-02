import {Drawer} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {useState} from "react";
import DrawerContent from "./ui/DrawerContent";

const Sidebar = ({value, handleChange}) => {
    const[openDrawer, setOpenDrawer] = useState(false);



  return(
      <Grid
          xs={0} sm={0} md={3} lg={3} xl={2}
          sx={{backgroundColor: "primary.main"}}
      >
          <DrawerContent value={value} handleChange={handleChange} />

          <Drawer
              open={openDrawer}
              variant="temporary"
              onClose={() => setOpenDrawer(false)}
              sx={{
                  "& .MuiDrawer-paper": {
                      width: 300,
                  },
              }}
          >
              <DrawerContent value={value} handleChange={handleChange} />
          </Drawer>
      </Grid>
  )
};

export default Sidebar;
