import React from "react";
import { makeStyles, Typography, Button, Box } from "@material-ui/core";

// import components
import { ButtonLink, StyledButton, Text } from "../components/common";

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Box className={classes.topSquare}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
      </div>

      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <Box className={classes.bottomSquare} marginTop="103px"></Box>
        <Box className={classes.bottomSquare} marginTop="103px"></Box>
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <Box className={classes.bottomSquare}></Box>
        <Box className={classes.bottomSquare}></Box>
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <Box className={classes.bigBottomSquare} alignItems="center">
          <Box
            className={classes.themeSong}
            style={{ width: "70%", display: "flex", flexDirection: "column" }}
            alignItems="center"
          ></Box>
        </Box>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  text: {
    color: "white",
  },
  topSquare: {
    height: "250px",
    width: "250px",
    left: "-341px",
    top: "-52px",
    borderRadius: "160.5px",

    marginTop: "150px",
    marginBottom: "40px",
    textAlign: "center",
    background: "#F8F2E5",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  root: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  middle: {
    position: "absolute",
    width: "70%",
    height: "622px",
    marginTop: "0px",
    alignItems: "center",
    background: "#212121",
    marginLeft: "0px",
  },

  root: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomSquare: {
    height: "475px",
    width: "50%",
    /*left: '-181px',*/
    top: "520px",
    borderRadius: "0px",

    /*marginTop: '0px',*/

    background: "#C4C4C41A",
    /*background: '#F8F2E5',*/

    /*boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',*/
    border: "1px solid #000000",
    [theme.breakpoints.down("sm")]: {
      border: "1px solid #000000",
    },
  },
  root: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  bigBottomSquare: {
    position: "absolute",
    width: "100%",
    height: "800px",
    alignItems: "center",
    textAlign: "center",
    marginTop: "0px",
    borderRadius: "0px",
    marginleft: "53px",

    background: "#212121",
  },

  themeSong: {
    /*width: '900px',*/
    textAlign: "center",
    height: "503px",
    marginTop: "150px",
    marginLeft: "175px",
    left: "-341px",

    background: "#F8F2E5",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
  },
}));
