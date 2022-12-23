import {ThemeProvider, createTheme, Toolbar} from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import {HelmetProvider,Helmet} from "react-helmet-async";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";

import Header from "./components/ui/Header";
import './App.css';

//NOTE create custom theme
const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "vazir, roboto"
    }
});

//NOTE Create RTL cache
const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
});

function App() {
  return (
      <CacheProvider value={cacheRTL}>
          <ThemeProvider theme={theme}>
              <HelmetProvider>
                  <Helmet>
                      <title>Mustafa Saeidi's WebSite</title>
                  </Helmet>
                  <Header />
                  <Toolbar id="back-to-top-anchor" />
                  {[...new Array(120)]
                      .map(
                          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                      )
                      .join('\n')}
              </HelmetProvider>
          </ThemeProvider>
      </CacheProvider>
  );
}

export default App;
