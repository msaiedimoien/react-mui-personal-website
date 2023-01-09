import {Box, Typography} from "@mui/material";

const Page = (props) => {
  const {children, pageNumber, index, ...others} = props;

  return (
      <div
          role="tabpanel"
          hidden={pageNumber !== index}
          id={`tabpanel-${index}`}
          aria-labelledby={`sidebar-tab-${index}`}
      >
        {pageNumber === index && (
            <Box sx={{
                height: "100vh",
                overflow: "hidden",

            }}>
              <Typography>
                {children}
              </Typography>
            </Box>
        )}
      </div>
  )
};

export default Page;