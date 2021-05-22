import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  TextField,
} from "@material-ui/core";

// import colors
import { colorPalette } from "../../common/color-palette";
import { StyledButton } from "../../common/button";
import { set } from "lodash";
const colors = new colorPalette();

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // on change username
  function onUsername(event) {
    setUsername(event.target.value);
  }

  // on change password
  function onPassword(event) {
    setPassword(event.target.value);
  }

  function onSubmit() {
    // pass API

    setUsername("");
    setPassword("");
  }

  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="h4" className={classes.title}>
          Login
        </Typography>
        <TextField
          className={classes.textField}
          variant="outlined"
          label="Username"
          onChange={onUsername}
          value={username}
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          label="Password"
          type="password"
          onChange={onPassword}
          value={password}
        />
        <StyledButton
          text="Submit"
          onClick={onSubmit}
          style={{ width: "100%", margin: 10 }}
        />
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.gray,
    width: "100%",
  },
  content: {
    backgroundColor: colors.cream,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    width: "60%",
    fontWeight: "800",
    marginBottom: 10,
  },
  textField: {
    width: "60%",
    marginTop: 5,
    marginBottom: 5,
  },
}));
