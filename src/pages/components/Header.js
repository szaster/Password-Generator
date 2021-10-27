import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import { makeStyles } from "@mui/styles";
import { AppBar, Typography, Toolbar } from "@mui/material";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import { BoxedThemeToggle } from "./BoxedThemeToggle";

const useStyles = makeStyles(() => ({
  title: {
    marginLeft: "20px",
  },
  layout: {
    display: "flex",
    flexGrow: 20,
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
    <>
      <Link to={to} style={{ color: "white", fontWeight: "bold" }}>
        {text}
      </Link>
    </>
  );
}

export function Header() {
  const location = useLocation();
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <LockIcon />
          <div className={classes.layout}>
            <Typography className={classes.title} variant="h6" component="h1">
              Random Password Generator
            </Typography>

            <div>
              <BoxedThemeToggle />
              <HeaderLink pathname={location.pathname} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
