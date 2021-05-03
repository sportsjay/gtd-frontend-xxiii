import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";

export default function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography>Home</Typography>
      {/* <Button className={classes.button}>Test</Button> */}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));
