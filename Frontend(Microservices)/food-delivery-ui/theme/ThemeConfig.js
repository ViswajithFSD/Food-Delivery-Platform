import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette: {

        primary: {
            main: "#ff5722"
        },

        secondary: {
            main: "#263238"
        }
    },

    typography: {

        fontFamily:
            "Roboto, sans-serif"
    }
});

export default theme;