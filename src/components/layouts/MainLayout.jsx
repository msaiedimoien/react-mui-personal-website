import {ThemeProvider, Typography} from "@mui/material";
import {theme} from "../ui/theme";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import Grid from "@mui/material/Unstable_Grid2";

//NOTE Create RTL cache
const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
});

export const MainLayout = ({children}) => {
    return(
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>Mustafa Saeidi's WebSite</title>
                    </Helmet>
                    {/*Grid System*/}
                    <Grid container sx={{height: "100vh"}}>
                        <Grid xs={0} sm={0} md={3} lg={3} xl={2} sx={{backgroundColor: "primary.main"}}>
                            <Typography variant="h6">Sidebar</Typography>
                        </Grid>
                        <Grid xs={12} sm={12} md={9} lg={9} xl={10} sx={{backgroundColor: "secondary.main"}}>
                            <Typography variant="h6" sx={{textAlign: "center"}}>Main Content</Typography>
                        </Grid>
                    </Grid>
                    {children}
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
};
