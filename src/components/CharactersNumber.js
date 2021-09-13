import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Input, Slider, Box, Typography } from "@material-ui/core";

// TODO! What is root: {r....}
const useStyles = makeStyles({
  root: {
    // width: 450,
    flexGrow: 1,
    overflow: "hidden",
  },
  input: {
    width: 50,
  },
});

function CharactersNumber(props) {
  const classes = useStyles();
  // const [value, setValue] = React.useState(20);

  const handleInputChange = (event) => {
    console.log(event);
    props.setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleSliderChange = (event, newValue) => {
    props.setValue(newValue);
  };

  const handleBlur = () => {
    if (props.passwordLength < 0) {
      props.setValue(0);
    } else if (props.passwordLength > 100) {
      props.setValue(100);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item style={{ padding: 20 }}>
          <Box textAlign="center" fontWeight="fontWeightMedium">
            Password length
          </Box>
        </Grid>
        <Grid item xs={12} sm>
          <Input
            className={classes.input}
            value={props.passwordLength}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 5,
              min: 0,
              max: 100,
              type: "number",
            }}
          />
        </Grid>
        <Grid item xs={12} sm>
          <Slider
            value={
              typeof props.passwordLength === "number"
                ? props.passwordLength
                : 0
            }
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default CharactersNumber;
