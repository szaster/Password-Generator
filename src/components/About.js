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
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", padding: "0px 70px" },
  rowLayout: {
    display: "flex",
    alignItems: "baseline",
  },
  left: { marginRight: "auto" }, //aligns Flexboxes to the left!
}));

// const location = useLocation();

function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container style={{ paddingTop: 90 }} maxWidth="sm" m={10}>
        <Paper
          elevation={10}
          outlined
          square
          m={50}
          style={{ background: "#eceff1" }}
        >
          <Typography component="div" variant="subtitle1" gutterBottom>
            <Box
              paddingBottom={2}
              textAlign="center"
              fontWeight="fontWeightMedium"
              fontSize={30}
              m={1}
            >
              About egirwgperk gpok r gop w select options for generating
              passwordbh rhb etgertg
            </Box>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default About;
