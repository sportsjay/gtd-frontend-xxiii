import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

export default function EventsPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography>Events</Typography>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));
