import React from "react";
import { createTheme } from "@mui/material/styles";

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

const light = {
  // palette values for light mode
  primary: red,
  secondary: teal,
  background: {
    default: "#fdf6e3",
    paper: "#eee8d5",
  },
  text: {
    primary: grey[900],
    secondary: grey[800],
  },
};

const dark = {
  // palette values for dark mode
  primary: red,
  secondary: teal,
  background: {
    default: "#073642",
    paper: "#586e75",
  },
  text: {
    primary: "#fff",
    secondary: grey[500],
  },
};
export function modeToTheme(mode) {
  const theme = mode === "light" ? light : dark;
  return createTheme({
    palette: {
      ...theme,
      mode,
    },
  });
}
