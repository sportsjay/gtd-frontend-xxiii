import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";

// import color palette
import { colorPalette } from "../color-palette";
const colors = new colorPalette();

function ButtonLink(props) {
  const classes = useStyles();
  // initialize state
  const text = props.text || "";
  const children = props.children || [<React.Fragment></React.Fragment>];
  return (
    <Button {...props} className={clsx(classes.buttonLink, props.className)}>
      {text}
      {Array.isArray(children) ? (
        children.map((child) => <React.Fragment>{child}</React.Fragment>)
      ) : (
        <React.Fragment>{children}</React.Fragment>
      )}
    </Button>
  );
}

function StyledButton(props) {
  const classes = useStyles();
  // initialize state
  const text = props.text || "";
  const children = props.children || [<React.Fragment></React.Fragment>];
  return (
    <Button
      variant="contained"
      disableRipple
      {...props}
      className={clsx(classes.styledButton, props.className)}
    >
      {text}
      {Array.isArray(children) ? (
        children.map((child) => <React.Fragment>{child}</React.Fragment>)
      ) : (
        <React.Fragment>{children}</React.Fragment>
      )}
    </Button>
  );
}

// export buttons
export { ButtonLink, StyledButton };

const useStyles = makeStyles((theme) => ({
  buttonLink: {
    textTransform: "capitalize",
    minWidth: 100,
    maxWidth: 200,
    minHeight: 50,
    maxHeight: 100,
    background: `linear-gradient(to left, ${colors.white} 50%, ${colors.red} 50%) right`,
    backgroundSize: "200%",
    transition: "all .2s ease-out",
    "&:hover": {
      backgroundPosition: "left",
      color: colors.cream,
    },
    borderRadius: 0,
    color: colors.black,
    fontWeight: "600",
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: colors.red,
  },
  styledButton: {
    textTransform: "capitalize",
    minWidth: 100,
    maxWidth: 200,
    minHeight: 50,
    maxHeight: 100,
    borderRadius: 0,
    backgroundColor: colors.red,
    fontWeight: 700,
    color: colors.white,
    "&:hover": {
      color: colors.black,
      backgroundColor: colors.gray,
    },
    "&:active": {
      filter: "brightness(95%)",
    },
  },
}));
