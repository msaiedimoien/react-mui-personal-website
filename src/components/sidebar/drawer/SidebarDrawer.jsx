import {Drawer} from "@mui/material";
import SidebarContent from "../SidebarContent";

const SidebarDrawer = ({value, handleChange, openDrawer, setOpenDrawer}) => {
  return(
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
          <SidebarContent value={value} handleChange={handleChange}
                          openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}
          />
      </Drawer>
  );
};

export default SidebarDrawer;
