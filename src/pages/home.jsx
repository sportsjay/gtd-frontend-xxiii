import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

// import components
import { ButtonLink, StyledButton } from "../components/common/button";

export default function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography>Home</Typography>
      <StyledButton>Test</StyledButton>
      {/* <Button className={classes.button}>Test</Button> */}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));
