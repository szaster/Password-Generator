import React from "react";
import "./App.css";
import { ColorModeContext } from "./context";
import { Home, About, Header } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import {
  teal,
  green,
  red,
  pink,
  amber,
  grey,
  deepOrange,
  deepPurple,
  purple,
} from "@mui/material/colors";

function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: purple,
                secondary: teal,
                background: {
                  default: "#fdf6e3",
                  paper: "#eee8d5",
                  button: "#93a1a1",
                  // paper: "#93a1a1",
                  // paper:""
                  // paper: "#eceff1",
                  // Card: "#DCEDC8",
                },
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
              }
            : {
                // palette values for dark mode
                primary: deepPurple,
                // divider: deepOrange[700],
                background: {
                  // default: "#002b36",
                  // paper: "#073642",
                  default: "#073642",
                  paper: "#586e75",
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500],
                },
              }),
          mode,
        },
      }),
    [mode]
  );

  return (
    <Router>
      <div>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </div>
    </Router>
  );
}

export default App;
