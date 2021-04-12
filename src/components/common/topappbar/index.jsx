import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

// import components
import { ButtonSM } from "../style/index";

export default function TopAppBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar {...props} className={classes.root} color="default">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" className={classes.title}>
            GTD Website
          </Typography>
          <div className={classes.linkContainer}>
            <ButtonSM buttonTitle="test" />
            <ButtonSM buttonTitle="test" />
            <ButtonSM buttonTitle="test" />
            <ButtonSM buttonTitle="test" />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.backdrop} />
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    width: "40%",
    fontWeight: "700",
  },
  linkContainer: {
    width: "40%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  backdrop: {
    position: "absolute",
    top: 0,
    height: "100vh",
    width: "100vw",
    zIndex: -100,
    backgroundColor: "grey",
  },
}));
