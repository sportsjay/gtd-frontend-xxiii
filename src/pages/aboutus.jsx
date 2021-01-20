import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function AboutUsPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography>AboutUs</Typography>
    </React.Fragment>
  );
}
