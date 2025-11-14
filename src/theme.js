import {createTheme} from '@mui/material/styles';
import {pink, teal, grey} from '@mui/material/colors';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: teal[400],
            dark: teal[600],
            contrastText: teal[50],
        },
        secondary: {
            main: pink[300],
            dark: pink[400],
            contrastText: pink[50],
        },
    },
    typography: {
        fontFamily: "Inter",
        allVariants: {
            color: grey[200]
        }
    },
});

export default theme;
