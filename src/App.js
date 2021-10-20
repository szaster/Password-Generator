import React from "react";
import "./App.css";
import { ColorModeContext } from "./context";
import { Home, About, Header } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  BrowserRouter as Router,
} from "react-router-dom";

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
                // divider: amber[200],
                background: {
                  default: amber,
                  paper: deepOrange[900],
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
                  default: deepOrange[900],
                  paper: deepOrange[900],
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500],
                },
              }),
          // mode,
          // secondary: teal,
          // primary: red,
          // text: {
          //   primary: grey[900],
          //   secondary: grey[800],
          // },
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
