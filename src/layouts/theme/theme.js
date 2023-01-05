import {createTheme} from "@mui/material";
import {blue, red} from "@mui/material/colors";

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
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false,
            }
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'dashed' },
                    style: {
                        textTransform: 'none',
                        border: `2px dashed ${blue[500]}`,
                    },
                },
                {
                    props: { variant: 'dashed', color: 'secondary' },
                    style: {
                        border: `4px dashed ${red[500]}`,
                    },
                },
            ],
        },
    },

});
