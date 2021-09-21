import React from "react";
import "./App.css";
import Options from "./components/Options";
import Header from "./components/Header";
import RegeneratePasswordButton from "./components/RegenerateButton";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Container, Typography } from "@material-ui/core";

const initialOptions = {
  lowercase: true,
  uppercase: true,
  specialCharacters: true,
  numbers: true,
  passwordLength: 10,
};

const initialPassword = generatePasswordIndexes(initialOptions);

function generatePasswordIndexes(passwordLength, max) {
  const intMax = 2 ** 32 - 1;
  const numbersArray = window.crypto.getRandomValues(
    new Uint32Array(passwordLength)
  );

  console.log("passwordLength", passwordLength);
  console.log("numbersArray", numbersArray);

  const passwordIndexes = numbersArray.map((i) =>
    Math.floor((max * i) / (intMax + 1))
  );

  console.log("Generated the following indexes", passwordIndexes);
  return passwordIndexes;
}

function PasswordDisplay(props) {
  const password = props.password || "not set";

  return (
    <div>
      <Paper style={{ background: "#b2dfdb" }}>
        <Typography component="div" variant="subtitle1" gutterBottom>
          <Box
            textAlign="center"
            fontWeight="fontWeightLarge"
            fontSize={20}
            m={5}
            paddingTop={3}
            paddingBottom={3}
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

  const maxChar = allCharacters.join("").length;
  const charactersPool = allCharacters.join("");

  return charactersPool;
}

function generatePassword(options) {
  const charactersPool = getCharacters(options);
  console.log("Characters pool", charactersPool[31]);
  console.log("Characters pool", charactersPool);
  const indexes = generatePasswordIndexes(
    options.passwordLength,
    charactersPool.length
  );
  const chars = [];
  indexes.forEach((idx) => chars.push(charactersPool[idx]));
  console.log(chars);
  const password = chars.join("");
  return password;
  // const password = newPassword();
}

function App() {
  const [options, setOptions] = React.useState(initialOptions);
  const [password, setPassword] = React.useState(initialPassword);

  function handleNewOptions(newOptions) {
    setOptions(newOptions);
    const newPassword = generatePassword(newOptions);
    setPassword(newPassword);
  }

  return (
    <div className="App">
      <Header />
      <Container maxWidth="sm" m={10}>
        <Paper
          elevation={10}
          outlined
          square
          m={20}
          style={{ background: "#eceff1" }}
        >
          <Options handleNewOptions={handleNewOptions} options={options} />
          <PasswordDisplay password={password} />
        </Paper>
        <RegeneratePasswordButton
          handleNewOptions={handleNewOptions}
          options={options}
        />
      </Container>
    </div>
  );
}

export default App;
