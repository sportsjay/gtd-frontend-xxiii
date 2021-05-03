import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

export default function ArchivePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography>Archive</Typography>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));
