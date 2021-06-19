import React, { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";

// import component
import { AdminBody, Login } from "../components/admin";

// import colors
import { colorPalette } from "../components/common/color-palette";
const colors = new colorPalette();

export default function AdminPage(props) {
  const classes = useStyles();
  const [isLogged, setIsLogged] = useState(false);
  return (
    <Container className={classes.root}>
      {isLogged ? (
        <AdminBody setIsLogged={setIsLogged} />
      ) : (
        <Login setIsLogged={setIsLogged} />
      )}
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
    width: "100%",
    maxWidth: 800,
    height: "70vh",
    alignSelf: "center",
    backgroundColor: colors.gray,
    borderRadius: 10,
  },
}));
