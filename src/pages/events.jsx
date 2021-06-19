import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Text } from "../components/common/typography";

export default function EventsPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Text>Events</Text>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));
