import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

export default function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography>Home</Typography>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));
