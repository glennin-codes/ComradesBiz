import { createTheme } from "@mui/material/styles";

const MuiTheme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
     

  },
  
  typography: {
    fontFamily: [
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
       
      fontSize: "1.25rem",
      // add any other typography-related properties you want to apply to all components
    }
}
   
   

);

export default MuiTheme;
