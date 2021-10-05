// import React from "react";

import {
  Typography,
  makeStyles,
  Box,
  Paper,
  Container,
  Avatar,
} from "@material-ui/core";
import { Card, Image, Icon, Rating, Transition, Menu } from "semantic-ui-react";
// import { Link } from "react-router-dom";

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
              // fontWeight="medium"
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

        <Paper
          elevation={1}
          outlined
          square
          m={20}
          style={{ background: "#eceff1" }}
        >
          <Typography component="div" variant="subtitle2" gutterBottom>
            <Box
              paddingBottom={2}
              paddingTop={2}
              paddingLeft={2}
              textAlign="left"
              // fontWeight="medium"
              fontSize={16}
              m={7}
            >
              Svitlana Zaster
              <Avatar
                sx={{ width: 56, height: 56 }}
                alt="Svitlana Zaster"
                src="https://avatars0.githubusercontent.com/u/41549193?s=460&u=db37f111050f68541fbc9518cb365aa225e070f7&v=4"
              />
              Full Stack Web Developer
              <Typography>
                View More:{" "}
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/svitlana-zaster-77a9a06b/"
                ></a>
                <Icon name="linkedin" color="blue" size="big" />
              </Typography>
            </Box>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default About;
