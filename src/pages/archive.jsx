import React from "react";
import { makeStyles } from "@material-ui/core";

// import components
import { Text } from "../components/common/typography";

export default function ArchivePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Text>Archive</Text>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));
