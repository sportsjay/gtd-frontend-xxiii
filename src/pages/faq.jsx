import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

export default function FAQPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography>FAQ</Typography>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));
