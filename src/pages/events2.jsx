import React from "react";
import { makeStyles, Box } from "@material-ui/core";

// import components
import { Text } from "../components/common/typography";

export default function EventsPage() {
  const classes = useStyles();

  return (
    <React.Fragment className={classes.root}>
      <div className={classes.displayContainer}>
        <Box className={classes.displayBox}>
          <Box className={classes.displayTextLeft}>
            <img
              className={classes.image}
              src="../images/gtd-dummy.jpg"
              alt="../images/gtd.jpg"
              width="100%"
              height="auto"
            />
          </Box>

          <Box className={classes.displayTextRight}>
            <Text className={classes.title}>GTD XXIII</Text>
            <Text className={classes.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Laoreet suspendisse interdum consectetur libero id faucibus.
              Cursus risus at ultrices mi tempus imperdiet. Ut sem viverra
              aliquet eget sit amet tellus.
            </Text>
          </Box>
        </Box>
      </div>

      <div className={classes.displayContainer}>
        <Text>Halo guys!</Text>
      </div>

      <div className={classes.displayContainer}>
        <Box className={classes.displayBox}>
          <Box className={classes.displayTextLeft}>
            <img
              className={classes.image}
              src="../images/cycling-dummy.jpg"
              alt="../images/cycling.jpg"
              width="100%"
              height="auto"
            />
          </Box>

          <Box className={classes.displayTextRight}>
            <Text className={classes.title}>NIGHT CYCLING</Text>
            <Text className={classes.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Laoreet suspendisse interdum consectetur libero id faucibus.
              Cursus risus at ultrices mi tempus imperdiet. Ut sem viverra
              aliquet eget sit amet tellus.
            </Text>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // flexFlow: "column nowrap",
  },

  displayContainer: {
    margin: "auto",
    display: "flex",
    // flexFlow: "column wrap",
    // justifyContent: "space-between",
    // alignItems: "center",
    // alignContent: "flex-start",
    width: "100vw",
    backgroundColor: "dodgerBlue",
  },

  displayBox: {
    display: "flex",
    flexFlow: "row wrap",
  },

  displayImageLeft: {
    display: "flex",
    flex: "0 0 auto",
    justifyContent: "center",
    alignItems: "center",
    width: "512px",
    margin: "10px",
  },

  displayImageRight: {
    display: "flex",
    flex: "0 0 auto",
    justifyContent: "center",
    alignItems: "center",
    width: "512px",
    margin: "10px",
  },

  displayTextLeft: {
    backgroundColor: "black",
    flex: "0 0 auto",
    // flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "512px",
    margin: "10px",
  },

  displayTextRight: {
    backgroundColor: "black",
    flex: "0 0 auto",
    // flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "512px",
    margin: "10px",
  },

  image: {
    // position: "absolute",
    width: "100%",
    // height: "430px",

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
    padding: "20px",
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
    width: "95%",
  },
}));
