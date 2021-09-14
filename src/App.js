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

const initialPassword = generatePassword(initialOptions);

function generatePassword(options, max) {
  const intMax = 2 ** 32 - 1;
  const numbersArray = window.crypto.getRandomValues(
    new Uint32Array(options.passwordLength)
  );
  const passwordIndex = numbersArray.map((i) => {
    return Math.floor((max * i) / (intMax + 1));
  });
  // const numbers = numbersArray[0];
  console.log(passwordIndex);
  // return `${numbers}`;
}

function PasswordDisplay(props) {
  const password = props.password || "not set";
  // return <div>{props.password}</div>;
  return password;
}

function App() {
  const [options, setOptions] = React.useState(initialOptions);
  const [password, setPassword] = React.useState(initialPassword);

  function handleNewOptions(newOptions) {
    console.log(
      "handleNewOptions function has been called and new options are:",
      newOptions
    );
    setOptions(newOptions);
    const newPassword = generatePassword(newOptions, 26);
    setPassword(newPassword);
  }

  return (
    <div className="App">
      {/* <Hidden only="xs"> */}
      <Header />
      {/* </Hidden> */}
      <Container maxWidth="sm" m={10}>
        <Paper elevation={10} outlined square m={20}>
          generatePassword()
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
