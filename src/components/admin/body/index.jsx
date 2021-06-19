import React from "react";
import { Card, CardContent, makeStyles, Text } from "@material-ui/core";

// import colors
import { colorPalette } from "../../common/color-palette";
import { StyledButton } from "../../common/button";
const colors = new colorPalette();

export default function AdminBody(props) {
  const classes = useStyles();
  const setIsLogged = props.setIsLogged;

  function logoutSubmit() {
    setIsLogged(false);
  }

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent className={classes.content}>
        <Text>Body</Text>
      </CardContent>
      <StyledButton onClick={logoutSubmit} text="Logout" />
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  content: {
    backgroundColor: colors.cream,
  },
}));
