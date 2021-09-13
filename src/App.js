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
  uppercase: true,
  specialCharacters: true,
  numbers: true,
  passwordLength: 10,
};

const initialPassword = generatePassword(initialOptions);

function generatePassword(options) {
  // const [state, setState] = React.useState({
  //   lowercaseChecked: true,
  //   uppercaseChecked: true,
  //   specialCharactersChecked: true,
  //   numbersChecked: true,
  // });

  const numbersArray = window.crypto.getRandomValues(new Uint32Array(10));
  const numbers = numbersArray[0];
  console.log(numbersArray);
  return `${numbers}`;
}

function PasswordDisplay(props) {
  return <Paper>{props.password}</Paper>;
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
    const newPassword = generatePassword(newOptions);
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
        <RegeneratePasswordButton password={password} />
      </Container>
    </div>
  );
}

export default App;
