import React from "react";
import { makeStyles, IconButton, Button } from "@material-ui/core";

// import icons
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

// import common
import { Text } from "../common/typography";

// import styles
import { colorPalette } from "./color-palette";
const colors = new colorPalette();

export default function Footer() {
  const classes = footerStyles();
  const fontSize = "11pt";

  function linkButton(link) {
    window.open(link, "_blank");
  }

  return (
    <div className={classes.root}>
      <Text style={{ fontWeight: "600", fontSize: fontSize }}>
        Copyright © 2021 PINTU & GTD. All Rights Reserved.
      </Text>
      <div className={classes.socialMedia}>
        <div>
          <Button
            style={{ padding: 10 }}
            onClick={() => linkButton(`https://www.pintusingapura.org`)}
          >
            <img
              src="https://www.pintusingapura.org/images/2712776f2a16c3ac73111d5bff247a57.png"
              style={{ width: "auto", height: 16 }}
              alt="PINTU"
            />
          </Button>
          <IconButton
            size="medium"
            onClick={() => linkButton(`https://www.instagram.com/pintugtd`)}
          >
            <InstagramIcon style={{ fontSize: "24pt", color: colors.black }} />
          </IconButton>
          <IconButton
            size="medium"
            onClick={() => linkButton(`https://www.facebook.com/PINTUGTD`)}
          >
            <FacebookIcon style={{ fontSize: "24pt", color: colors.black }} />
          </IconButton>
        </div>
      </div>
      <Text style={{ fontSize: fontSize, fontWeight: "600" }}>
        Special thanks to the developer team:{" "}
        <span
          style={{
            backgroundImage:
              "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
            "-webkit-background-clip": "text",
            color: "rgb(0, 0, 0, 0.4)",
          }}
        >
          GTD IT
        </span>
      </Text>
    </div>
  );
}

const footerStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    width: "100%",
    padding: theme.spacing(2),
    backgroundColor: colors.cream,
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: 20,
    },
  },
  socialMedia: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
