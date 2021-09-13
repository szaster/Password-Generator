import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CharactersNumber from "./CharactersNumber";

function Options(props) {
  const [state, setState] = React.useState({
    lowercaseChecked: true,
    uppercaseChecked: true,
    specialCharactersChecked: true,
    numbersChecked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
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
        <Grid style={{ paddingTop: 60 }} item xs={12}>
          <CharactersNumber
            passwordLength={props.options.passwordLength}
            setValue={(newPasswordLength) => {
              props.handleNewOptions({
                ...props.options,
                passwordLength: newPasswordLength,
              });
            }}
          />
        </Grid>

        <Grid item justifyContent="flex-end" xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.lowercaseChecked}
                onChange={handleChange}
                name="lowercaseChecked"
              />
            }
            label="lowercase letters"
          />
        </Grid>
        <Grid item justifyContent="flex-end" xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.uppercaseChecked}
                onChange={handleChange}
                name="uppercaseChecked"
              />
            }
            label="uppercase letters"
          />
        </Grid>
        <Grid item justifyContent="flex-end" xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.specialCharactersChecked}
                onChange={handleChange}
                name="specialCharactersChecked"
              />
            }
            label="special characters"
          />
        </Grid>
        <Grid item justifyContent="flex-end" xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.numbersChecked}
                onChange={handleChange}
                name="numbersChecked"
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
