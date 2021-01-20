import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function TopAppBar(props) {
  return (
    <AppBar {...props}>
      <Toolbar>
        <Typography>App Bar</Typography>
      </Toolbar>
    </AppBar>
  );
}
