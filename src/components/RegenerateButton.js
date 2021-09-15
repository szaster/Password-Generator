import React from "react";
import { Button, Paper } from "@material-ui/core";

function RegeneratePasswordButton(props) {
  const options = props.options;

  const handleClick = (event) => {
    props.handleNewOptions({
      ...options,
    });
  };

  return (
    <div>
      <Button style={{ background: "pink", margin: 20 }} onClick={handleClick}>
        Regenerate Password
      </Button>
    </div>
  );
}

export default RegeneratePasswordButton;
