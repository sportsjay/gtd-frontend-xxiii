import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  Divider,
  List,
  ListItem,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

import {
  HomeRounded,
  InfoRounded,
  LibraryBooksRounded,
  EventRounded,
  HistoryRounded,
  QuestionAnswerRounded,
  Home,
} from "@material-ui/icons";

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
    case "faq": {
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
  const location = useLocation();
  const routes = props.routes;
  const [activePage, setActivePage] = useState(
    location.pathname.replace("/", "")
  );
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
                height: `${100 / routes.length}%`,
              }}
            >
              {" "}
              <div className={classes.icon}>{iconSwitch(route.name)}</div>
              <Typography className={classes.linkText}>{route.name}</Typography>
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
    width: "50vw",
    minWidth: 140,
    backgroundColor: colors.gray,
  },
  list: {
    width: "100%",
    height: "70%",
    alignContent: "space-evenly",
  },
  icon: {
    marginLeft: 20,
  },
  link: {
    width: "100%",
    height: "100%",
    textDecoration: "none",
    color: "inherit",
  },
  linkText: {
    marginRight: 10,
    width: "70%",
    textAlign: "right",
    textTransform: "capitalize",
    fontWeight: "700",
  },
}));
