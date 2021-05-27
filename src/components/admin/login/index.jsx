import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  TextField,
} from "@material-ui/core";

// import validations
import { validator } from "./validation";

// import colors
import { colorPalette } from "../../common/color-palette";
import { StyledButton } from "../../common/button";
const colors = new colorPalette();

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setIsLogged = props.setIsLogged;

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
    const userInputError = validator.username(username).error;
    const passwordInputError = validator.password(password).error;

    if (userInputError) alert(userInputError);
    if (passwordInputError) alert(passwordInputError);

    if (username === "user" && password === "password") setIsLogged(true);
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
