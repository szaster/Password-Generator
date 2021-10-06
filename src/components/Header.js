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
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
  // const location = useLocation();

  const classes = useStyles();

  return (
    <AppBar color="primary" position="fixed">
      <Toolbar>
        <LockIcon />
        <div className={classes.layout}>
          <Typography className={classes.title} variant="h6" component="h1">
            Random Password Generator
          </Typography>
          <Link to="about" style={{ color: "black", fontWeight: "bold" }}>
            About
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
