import React from "react";
import "./App.css";
import Options from "./components/Options";
import Header from "./components/Header";
import About from "./components/AboutPage";
import { makeStyles } from "@mui/styles";

import RegeneratePasswordButton from "./components/RegenerateButton";
import { Paper, Box, Container, Typography } from "@mui/material";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  BrowserRouter as Router,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    margin: "auto",
    display: "flex",
  },
}));

const initialOptions = {
  lowercase: true,
  uppercase: true,
  specialCharacters: true,
  numbers: true,
  passwordLength: 10,
};
const initialPassword = generatePassword(initialOptions);

function generatePasswordIndexes(passwordLength, max) {
  const intMax = 2 ** 32 - 1;
  const numbersArray = window.crypto.getRandomValues(
    new Uint32Array(passwordLength)
  );

  const passwordIndexes = numbersArray.map((i) =>
    Math.floor((max * i) / (intMax + 1))
  );
  return passwordIndexes;
}

function PasswordDisplay(props) {
  const password = props.password || "not set";
  const classes = useStyles;
  return (
    <div>
      <Paper style={{ background: "#b2dfdb" }} className={classes.root}>
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

function getCharacters(options) {
  // password character set
  const lowerAlphas = "qwertyuiopasdfghjklzxcvbnm";
  const upperAlphas = lowerAlphas.toUpperCase();
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+=-;:/?";

  const allCharacters = [];
  if (options.lowercase === true) {
    allCharacters.push(lowerAlphas);
  }
  if (options.uppercase === true) {
    allCharacters.push(upperAlphas);
  }
  if (options.specialCharacters === true) {
    allCharacters.push(special);
  }
  if (options.numbers === true) {
    allCharacters.push(numbers);
  }

  const charactersPool = allCharacters.join("");

  return charactersPool;
}

function generatePassword(options) {
  const charactersPool = getCharacters(options);
  const indexes = generatePasswordIndexes(
    options.passwordLength,
    charactersPool.length
  );
  const chars = [];
  indexes.forEach((idx) => chars.push(charactersPool[idx]));
  console.log(chars);
  const password = chars.join("");
  return password;
}

function Home() {
  const [options, setOptions] = React.useState(initialOptions);
  const [password, setPassword] = React.useState(initialPassword);

  function handleNewOptions(newOptions) {
    setOptions(newOptions);
    const newPassword = generatePassword(newOptions);
    setPassword(newPassword);
  }

  return (
    <div className="App">
      <Container style={{ paddingTop: 110 }} maxWidth="sm" m={10}>
        <Paper
          elevation={10}
          outlined
          square
          m={20}
          style={{ background: "#eceff1" }}
        >
          <Options handleNewOptions={handleNewOptions} options={options} />
          <PasswordDisplay
            handleNewOptions={handleNewOptions}
            password={password}
          />
        </Paper>
        <RegeneratePasswordButton
          handleNewOptions={handleNewOptions}
          options={options}
        />
      </Container>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
