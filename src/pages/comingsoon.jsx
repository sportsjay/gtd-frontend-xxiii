import React from "react";
import { makeStyles } from "@material-ui/core";

import { Text } from "../components/common/typography";

// import styles
import { colorPalette } from "../components/common/color-palette";
import { Link } from "react-router-dom";
const colors = new colorPalette();

export default function ComingSoonPage() {
  const classes = comingSoonStyles();

  return (
    <div className={classes.root}>
      <Link to="/home">
        <div className={classes.logo} />
      </Link>
      <Text className={classes.comingsoontext}>COMING SOON</Text>
    </div>
  );
}

const comingSoonStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100%",
  },
  comingsoontext: {
    marginTop: theme.spacing(2),
    color: colors.gray,
    fontWeight: "600",
    fontSize: "48pt",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32pt",
    },
  },
  logo: {
    width: "30vw",
    height: "30vw",
    borderRadius: "50%",
    background: 'url("logo.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: `${colors.gray} 0px 10px 20px -5px, ${colors.gray} 0px 8px 16px -8px`,
    transition: "ease-out 0.2s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.01)",
    },
  },
}));
