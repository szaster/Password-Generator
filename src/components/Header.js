import React from "react";
import LockIcon from "@material-ui/icons/Lock";
import {
  AppBar,
  Typography,
  makeStyles,
  Toolbar,
  Button,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", width: "100%" },
  title: {
    marginLeft: theme.spacing(2),
  },
  layout: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <LockIcon />
          <div className={classes.layout}>
            <Typography className={classes.title} variant="h6" component="h1">
              Random Password Generator
            </Typography>
            <Button className={classes.about} color="inherit">
              About
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
