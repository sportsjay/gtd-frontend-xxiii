import React from "react";
import { makeStyles, Divider, List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";

import {
  HomeRounded,
  InfoRounded,
  LibraryBooksRounded,
  EventRounded,
  HistoryRounded,
  QuestionAnswerRounded,
} from "@material-ui/icons";

// import components
import { Text } from "../typography";

// import colors
import { colorPalette } from "../color-palette";
const colors = new colorPalette();

// switch case for icons
function iconSwitch(key) {
  switch (key) {
    case "home": {
      return <HomeRounded />;
    }
    case "about-us": {
      return <InfoRounded />;
    }
    case "hand-book": {
      return <LibraryBooksRounded />;
    }
    case "events": {
      return <EventRounded />;
    }
    case "archive": {
      return <HistoryRounded />;
    }
    case "FAQ": {
      return <QuestionAnswerRounded />;
    }
    default: {
      return <HomeRounded />;
    }
  }
}

export default function DrawerList(props) {
  const classes = useStyles();
  // initialize local state
  const activePage = props.activePage;
  const setActivePage = props.setActivePage;
  const routes = props.routes;

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {routes.map((route) => (
          <Link key={route.path} className={classes.link} to={route.path}>
            <ListItem
              button
              onClick={() => setActivePage(route.name)}
              key={route.name}
              style={{
                width: "100%",
                height: `${80 / routes.length}%`,
              }}
            >
              <div className={classes.icon}>{iconSwitch(route.name)}</div>
              <Text className={classes.linkText}>{route.name}</Text>
              <div
                style={{
                  position: "absolute",
                  top: "75%",
                  left: 30,
                  width: route.name === activePage ? "75%" : 0,
                  maxWidth: 200,
                  height: "10%",
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
    width: "50vw",
    minWidth: 140,
    maxWidth: 300,
    minHeight: 700,
    backgroundColor: colors.white,
  },
  list: {
    width: "100%",
    height: "70%",
    alignContent: "space-evenly",
  },
  icon: {
    marginLeft: 10,
  },
  link: {
    width: "100%",
    height: "100%",
    textDecoration: "none",
    color: "inherit",
  },
  linkText: {
    marginLeft: 30,
    width: "70%",
    textTransform: "capitalize",
    fontWeight: "700",
  },
}));
