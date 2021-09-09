import React from "react";
import "./App.css";
import Options from "./components/Options";
import Header from "./components/Header";
import CharactersNumber from "./components/CharactersNumber";
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

function App() {
  function handleStartClick() {
    alert("Start Button was clicked");
  }
  return (
    <div className="App">
      {/* <Hidden only="xs"> */}
      <Header />
      {/* </Hidden> */}
      <Container maxWidth="sm" m={10}>
        <Paper elevation={10} outlined square m={20}>
          <Options />
        </Paper>
        <NewPasswordButton />
      </Container>
    </div>
  );
}

export default App;
