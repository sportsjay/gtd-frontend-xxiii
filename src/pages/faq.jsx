import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function FAQPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography>FAQ</Typography>
    </React.Fragment>
  );
}
