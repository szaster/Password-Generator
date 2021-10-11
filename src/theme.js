import React, { useState } from "react";
import { Switch, FormControlLabel } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/styles";
import {
  teal,
  green,
  red,
  deepPurple,
  amber,
  purple,
  yellow,
} from "@material-ui/core/colors";

const themeObject = {
  palette: {
    primary: { main: "#053f5b" },
    secondary: { main: "#5e3c6f" },
    type: "light",
    // type: "light",
    // primary: purple,
    // secondary: teal,
  },
  themeName: "Blue Lagoon 2020",
  // typography: {
  //   fontFamily: "Bitter",
  // },
};

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject);

  const {
    palette: { type },
  } = theme;

  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "light" ? "dark" : "light",
      },
    };
    setTheme(updatedTheme);
  };
  return [theme, toggleDarkMode];
};

const DarkModeToggler = () => {
  const [theme, toggleDarkMode] = useDarkMode();

  const themeConfig = createTheme(theme);
  console.log("ThemeLog is ", themeConfig);
  return (
    <ThemeProvider theme={themeConfig}>
      <FormControlLabel
        control={<Switch onClick={toggleDarkMode} label={`Toggle Dark Mode`} />}
      />
    </ThemeProvider>
  );
};

export default DarkModeToggler;
