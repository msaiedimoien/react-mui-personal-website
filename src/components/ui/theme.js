import {createTheme} from "@mui/material";

//NOTE create custom theme
export const theme = createTheme({
    direction: "rtl",
    palette: {
        mode: "dark",
        primary: {
            main: "#FBC02D",
        },
        secondary: {
            main: "#1DE9B6",
        },
    },
    typography: {
        fontFamily: "vazir, roboto",
    }
});
