import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

function Text(props) {
  const textClasses = textStyles();
  return <Typography className={textClasses.root}>{props.children}</Typography>;
}

export { Text };

const textStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Roboto",
  },
}));
