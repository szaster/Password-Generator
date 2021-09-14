import React from "react";
import Grid, { Button } from "@material-ui/core";

function RegeneratePasswordButton(props) {
  const options = props.options;

  // password character set
  const lowerAlphas = "qwertyuiopasdfghjklzxcvbnm";
  const upperAlphas = lowerAlphas.toUpperCase();
  const numbers = "1234567890";
  const special = "!@#$%^&*()_+=-;':/?.,|\\<>";

  const emptyString = "";
  let password = emptyString;

  const handleClick = (event) => {
    props.handleNewOptions({
      ...options,
    });
  };

  return (
    <Button style={{ background: "pink", margin: 20 }} onClick={handleClick}>
      Regenerate Password
    </Button>
  );
}

export default RegeneratePasswordButton;
