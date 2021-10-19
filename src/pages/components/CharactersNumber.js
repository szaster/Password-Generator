import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Input, Slider, Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: { display: "flex", width: "100%" },
  details: { display: "flex", flexDirection: "row", padding: "0px 0px" },
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
    <div>
      <Grid className={classes.details}>
        <Grid item>
          <Typography component="div" variant="subtitle1">
            <Box textAlign="center" fontWeight="fontWeightMedium">
              Password length
            </Box>
          </Typography>
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
