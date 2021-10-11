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

const theme = createTheme({
  palette: {
    type: "light",
    primary: purple,
    secondary: teal,
  },
});

// const useDarkMode = () => {
//   const [theme, setTheme] = useState(theme);

//   const {
//     palette: { type },
//   } = theme;
//   const toggleDarkMode = () => {
//     const updatedTheme = {
//       ...theme,
//       palette: {
//         ...theme.palette,
//         type: type === "light" ? "dark" : "light",
//       },
//     };
//     setTheme(updatedTheme);
//   };
//   return [theme, toggleDarkMode];
// };

export default theme;
