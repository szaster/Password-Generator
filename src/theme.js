import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box } from "@mui/system";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import {
  teal,
  green,
  red,
  amber,
  grey,
  deepOrange,
  purple,
} from "@mui/material/colors";

// const theme = createTheme({
//   palette: {
//     type: "light",
//     primary: red,
//     secondary: teal,
//   },
// });

// export default theme;

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ThemeApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

function ToggleColorMode() {
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
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ThemeApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode;

// export default theme;
