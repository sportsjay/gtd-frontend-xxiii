import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

export default function AboutUsPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography>AboutUs</Typography>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));
