import React from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

// import colors
import { colorPalette } from "../../common/color-palette";
const colors = new colorPalette();

export default function AdminBody(props) {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent className={classes.content}>
        <Typography>Body</Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: colors.cream,
  },
  content: {
    backgroundColor: colors.cream,
  },
}));
