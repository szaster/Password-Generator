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
              paddingTop={2}
              paddingLeft={2}
              textAlign="left"
              //   fontWeight="fontWeight"
              fontSize={16}
              m={7}
            >
              <p>
                This application generates random passwords using
                Crypto.getRandomValues() method, which allows to create
                cryptographically strong random values with a high entropy. As a
                result, passwords generated with this application are strong and
                secure. Manipulating the length and options for the password
                allows to password customization.{" "}
              </p>
              Read more on password strength{" "}
              <a
                href="https://en.wikipedia.org/wiki/Password_strength"
                target="_blank"
              >
                here
              </a>
            </Box>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default About;
