import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  makeStyles,
  Typography,
  Container,
  Grid,
  Paper,
  Box,
} from "@material-ui/core";

export default function EventsPage() {
  const classes = useStyles();

  return (
    <React.Fragment className={classes.root}>
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className={classes.displayContent}>
          <img
            className={classes.image}
            src="../images/gtd-dummy.jpg"
            alt="../images/gtd.jpg"
            width="100vw"
            height="auto"
          />
        </div>
        <div className={classes.displayContent}>
          <Typography className={classes.title}>GTD XXIII</Typography>
          <Typography className={classes.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            suspendisse interdum consectetur libero id faucibus. Cursus risus at
            ultrices mi tempus imperdiet. Ut sem viverra aliquet eget sit amet
            tellus.
          </Typography>
        </div>
      </Container>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  displayContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "50%",
    flexDirection: "column",
    margin: "30px",
  },

  image: {
    // position: "absolute",
    width: "500px",
    height: "430px",

    background: "#F8F2E5",
    borderRadius: "20px",
  },

  title: {
    fontFamily: "Roboto",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "56px",
    letterSpacing: "0em",
    textAlign: "center",
    color: "#FFFFFF",
  },

  subtitle: {
    fontFamily: "Roboto",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "28px",
    letterSpacing: "0em",
    textAlign: "center",
    color: "#FFFFFF",
  },
}));
