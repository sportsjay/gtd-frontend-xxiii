import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useLocation } from "react-router-dom";

// import routes
import { routes } from "../../../routes";

// import color
import { colorPalette } from "../color-palette/";

// import components
import DrawerList from "./drawer-list";
import LinkContainer from "./link-container";
const colors = new colorPalette();

export default function TopAppBar(props) {
  const location = useLocation();
  // initialize local state
  const [drawer, setDrawer] = useState(false);
  const [activePage, setActivePage] = useState(
    location.pathname.replace("/", "")
  );
  const classes = useStyles();

  // toggle drawer function
  function toggleDrawer() {
    setDrawer(!drawer);
  }

  return (
    <React.Fragment>
      <AppBar
        {...props}
        className={classes.root}
        color="default"
        title="GTD Website"
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classes.menuBar}
            onClick={toggleDrawer}
            edge="start"
          >
            <MenuIcon style={{ color: "#212121", fontSize: 30 }} />
          </IconButton>
          <Link
            className={classes.titleContainer}
            to="/home"
            onClick={() => setActivePage("home")}
          >
            <img
              className={classes.title}
              src="gtd.png"
              alt="Get Together Day"
            />
          </Link>
          <LinkContainer
            {...props}
            routes={routes}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </Toolbar>
      </AppBar>
      <div className={classes.backdrop} />
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={drawer}
        onClose={toggleDrawer}
      >
        <DrawerList
          {...props}
          routes={routes}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </Drawer>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.white,
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  title: {
    fontWeight: "700",
    maxHeight: 50,
    width: "auto",
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
      textAlign: "end",
      fontSize: 24,
    },
  },
  titleContainer: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "30%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      alignSelf: "center",
      textAlign: "end",
      fontSize: 24,
    },
  },
  menuBar: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },

  drawer: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  backdrop: {
    position: "absolute",
    top: 0,
    height: "100vh",
    width: "100vw",
    zIndex: -100,
    backgroundColor: colors.black,
  },
}));
