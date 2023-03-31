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
    fontSize: 25,

      
      // add any other typography-related properties you want to apply to all components
    }
}
   
   

);

export default MuiTheme;
