import React from "react";
import "./App.css";
import Options from "./components/Options";
import Header from "./components/Header";
import CharacterNumber from "./components/CharactersNumber";
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
      {/*<Button style={{ background: "lime" }} onClick={handleStartClick}>
        START
      </Button>{" "}
      */}
      <Container maxWidth="sm" m={6}>
        <Header />
        <Paper elevation={10} outlined square m={20}>
          {/* <Typography variant="h5" component="h5">
          Please select options for generating password
          </Typography> */}

          <Options />
        </Paper>
        <NewPasswordButton />
      </Container>
    </div>
  );
}

export default App;
