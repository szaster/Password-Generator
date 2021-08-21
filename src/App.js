import React from "react";
import "./App.css";
import Options from "./components/Options";
import NewPasswordButton from "./components/generateButton";
import { Grid, Button, useMediaQuery, Hidden } from "@material-ui/core";
import { ContactSupportOutlined } from "@material-ui/icons";

function App() {
  const [language, setLanguage] = React.useState("python");

  function handleStartClick() {
    alert("Start Button was clicked");
  }
  return (
    <div className="App">
      <h1 style={{ background: "pink" }}>
        Welcome! This application generates a random password based on the
        criteria provided by a user
      </h1>
      <Button onClick={() => setLanguage("JavaScript")}>Change language</Button>
      <p>Iam learning {language}</p>
      <Button style={{ background: "lime" }} onClick={handleStartClick}>
        START
      </Button>
      <Options />
      <NewPasswordButton />
    </div>
  );
}

export default App;
