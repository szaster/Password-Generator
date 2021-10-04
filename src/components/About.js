import React from "react";
import LockIcon from "@material-ui/icons/Lock";
import {
  AppBar,
  Typography,
  makeStyles,
  Toolbar,
  Button,
  Box,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
  },
  layout: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
  },
}));

// function Header() {
// const location = useLocation();

function About() {
  const classes = useStyles();
  return (
    <div>
      <Paper
        elevation={10}
        outlined
        square
        m={20}
        style={{ background: "#eceff1" }}
      >
        <Typography component="div" variant="subtitle1" gutterBottom>
          <Box
            borderBottom={1}
            paddingBottom={2}
            textAlign="center"
            fontWeight="fontWeightMedium"
            fontSize={20}
            m={1}
          >
            About egirwgperk gpok r gop w select options for generating password
          </Box>
        </Typography>
      </Paper>
    </div>
  );
}

export default About;
