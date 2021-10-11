import React, { useState } from "react";
import { Switch, FormControlLabel } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import {
  teal,
  green,
  red,
  deepPurple,
  amber,
  purple,
  yellow,
} from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";

const themeObject = createTheme({
  palette: {
    type: "light",
    primary: purple,
    secondary: teal,
  },
  typography: {
    fontFamily: "Bitter",
  },
});

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

  console.log("the theme is:", themeConfig);
  return (
    <ThemeProvider theme={themeConfig}>
      <FormControlLabel
        control={<Switch onClick={toggleDarkMode} label={`Toggle Dark Mode`} />}
      />
    </ThemeProvider>
  );
};

export default DarkModeToggler;
