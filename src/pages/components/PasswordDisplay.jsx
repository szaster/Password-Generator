import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { useStyles } from "../Home";

export function PasswordDisplay(props) {
  const password = props.password || "not set";
  const classes = useStyles;
  return (
    <div>
      <Paper style={{ background: "#93a1a1" }} className={classes.root}>
        <Typography component="div" variant="subtitle1" gutterBottom>
          <Box
            textAlign="center"
            fontWeight="fontWeightLarge"
            fontSize={25}
            m={3}
            paddingTop={2}
            paddingRight={2}
            paddingLeft={0}
            paddingBottom={2}
          >
            {password}
          </Box>
        </Typography>
      </Paper>
    </div>
  );
}
