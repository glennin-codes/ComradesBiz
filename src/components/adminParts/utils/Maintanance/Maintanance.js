import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import {  styled } from "@mui/system";
import MuiTheme from "../MuiTheme";

const MovingText = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  backgroundColor: "#f44336",
  fontSize:'18px',
  color: "#fff",
  textAlign:'center',
  padding: theme.spacing(2),
  animation: "move 10s linear infinite",
  "@keyframes move": {
    "0%": {
      transform: "translateX(-100%)",
    },
    "100%": {
      transform: "translateX(100%)",
    },
  },
}));

const MaintenanceNotice = () => {
  return (

    <ThemeProvider theme={MuiTheme}>
    <MovingText>
      Our system is currently under maintenance to resolve some minor issues. We
      apologize for any inconvenience caused and appreciate your patience during
      this time.
    </MovingText>
    </ThemeProvider>
  );
};

export default MaintenanceNotice;
