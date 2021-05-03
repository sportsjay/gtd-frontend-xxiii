import React from "react";
import { Button, makeStyles } from "@material-ui/core";

// import color palette
import { colorPalette } from "../color-palette";
const colors = new colorPalette();

function ButtonLink(props) {
  const classes = useStyles();
  // initialize state
  const text = props.text || "";
  const children = props.children || [<React.Fragment></React.Fragment>];
  return (
    <Button className={classes.buttonLink} {...props}>
      {text}
      {children.map((child) => (
        <React.Fragment>{child}</React.Fragment>
      ))}
    </Button>
  );
}

// export buttons
export { ButtonLink };

const useStyles = makeStyles((theme) => ({
  buttonLink: {
    textTransform: "capitalize",
    minWidth: 100,
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
}));
