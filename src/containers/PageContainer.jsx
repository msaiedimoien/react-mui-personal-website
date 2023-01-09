import Grid from "@mui/material/Unstable_Grid2";

const PageContainer = ({ children }) => {
    return (
        <Grid
            xs={12} sm={12} md={9} lg={9} xl={10}
            sx={{backgroundColor: "secondary.main"}}
        >
            {children}
        </Grid>
    );
};

export default PageContainer;
