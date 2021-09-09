import React from "react";
import LockIcon from "@material-ui/icons/Lock";
import { AppBar, Typography, makeStyles, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar color="primary" position="fixed">
      <Toolbar>
        <LockIcon />
        <Typography className={classes.title} variant="h6" component="h1">
          Random Password Generator
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
