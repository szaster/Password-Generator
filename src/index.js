import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
// import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

ReactDOM.render(
  <Router>
    {/* <StyledEngineProvider injectFirst> */}
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <App />
      {/* </StyledEngineProvider> */}
    </ThemeProvider>
    /
  </Router>,

  document.getElementById("root")
);
