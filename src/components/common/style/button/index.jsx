import React, { useState, useEffect } from "react";
import { makeStyles, Button } from "@material-ui/core";

// unify buttons styling
import { ColorTheme } from "../color";

function ButtonSM(props) {
  const title = props.buttonTitle;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return (
    <div style={styles.buttonSm.root}>
      {loading ? (
        <div style={styles.buttonSm.loadingSm} />
      ) : (
        <Button {...props} color="default" style={styles.buttonSm.button}>
          {title}
        </Button>
      )}
    </div>
  );
}

const styles = {
  buttonSm: {
    root: {
      minWidth: 50,
      alignSelf: "center",
    },
    button: {
      fontSize: 20,
      width: 30,
      fontWeight: "600",
      textTransform: "capitalize",
    },
    loadingSm: {
      height: 30,
      width: 30,
      borderRadius: 15,
      backgroundColor: ColorTheme.primary.red,
    },
  },
};

export { ButtonSM };
