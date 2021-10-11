// import React, { useState } from "react";
// import { Switch, FormControlLabel } from "@material-ui/core";
// import { createTheme } from "@material-ui/core/styles";
// import {
//   teal,
//   green,
//   red,
//   deepPurple,
//   amber,
//   purple,
//   yellow,
// } from "@material-ui/core/colors";
// // import theme from "./theme";

// const themeObject = {
//   palette: {
//     type: "light",
//     primary: purple,
//     secondary: teal,
//   },
// };

// const useDarkMode = () => {
//   const [theme, setTheme] = useState(themeObject);

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

// const DarkModeToggler = () => {
//   const [theme, toggleDarkMode] = useDarkMode();
//   const themeConfig = createTheme(theme);
//   console.log("Themelog", themeConfig);
//   return (
//     <FormControlLabel
//       control={<Switch onClick={toggleDarkMode} label={`Toggle Dark Mode`} />}
//     />
//   );
// };

// export default DarkModeToggler;
