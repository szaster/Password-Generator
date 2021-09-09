import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Input, Slider, Box, Typography } from "@material-ui/core";

// TODO! What is root: {r....}
const useStyles = makeStyles({
  root: {
    width: 500,
  },
  input: {
    width: 50,
  },
});

function CharactersNumber() {
  const classes = useStyles();
  const [value, setValue] = React.useState(20);
  const handleInputChange = (event) => {
    console.log(event);
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className={classes.root}>
      {/* <Typography id="input-slider" gutter Bottom> */}

      {/* Password length */}
      {/* </Typography> */}
      <Grid container spacing={2} alignItems="center">
        <Grid item style={{ padding: 30 }}>
          <Box textAlign="center" fontWeight="fontWeightMedium">
            Password length
          </Box>
        </Grid>
        <Grid item style={{ padding: 30 }}>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number",
            }}
          />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default CharactersNumber;
