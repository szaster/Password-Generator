import React from "react";
import "./App.css";
import { ColorModeContext } from "./context";
import { Home, About, Header } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { modeToTheme } from "./theme";

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

  const theme = React.useMemo(() => modeToTheme(mode), [mode]);

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
