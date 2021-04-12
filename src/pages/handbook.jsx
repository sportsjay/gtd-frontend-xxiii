import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

export default function HandBookPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography>Hand Book</Typography>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));
