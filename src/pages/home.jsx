import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography>Home</Typography>
    </React.Fragment>
  );
}
