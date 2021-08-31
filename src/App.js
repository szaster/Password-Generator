import React from "react";
import "./App.css";
import Options from "./components/Options";
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

const endpoint = "https://api.github.com/users/szaster";

function App() {
  function handleStartClick() {
    alert("Start Button was clicked");
  }
  return (
    <div className="App">
      {/* <h1 style={{ background: "pink" }}>
        Welcome! This application generates a random password based on the
        criteria provided by a user
      </h1>

      <Button style={{ background: "lime" }} onClick={handleStartClick}>
        START
      </Button> */}
      <Container maxWidth="sm" m={2}>
        <Paper elevation={3} outlined square m={2}>
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
