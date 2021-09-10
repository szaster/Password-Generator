import React from "react";
import Grid, { Button } from "@material-ui/core";
import Icons from "@material-ui/icons";

const NewPasswordButton = () => {
  // password character set
  const lowerAlphas = "qwertyuiopasdfghjklzxcvbnm";
  const upperAlphas = lowerAlphas.toUpperCase();
  const numbers = "1234567890";
  const special = "!@#$%^&*()_+=-;':/?.,|\\<>";

  return (
    <Button style={{ background: "pink", margin: 20 }}>
      Generate Password
    </Button>
  );
};

export default NewPasswordButton;
