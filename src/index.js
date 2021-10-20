import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";

import ToggleColorMode from "./theme";
// import theme from "./theme";

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);
