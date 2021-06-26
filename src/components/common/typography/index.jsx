import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";

function Text(props) {
  const textClasses = textStyles();
  return (
    <Typography className={clsx(props.className, textClasses.root)} {...props}>
      {props.children}
    </Typography>
  );
}

export { Text };

const textStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Roboto",
  },
}));
