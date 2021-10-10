import React from "react";
import { useLocation } from "react-router-dom";

import {
  Card,
  Typography,
  makeStyles,
  Box,
  Paper,
  Container,
  Avatar,
} from "@material-ui/core";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", padding: "0px 10px" },
  media: {
    height: 140,
  },
  card: {
    maxWidth: 350,
    margin: "auto",
  },

  clickableIconIn: {
    color: "blue",
    "&:hover": {
      color: "yellow",
    },
  },
  clickableIconGh: {
    color: "black",
    "&:hover": {
      color: "yellow",
    },
  },
}));

function About() {
  const classes = useStyles();

  const location = useLocation();
  console.log(location);
  return (
    <div className={classes.root}>
      <Container style={{ paddingTop: 100 }} maxWidth="sm" m={1}>
        <Paper
          elevation={10}
          outlined
          square
          m={50}
          style={{ background: "#eceff1" }}
        >
          <Typography component="div" variant="subtitle1" gutterBottom>
            <Box
              paddingBottom={1}
              paddingTop={2}
              borderBottom={1}
              paddingLeft={1}
              textAlign="center"
              fontSize={20}
              fontWeight="fontWeightMedium"
              m={1}
            >
              About this application
            </Box>
            <Box
              paddingLeft={3}
              paddingTop={1}
              paddingBottom={1}
              textAlign="center"
              fontWeight="fontWeightMedium"
              fontSize={15}
              textAlign="left"
              m={1}
            >
              <Typography variant="body" component="p">
                This application generates random passwords using
                Crypto.getRandomValues() method, which allows to create
                cryptographically strong random values with a high entropy. As a
                result, passwords generated with this application are strong and
                secure. Manipulating the length and options for the password
                allows to password customization. The app does not store the
                passwords neither locally, nor remotely. Please save your newly
                generated passwords on your machine.{" "}
                <p>
                  Read more on password strength{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Password_strength"
                    target="_blank"
                  >
                    here
                  </a>
                </p>
              </Typography>
            </Box>
          </Typography>
        </Paper>
        <br />
        <br />
        <Card
          className={classes.card}
          elevation={10}
          outlined
          square
          m={3}
          style={{ background: "#DCEDC8" }}
        >
          <Box
            paddingBottom={2}
            paddingTop={2}
            paddingLeft={5}
            textAlign="center"
            fontSize={15}
            display="flex"
            flexDirection="row"
            padding={1}
            m={1}
          >
            <Avatar
              className={classes.media}
              style={{ height: 100, width: 100 }}
              display="flex"
              alt="Svitlana Zaster"
              src="https://avatars0.githubusercontent.com/u/41549193?s=460&u=db37f111050f68541fbc9518cb365aa225e070f7&v=4"
            />
            <Box paddingTop={5} paddingLeft={2}>
              <Typography variant="h6" component="h5">
                Svitlana Zaster
              </Typography>
              <Typography variant="h7" component="h5">
                Full Stack Web Developer
              </Typography>
            </Box>
          </Box>

          <Box
            paddingBottom={1}
            paddingTop={0}
            paddingLeft={8}
            textAlign="center"
            fontSize={15}
            display="flex"
            flexDirection="row"
            padding={1}
            m={1}
          >
            Connect with me:
            <LinkedInIcon
              onClick={(event) =>
                (window.location.href =
                  "https://www.linkedin.com/in/svitlana-zaster-77a9a06b/")
              }
              fontSize="large"
              className={classes.clickableIconIn}
            />{" "}
            <GitHubIcon
              onClick={(event) =>
                (window.location.href = "https://github.com/szaster")
              }
              className={classes.clickableIconGh}
              fontSize="large"
            />{" "}
          </Box>
        </Card>
      </Container>
    </div>
  );
}

export default About;
