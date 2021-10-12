import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <Router>
    {/* <ThemeProvider theme={theme}> */}
    <CssBaseline />
    <App />
    {/* </ThemeProvider> */}
  </Router>,

  document.getElementById("root")
);
