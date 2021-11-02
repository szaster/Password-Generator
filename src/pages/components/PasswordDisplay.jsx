import React from "react";
import { Paper, Box, Typography, Grid } from "@mui/material";
import { useStyles } from "../Home";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export function PasswordDisplay(props) {
  const password = props.password || "not set";
  const classes = useStyles;
  return (
    <div>
      <Paper style={{ background: "#93a1a1" }} className={classes.root}>
        <ThemeProvider theme={theme}>
          <Typography variant="h6" gutterBottom>
            <Box
              textAlign="center"
              fontWeight="fontWeightLarge"
              paddingTop={2}
              paddingRight={2}
              paddingLeft={0}
              paddingBottom={2}
            >
              {password}
            </Box>
          </Typography>
        </ThemeProvider>
      </Paper>
    </div>
  );
}
