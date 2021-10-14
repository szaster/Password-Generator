import React, { useState } from "react";
import { Box } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { createTheme } from "@material-ui/core/styles";
import { teal, purple } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: purple,
    secondary: teal,
  },
});

export default theme;

// import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
// import {
//   teal,
//   green,
//   red,
//   amber,
//   grey,
//   deepOrange,
//   purple,
// } from "@mui/material/colors";

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// function ThemeApp() {
//   const theme = useTheme();
//   const colorMode = React.useContext(ColorModeContext);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         width: "100%",
//         alignItems: "center",
//         justifyContent: "center",
//         bgcolor: "pink",
//         color: "text.primary",
//         borderRadius: 1,
//         p: 3,
//       }}
//     >
//       <IconButton
//         sx={{ ml: 1 }}
//         onClick={colorMode.toggleColorMode}
//         color="inherit"
//       >
//         {theme.palette.mode === "dark" ? (
//           <Brightness7Icon />
//         ) : (
//           <Brightness4Icon />
//         )}
//       </IconButton>
//     </Box>
//   );
// }

// const ToggleColorMode = () => {
//   const [mode, setMode] = React.useState("light");
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//       },
//     }),
//     []
//   );

//   const theme = React.useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode]
//   );

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <ThemeApp />
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// };

// export default ToggleColorMode;
