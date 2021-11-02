import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import { makeStyles } from "@mui/styles";
import { AppBar, Typography, Toolbar, IconButton } from "@mui/material";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import { BoxedThemeToggle } from "./BoxedThemeToggle";

const useStyles = makeStyles(() => ({
  leftToolbar: {
    marginRight: 16,
    marginLeft: -12,
  },
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12,
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
          <IconButton className={classes.menuButton} color="inherit">
            <LockIcon />
          </IconButton>

          <Typography variant="h6" component="h1">
            Random Password Generator
          </Typography>

          <section className={classes.rightToolbar}>
            <BoxedThemeToggle />
            <HeaderLink pathname={location.pathname} />
          </section>
        </Toolbar>
      </AppBar>
    </div>
  );
}
