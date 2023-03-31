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
  body:{
    margin:o,
    padding:0,
    boxSizing:border-box,
    fontFamily: 'ubuntu',},
  
  typography: {
    fontFamily: [
      "ubuntu",
    ].join(","),
    fontSize: 25,

      
      // add any other typography-related properties you want to apply to all components
    }
}
   
   

);

export default MuiTheme;
