import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function ArchivePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography>Archive</Typography>
    </React.Fragment>
  );
}
