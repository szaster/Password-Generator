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
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";

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

function makeLink(pathname) {
  switch (pathname) {
    case "/about":
      return { to: "/", text: "Home" };
    default:
      return { to: "/about", text: "About" };
  }
}

function HeaderLink(props) {
  const { to, text } = makeLink(props.pathname);
  return (
    <Link to={to} style={{ color: "white", fontWeight: "bold" }}>
      {text}
    </Link>
  );
}

function Header() {
  const location = useLocation();
  console.log("Location", location);
  const classes = useStyles();

  return (
    <AppBar color="primary" position="fixed">
      <Toolbar>
        <LockIcon />
        <div className={classes.layout}>
          <Typography className={classes.title} variant="h6" component="h1">
            Random Password Generator
          </Typography>
          <HeaderLink pathname={location.pathname} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
