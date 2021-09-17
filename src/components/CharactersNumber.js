import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Input, Slider, Box, Typography } from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     width: 450,
//     flexGrow: 1,
//     // overflow: "hidden",
//   },
//   input: {
//     width: 50,
//   },
// });

const useStyles = makeStyles((theme) => ({
  container: { display: "flex" },
  details: { display: "flex", flexDirection: "column", padding: "0px 15px" },
}));

function CharactersNumber(props) {
  const classes = useStyles();

  const handleInputChange = (event) => {
    console.log(event);
    props.setPasswordLength(
      event.target.value === "" ? "" : Number(event.target.value)
    );
  };

  const handleSliderChange = (event, newValue) => {
    props.setPasswordLength(newValue);
  };

  const handleBlur = () => {
    if (props.passwordLength < 0) {
      props.setPasswordLength(0);
    } else if (props.passwordLength > 100) {
      alert("Password length must be less than 36 characters");
      props.setPasswordLength(36);
    } else if (props.passwordLength < 10) {
      alert("Password length must be at least 10 characters");
      props.setPasswordLength(10);
    }
  };

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
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
              min: 10,
              max: 36,
              type: "number",
            }}
          />
        </Grid>
        <Grid item xs={12} sm>
          <Slider
            type="range"
            min={10}
            max={36}
            step={1}
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
