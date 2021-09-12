import React from "react";
import "./App.css";
import Options from "./components/Options";
import Header from "./components/Header";
import NewPasswordButton from "./components/generateButton";
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
  passwordLength: 12,
};

const initialPassword = generatePassword(initialOptions);

function generatePassword(options) {
  const array = new Uint32Array(10);
  window.crypto.getRandomValues(array);
  console.log(array);
  return `${array[0]}`;
}

function PasswordDisplay(props) {
  return <Paper>{props.password}</Paper>;
}

function App() {
  const [options, setOptions] = React.useState(initialOptions);
  const [password, setPassword] = React.useState(initialPassword);

  return (
    <div className="App">
      {/* <Hidden only="xs"> */}
      <Header />
      {/* </Hidden> */}
      <Container maxWidth="sm" m={10}>
        <Paper elevation={10} outlined square m={20}>
          generatePassword()
          <Options />
          <PasswordDisplay password={password} />
        </Paper>
        <NewPasswordButton />
      </Container>
    </div>
  );
}

export default App;
