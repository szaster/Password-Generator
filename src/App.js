import React from "react";
import "./App.css";
import Options from "./components/Options";
import NewPasswordButton from "./components/generateButton";
import { Grid, Button, useMediaQuery, Hidden } from "@material-ui/core";
import { ContactSupportOutlined } from "@material-ui/icons";

const endpoint = "https://api.github.com/users/szaster";

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    async function getUser() {
      const response = await fetch(endpoint);
      const data = await response.json();
      setUser(data);
    }
    getUser();
    // fetch(endpoint)
    //   .then((response) => response.json())
    //   .then((data) => setUser(data));
  }, []);
  function handleStartClick() {
    alert("Start Button was clicked");
  }
  return user ? (
    <div className="App">
      <h1 style={{ background: "pink" }}>
        Welcome! This application generates a random password based on the
        criteria provided by a user
      </h1>

      <Button style={{ background: "lime" }} onClick={handleStartClick}>
        START
      </Button>

      <h2>{user.name}</h2>
      <img alt="avatar" src={user.avatar_url} style={{ height: 50 }} />
      <Options />
      <NewPasswordButton />
    </div>
  ) : (
    <p>Loading</p>
  );
}

export default App;
