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

// function MenuLink({ label, to, activeOnlyWhenExact }) {
//   let match = useRouteMatch({
//     path: to,
//     exact: activeOnlyWhenExact,
//   });

//   return (
//     <div className={match ? "active" : ""}>
//       {match}
//       <Link to={to}>{label}</Link>
//     </div>
//   );
// }

function HeaderLink(props) {
  switch (props.pathname) {
    case "/about":
      return (
        <Link to="/" style={{ color: "white", fontWeight: "bold" }}>
          Home
        </Link>
      );
    default:
      return (
        <Link to="about" style={{ color: "white", fontWeight: "bold" }}>
          About
        </Link>
      );
  }
}

function Header() {
  const location = useLocation();
  console.log("Location", location);
  const classes = useStyles();

  return (
    <AppBar color="primary" position="fixed">
      <Toolbar>
        <LockIcon />

        {/* <MenuLink activeOnlyWhenExact={true} to="/" label="Home" /> */}
        {/* <MenuLink to="/about" label="About" /> */}

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
