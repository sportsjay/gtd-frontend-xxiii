import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

// import color
import { colorPalette } from "../color-palette";

// import components
import { ButtonLink } from "../button";

const colors = new colorPalette();

export default function LinkContainer(props) {
  const classes = useStyles();
  // initialize local state
  const activePage = props.activePage;
  const setActivePage = props.setActivePage;
  const routes = props.routes;

  return (
    <div className={classes.root}>
      {routes.map((route) => (
        <Link to={route.path} className={classes.link}>
          <ButtonLink
            onClick={() => setActivePage(route.name)}
            style={{ marginLeft: 4, marginRight: 4, padding: 0 }}
          >
            <Typography className={classes.linkText}>{route.name}</Typography>
            <div
              style={{
                position: "absolute",
                top: "80%",
                width: route.name === activePage ? "75%" : 0,
                height: "10%",
                maxHeight: 20,
                borderRadius: 20,
                backgroundColor: colors.black,
                opacity: 0.4,
                transition: "width 0.2s ease-out",
              }}
            />
          </ButtonLink>
        </Link>
      ))}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  link: { textDecoration: "none" },
  linkText: {
    fontWeight: "700",
    textTransform: "capitalize",
  },
}));
