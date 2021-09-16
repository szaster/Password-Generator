import React from "react";
import "./App.css";
import Options from "./components/Options";
import Header from "./components/Header";
import RegeneratePasswordButton from "./components/RegenerateButton";
import {
  Grid,
  Button,
  useMediaQuery,
  Hidden,
  Paper,
  Container,
  Typography,
} from "@material-ui/core";

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
  // return <div>{props.password}</div>;
  return password;
}

function selectRandomIndexes(options) {
  // const positions =
}

function getCharacters(options) {
  // password character set
  const lowerAlphas = "qwertyuiopasdfghjklzxcvbnm";
  const upperAlphas = lowerAlphas.toUpperCase();
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+=-;':/?.,|\\<>";

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

  // ???
  // const choices = generatePasswordIndexes(maxChar);
  // ????

  // const passwordCharacters = [];
  // choices.map((i) => passwordCharacters.push);
  // console.log("number choices:", choices);
  // console.log("total char", maxChar);
  // console.log("choices???????? why undefined. Does  line 67 works?", choices);
  // console.log("AllCharacters", charactersPool);

  return charactersPool;
}

//////////////////////////////////////////
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
//////////////////////////////////

function App() {
  const [options, setOptions] = React.useState(initialOptions);
  const [password, setPassword] = React.useState(initialPassword);

  function handleNewOptions(newOptions) {
    console.log(
      "handleNewOptions function has been called and new options are:",
      newOptions
    );
    // const charactersPool = getCharacters(newOptions);
    // console.log("Characters to take password from", charactersPool);
    setOptions(newOptions);
    const newPassword = generatePassword(newOptions);

    // const newPassword = generatePasswordIndexes(newOptions, 10);
    console.log("Generated a new password", newPassword);
    setPassword(newPassword);
  }

  return (
    <div className="App">
      {/* <Hidden only="xs"> */}
      <Header />
      {/* </Hidden> */}
      <Container maxWidth="sm" m={10}>
        <Paper elevation={10} outlined square m={20}>
          generatePasswordIndexes()
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
