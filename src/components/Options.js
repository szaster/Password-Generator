import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CharactersNumber from "./CharactersNumber";

function Options(props) {
  const options = props.options;

  const handleChange = (event) => {
    const checkBoxName = event.target.name;
    const checkBoxState = event.target.checked;

    props.handleNewOptions({
      ...options,
      [checkBoxName]: checkBoxState,
    });
  };

  // todo: after this project is finished, experiment with value of options: will this component rerender if options are changed?

  /**
   Takes new password length and sets options to the old value, except for the password length, which is updated.
   */
  const setPasswordLength = (newLength) => {
    const newOptions = { ...props.options, passwordLength: newLength };
    props.handleNewOptions(newOptions);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid style={{ paddingTop: 90 }} item xs={12}>
          <Typography component="div" variant="subtitle1" gutterBottom>
            <Box
              borderBottom={1}
              textAlign="center"
              fontWeight="fontWeightMedium"
              m={1}
            >
              Please select options for generating password
            </Box>
          </Typography>
        </Grid>
        <Grid style={{ paddingBottom: 0 }} item xs={12}>
          <CharactersNumber
            passwordLength={options.passwordLength}
            setPasswordLength={setPasswordLength}
          />
        </Grid>

        <Grid item justifyContent="flex-end" xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={options.lowercase}
                onChange={handleChange}
                name="lowercase"
              />
            }
            label="lowercase letters"
          />
        </Grid>
        <Grid item justifyContent="flex-end" xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={options.uppercase}
                onChange={handleChange}
                name="uppercase"
              />
            }
            label="uppercase letters"
          />
        </Grid>
        <Grid item justifyContent="flex-end" xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={options.specialCharacters}
                onChange={handleChange}
                name="specialCharacters"
              />
            }
            label="special characters"
          />
        </Grid>
        <Grid item justifyContent="flex-end" xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={options.numbers}
                onChange={handleChange}
                name="numbers"
              />
            }
            label="numbers"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Options;
