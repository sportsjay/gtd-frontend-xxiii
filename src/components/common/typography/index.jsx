import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import fonts from "./font.css";

function Text(props) {
  const textClasses = textStyles();
  return (
    <Typography
      className={clsx(props.className)}
      style={{ fontFamily: "Neothic" }}
      {...props}
    >
      {props.children}
    </Typography>
  );
}

export { Text };

const textStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Arial",
  },
}));
