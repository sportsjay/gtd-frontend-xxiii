import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Typography,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// import routes
import { routes } from "../../../routes";

// import color
import { colorPalette } from "../color-palette/";

// import components
import DrawerList from "./drawer-list";
const colors = new colorPalette();

export default function TopAppBar(props) {
  // initialize local state
  const [drawer, setDrawer] = useState(false);
  const classes = useStyles();

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
          <Typography className={classes.title}>Get Together Day</Typography>
          <div className={classes.linkContainer}></div>
        </Toolbar>
      </AppBar>
      <div className={classes.backdrop} />
      <Drawer anchor="left" open={drawer} onClose={toggleDrawer}>
        <DrawerList {...props} routes={routes} />
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
    width: "50%",
    fontWeight: "700",
    fontSize: 30,
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
  linkContainer: {
    width: "40%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      display: "none",
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
