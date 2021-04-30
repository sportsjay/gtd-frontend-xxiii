import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  Divider,
  List,
  ListItem,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

// import colors
import { colorPalette } from "../color-palette";
const colors = new colorPalette();

export default function DrawerList(props) {
  const classes = useStyles();
  // initialize local state
  const location = useLocation();
  const routes = props.routes;
  const [activePage, setActivePage] = useState(
    location.pathname.replace("/", "")
  );
  return (
    <div className={classes.root}>
      <List
        style={{
          width: "100%",
          height: "70%",
          alignContent: "space-evenly",
        }}
      >
        {routes.map((route) => (
          <Link
            key={route.path}
            style={{
              width: "100%",
              height: "100%",
              textDecoration: "none",
              color: "inherit",
            }}
            to={route.path}
          >
            <ListItem
              button
              onClick={() => setActivePage(route.name)}
              key={route.name}
              style={{
                width: "100%",
                height: `${100 / routes.length}%`,
              }}
            >
              <Typography>{route.name}</Typography>
              <div
                style={{
                  position: "absolute",
                  top: "25%",
                  right: 0,
                  width: route.name === activePage ? "75%" : 0,
                  height: "50%",
                  backgroundColor: colors.black,
                  opacity: 0.4,
                  transition: "width 0.2s ease-out",
                }}
              />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider variant="fullWidth" />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "40%",
    minWidth: 140,
    backgroundColor: colors.gray,
  },
}));
