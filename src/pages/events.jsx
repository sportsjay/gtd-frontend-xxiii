import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

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
      <div container spacing={3} className={classes.displayContainer}>
        <div item xs={12} md={6} className={classes.displayImageLeft}>
          <img
            className={classes.image}
            src="../images/gtd-dummy.jpg"
            alt="../images/gtd.jpg"
            width="100%"
            height="auto"
          />
        </div>
        <div item xs={12} md={6} className={classes.displayTextRight}>
          <Typography className={classes.title}>GTD XXIII</Typography>
          <Typography className={classes.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            suspendisse interdum consectetur libero id faucibus. Cursus risus at
            ultrices mi tempus imperdiet. Ut sem viverra aliquet eget sit amet
            tellus.
          </Typography>
        </div>
      </div>

      <div className={classes.displayTransition}>
        <Circ></Circ>
        <Bar></Bar>
        <Circ></Circ>
        <Bar></Bar>
        <Circ></Circ>
      </div>
      <div container spacing={3} className={classes.displayContainer}>
        <div item xs={12} md={6} className={classes.displayTextLeft}>
          <Typography className={classes.title}>NIGHT CYCLING</Typography>
          <Typography className={classes.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            suspendisse interdum consectetur libero id faucibus. Cursus risus at
            ultrices mi tempus imperdiet. Ut sem viverra aliquet eget sit amet
            tellus.
          </Typography>
        </div>
        <div item xs={12} md={6} className={classes.displayImageRight}>
          <img
            className={classes.image}
            src="../images/cycling-dummy.jpg"
            alt="../images/cycling.jpg"
            width="100%"
            height="auto"
          />
        </div>
      </div>

      <div className={classes.displayTransition}>
        <Circ></Circ>
        <Bar></Bar>
        <Circ></Circ>
        <Bar></Bar>
        <Circ></Circ>
      </div>

      <div container spacing={3} className={classes.displayContainer}>
        <div item xs={12} md={6} className={classes.displayImageLeft}>
          <img
            className={classes.image}
            src="../images/cny-dummy.jpg"
            alt="../images/cny.jpg"
            width="100%"
            height="auto"
          />
        </div>
        <div item xs={12} md={6} className={classes.displayTextRight}>
          <Typography className={classes.title}>CNY 2021</Typography>
          <Typography className={classes.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            suspendisse interdum consectetur libero id faucibus. Cursus risus at
            ultrices mi tempus imperdiet. Ut sem viverra aliquet eget sit amet
            tellus.
          </Typography>
        </div>
      </div>

      <div className={classes.displayTransition}>
        <Circ></Circ>
        <Bar></Bar>
        <Circ></Circ>
        <Bar></Bar>
        <Circ></Circ>
      </div>

      <div container spacing={3} className={classes.displayContainer}>
        <div item xs={12} md={6} className={classes.displayTextLeft}>
          <Typography className={classes.title}>Escape Room</Typography>
          <Typography className={classes.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            suspendisse interdum consectetur libero id faucibus. Cursus risus at
            ultrices mi tempus imperdiet. Ut sem viverra aliquet eget sit amet
            tellus.
          </Typography>
        </div>
        <div item xs={12} md={6} className={classes.displayImageRight}>
          <img
            className={classes.image}
            src="../images/escape-dummy.jpg"
            alt="../images/escape.jpg"
            width="100%"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    align: "center",
    boxSizing: "border-box",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  displayContainer: {
    align: "center",
    padding: theme.spacing(2),
    margin: "auto",
    display: "flex",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
  },

  displayTransition: {
    justifyContent: "center",
    margin: "auto",
    padding: theme.spacing(2),
    display: "block",
    boxSizing: "border-box",
  },

  displayImageLeft: {
    padding: "20px",
    boxSizing: "border-box",
    width: "50%",
  },

  displayImageRight: {
    padding: "20px",
    boxSizing: "border-box",
    width: "50%",
    maxWidth: "50%",
  },

  displayTextLeft: {
    padding: "20px",
    boxSizing: "border-box",
    width: "50%",
    maxWidth: "50%",
  },

  displayTextRight: {
    padding: "20px",
    margin: "auto",
    boxSizing: "border-box",
    width: "50%",
  },

  image: {
    width: "100%",
    background: "#F8F2E5",
    borderRadius: "20px",
  },

  title: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "34pt",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "12vmin",
    letterSpacing: "0em",
    textAlign: "center",
    // color: "#00FF00", // delete later
    color: "#CCCCCC", // change to #FFFFFF
    // padding: "20px",
    margin: "0 0 20px 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16pt",
    },
  },

  subtitle: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "16pt",
    fontStyle: "normal",
    lineHeight: "6vmin",
    letterSpacing: "0em",
    textAlign: "center",
    // color: "#FF0000", // delete later
    color: "#CCCCCC", // change to #FFFFFF
    // padding: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12pt",
    },
  },
}));
