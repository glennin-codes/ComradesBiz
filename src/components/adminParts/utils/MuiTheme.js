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
    margin:0,
    padding:0,
    boxSizing:'border-box',
    fontFamily: 'ubuntu',},
  
  typography: {
    fontFamily: [
      "ubuntu",
    ].join(","),
    fontSize: 25,
    
TextField:{
  textTransform:'none',

}
      
      // add any other typography-related properties you want to apply to all components
    }
}
   
   

);

export default MuiTheme;
