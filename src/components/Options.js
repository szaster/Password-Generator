import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CharactersNumber from "./CharactersNumber";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", padding: "0px 30px" },
  rowLayout: {
    display: "flex",
    alignItems: "baseline",
  },
  left: { marginRight: "auto" }, //aligns Flexboxes to the left!
}));

function Options(props) {
  const classes = useStyles();
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
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid style={{ paddingTop: 30 }} item xs={12}>
          <Typography component="div" variant="subtitle1" gutterBottom>
            <Box
              borderBottom={1}
              paddingBottom={2}
              textAlign="center"
              fontWeight="fontWeightMedium"
              fontSize={20}
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

        {/* Password options selectors */}

        <Grid item xs={12} sm={6} container className={classes.left}>
          <Grid item container xs sm>
            <FormControlLabel
              control={
                <Checkbox
                  checked={options.lowercase}
                  onChange={handleChange}
                  name="lowercase"
                  color="primary"
                  position="fixed"
                />
              }
              label="lowercase letters"
            />
          </Grid>

          <Grid item xs sm container>
            <FormControlLabel
              control={
                <Checkbox
                  checked={options.uppercase}
                  onChange={handleChange}
                  name="uppercase"
                  color="primary"
                  position="fixed"
                />
              }
              label="uppercase letters"
            />
          </Grid>
        </Grid>

        <Grid item item xs={12} sm={6} container className={classes.left}>
          <Grid item xs sm container>
            <FormControlLabel
              control={
                <Checkbox
                  checked={options.specialCharacters}
                  onChange={handleChange}
                  name="specialCharacters"
                  color="primary"
                  position="fixed"
                />
              }
              label="special characters"
            />
          </Grid>

          <Grid item xs sm container>
            <FormControlLabel
              control={
                <Checkbox
                  checked={options.numbers}
                  onChange={handleChange}
                  name="numbers"
                  color="primary"
                  position="fixed"
                />
              }
              label="numbers"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Options;
