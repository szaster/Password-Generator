import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import DarkModeToggler from "./theme";

ReactDOM.render(
  <Router>
    {/* <ThemeProvider theme={DarkModeToggler}> */}
    <CssBaseline />
    <App />
    {/* </ThemeProvider> */}
  </Router>,

  document.getElementById("root")
);
