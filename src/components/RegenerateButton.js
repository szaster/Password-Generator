import React from "react";
import { Button, Typography } from "@material-ui/core";

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
        <Typography component="div" variant="Title" gutterBottom>
          Regenerate Password
        </Typography>
      </Button>
    </div>
  );
}

export default RegeneratePasswordButton;
