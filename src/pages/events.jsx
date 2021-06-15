import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";

export default function EventsPage() {
  const classes = useStyles();

  function Circ() {
    return (
      <div
        style={{
          height: 40,
          width: "40px",
          borderRadius: "50%",
          backgroundColor: "#CCCCCC", // change to #FFFFFF
          margin: "auto",
        }}
      ></div>
    );
  }

  function Bar() {
    return (
      <div
        style={{
          height: 60,
          width: 3,
          borderRadius: "0%",
          backgroundColor: "#CCCCCC", // change to #FFFFFF
          margin: "10px auto 10px auto",
        }}
      ></div>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.displayContainer}>
        <Grid item xs={12} md={6} className={classes.displayImageLeft}>
          <img
            className={classes.image}
            src="../images/gtd-dummy.jpg"
            alt="../images/gtd.jpg"
            width="100%"
            height="auto"
          />
        </Grid>
        <Grid item xs={12} md={6} className={classes.displayTextRight}>
          <Typography className={classes.title}>GTD XXIII</Typography>
          <Typography className={classes.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            suspendisse interdum consectetur libero id faucibus. Cursus risus at
            ultrices mi tempus imperdiet. Ut sem viverra aliquet eget sit amet
            tellus.
          </Typography>
        </Grid>
      </Grid>

      <div className={classes.displayTransition}>
        <Circ></Circ>
        <Bar></Bar>
        <Circ></Circ>
        <Bar></Bar>
        <Circ></Circ>
      </div>

      <Grid container spacing={3} className={classes.displayContainer}>
        <Grid item xs={12} md={6} className={classes.displayTextLeft}>
          <Typography className={classes.title}>NIGHT CYCLING</Typography>
          <Typography className={classes.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            suspendisse interdum consectetur libero id faucibus. Cursus risus at
            ultrices mi tempus imperdiet. Ut sem viverra aliquet eget sit amet
            tellus.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.displayImageRight}>
          <img
            className={classes.image}
            src="../images/cycling-dummy.jpg"
            alt="../images/cycling.jpg"
            width="100%"
            height="auto"
          />
        </Grid>
      </Grid>

      <div className={classes.displayTransition}>
        <Circ></Circ>
        <Bar></Bar>
        <Circ></Circ>
        <Bar></Bar>
        <Circ></Circ>
      </div>

      <Grid container spacing={3} className={classes.displayContainer}>
        <Grid item xs={12} md={6} className={classes.displayImageLeft}>
          <img
            className={classes.image}
            src="../images/cny-dummy.jpg"
            alt="../images/cny.jpg"
            width="100%"
            height="auto"
          />
        </Grid>
        <Grid item xs={12} md={6} className={classes.displayTextRight}>
          <Typography className={classes.title}>CNY 2021</Typography>
          <Typography className={classes.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            suspendisse interdum consectetur libero id faucibus. Cursus risus at
            ultrices mi tempus imperdiet. Ut sem viverra aliquet eget sit amet
            tellus.
          </Typography>
        </Grid>
      </Grid>

      <div className={classes.displayTransition}>
        <Circ></Circ>
        <Bar></Bar>
        <Circ></Circ>
        <Bar></Bar>
        <Circ></Circ>
      </div>

      <Grid container spacing={3} className={classes.displayContainer}>
        <Grid item xs={12} md={6} className={classes.displayTextLeft}>
          <Typography className={classes.title}>Escape Room</Typography>
          <Typography className={classes.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            suspendisse interdum consectetur libero id faucibus. Cursus risus at
            ultrices mi tempus imperdiet. Ut sem viverra aliquet eget sit amet
            tellus.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.displayImageRight}>
          <img
            className={classes.image}
            src="../images/escape-dummy.jpg"
            alt="../images/escape.jpg"
            width="100%"
            height="auto"
          />
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    align: "center",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  displayContainer: {
    align: "center",
    padding: "3vw",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    // backgroundColor: "dodgerBlue", // delete later
    width: "100vw",
  },

  displayTransition: {
    justifyContent: "center",
    // backgroundColor: "pink", // delete later
    margin: "auto",
    padding: "3vw",
    display: "block",
  },

  displayImageLeft: {
    padding: "20px",
    // backgroundColor: "yellow", // delete later
  },

  displayImageRight: {
    padding: "20px",
    // backgroundColor: "red", // delete later
  },

  displayTextLeft: {
    padding: "20px",
    // backgroundColor: "green", // delete later
    margin: "auto",
  },

  displayTextRight: {
    padding: "20px",
    // backgroundColor: "blue", // delete later
    margin: "auto",
  },

  image: {
    width: "100%",
    background: "#F8F2E5",
    borderRadius: "20px",
  },

  title: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "9vmin",
    fontStyle: "normal",
    lineHeight: "12vmin",
    letterSpacing: "0em",
    textAlign: "center",
    // color: "#00FF00", // delete later
    color: "#CCCCCC", // change to #FFFFFF
    // padding: "20px",
    margin: "0 0 20px 0",
  },

  subtitle: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "4.5vmin",
    fontStyle: "normal",
    lineHeight: "6vmin",
    letterSpacing: "0em",
    textAlign: "center",
    // color: "#FF0000", // delete later
    color: "#CCCCCC", // change to #FFFFFF
    // padding: "20px",
  },
}));
