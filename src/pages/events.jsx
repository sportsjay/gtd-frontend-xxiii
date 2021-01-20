import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function EventsPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography>Events</Typography>
    </React.Fragment>
  );
}
