import React from "react";
import Grid, { Button } from "@material-ui/core";
import { Checkbox } from "@material-ui/core/Checkbox";

function RegeneratePasswordButton(props) {
  const options = props.options;

  // password character set
  const lowerAlphas = "qwertyuiopasdfghjklzxcvbnm";
  const upperAlphas = lowerAlphas.toUpperCase();
  const numbers = "1234567890";
  const special = "!@#$%^&*()_+=-;':/?.,|\\<>";

  const emptyString = "";
  let password = emptyString;

  function newPassword(props) {
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
    console.log(allCharacters);
    return allCharacters;
  }

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
