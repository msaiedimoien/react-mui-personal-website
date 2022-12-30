import {ThemeProvider} from "@mui/material";
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
                        {children}
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
};
