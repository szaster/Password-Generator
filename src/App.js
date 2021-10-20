import React from "react";
import "./App.css";
import { ColorModeContext } from "./context";
import { Home, About, Header } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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
  amber,
  grey,
  deepOrange,
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
          mode,
          secondary: teal,
          primary: red,
        },
      }),
    [mode]
  );

  return (
    <Router>
      <div>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
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
