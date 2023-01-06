import {Box, Fab} from "@mui/material";
import {amber} from "@mui/material/colors";
import {MenuOutlined} from "@mui/icons-material";

const DrawerActionButton = ({setOpenDrawer}) => {
  return(
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
  );
};

export default DrawerActionButton;
