import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Paper, Box } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CharactersNumber from "./CharactersNumber";

function Options() {
  const [state, setState] = React.useState({
    lowercase: true,
    uppercase: true,
    specialCharacters: true,
    numbers: true,
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
          <CharactersNumber />
        </Grid>
        <Grid item xs={6} fontWeight="fontWeightMedium">
          <Box textAlign="center" fontWeight="fontWeightMedium">
            Options
          </Box>
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.lowercase}
                onChange={handleChange}
                name="lowercase"
              />
            }
            label="lowercase letters"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.uppercase}
                onChange={handleChange}
                name="uppercase"
              />
            }
            label="uppercase letters"
          />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.specialCharacters}
                onChange={handleChange}
                name="specialCharacters"
              />
            }
            label="special characters"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.numbers}
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
