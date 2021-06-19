import React from "react";
import { makeStyles } from "@material-ui/core";

// import components
import { ButtonLink, StyledButton } from "../components/common/button";
import { Text } from "../components/common/typography";

export default function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Text>Home</Text>
      <StyledButton>Test</StyledButton>
      {/* <Button className={classes.button}>Test</Button> */}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));
