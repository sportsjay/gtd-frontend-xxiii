import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function CommitteePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography>Committee</Typography>
    </React.Fragment>
  );
}
