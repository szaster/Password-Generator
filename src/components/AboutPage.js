import React from "react";
import { useLocation } from "react-router-dom";
// import "../theme";

import {
  Typography,
  makeStyles,
  Box,
  Paper,
  Container,
  Avatar,
} from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", padding: "0px 70px" },
  rowLayout: {
    display: "flex",
    alignItems: "baseline",
  },
  left: { marginRight: "auto" }, //aligns Flexboxes to the left!
  positionAvatar: {
    display: "flex",
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

// const location = useLocation();

function About() {
  const classes = useStyles();

  const location = useLocation();
  console.log(location);
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
              paddingTop={1}
              paddingLeft={1}
              textAlign="left"
              // fontWeight="medium"
              fontSize={16}
              m={7}
            >
              <Typography>
                <Box
                  textAlign="center"
                  fontWeight="fontWeightLarge"
                  fontSize={30}
                  m={1}
                  paddingTop={0}
                  paddingBottom={0}
                >
                  About this application
                </Box>
                This application generates random passwords using
                Crypto.getRandomValues() method, which allows to create
                cryptographically strong random values with a high entropy. As a
                result, passwords generated with this application are strong and
                secure. Manipulating the length and options for the password
                allows to password customization. The app does not store the
                passwords neither locally, nor remotely. Please save your newly
                generated passwords on your machine.{" "}
              </Typography>
              <p>
                Read more on password strength{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Password_strength"
                  target="_blank"
                >
                  here
                </a>
              </p>
            </Box>
          </Typography>
        </Paper>

        <Paper
          elevation={10}
          outlined
          square
          m={2}
          style={{ background: "#DCEDC8" }}
        >
          <Typography component="div" variant="subtitle2" gutterBottom>
            <Box
              paddingBottom={3}
              paddingTop={3}
              paddingLeft={1}
              textAlign="left"
              fontSize={19}
              display="flex"
              flexDirection="column"
              padding={1}
              m={7}
            >
              <Avatar
                style={{ height: 170, width: 170 }}
                // display="flex"
                className={classes.positionAvatar}
                alt="Svitlana Zaster"
                src="https://avatars0.githubusercontent.com/u/41549193?s=460&u=db37f111050f68541fbc9518cb365aa225e070f7&v=4"
              />
              <Typography variant="subtitle3">
                Svitlana Zaster | Full Stack Web Developer
              </Typography>

              <Typography>
                <Box
                  paddingBottom={1}
                  paddingTop={1}
                  paddingLeft={1}
                  textAlign="left"
                  fontSize={20}
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
              </Typography>
            </Box>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default About;
