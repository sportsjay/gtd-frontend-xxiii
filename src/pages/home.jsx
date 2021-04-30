import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";

export default function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography>Home</Typography>
      <Button className={classes.button}>Test</Button>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    textTransform: "capitalize",
    background: "linear-gradient(to left, #831515 50%, #C4C4C4 50%) right",
    backgroundSize: "200%",
    transition: ".2s ease-out",
    "&:hover": {
      backgroundPosition: "left",
    },
    borderRadius: 0,
    color: "#F8F2E5",
    fontWeight: "600",
  },
}));
