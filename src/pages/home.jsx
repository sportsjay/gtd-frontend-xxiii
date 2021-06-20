import React, { useState } from "react";
import { makeStyles, Box, Modal } from "@material-ui/core";

// import components
import { Text } from "../components/common/typography";

// import styles
import { colorPalette } from "../components/common/color-palette";
import { StyledButton } from "../components/common/button";

const colors = new colorPalette();

function StyledBox(props) {
  const classes = useStyles();
  const modalClasses = modalStyles();
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <React.Fragment>
      <Box
        className={classes.houseLeaderContent}
        {...props}
        onClick={handleOpenModal}
      >
        <div className={classes.houseLeaderBackdrop} />
        {props.children}
      </Box>
      <Modal
        open={openModal}
        className={modalClasses.modal}
        onClose={handleCloseModal}
        aria-labelledby="house-leader-modal-title"
        aria-describedby="house-leader-modal-description"
      >
        <div className={modalClasses.root}>
          <StyledButton
            className={modalClasses.exitButton}
            onClick={handleCloseModal}
          >
            close
          </StyledButton>
          {props.modalContent}
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Box className={classes.headerLink}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </Text>
        </Box>
      </div>
      <div className={classes.houseLeaderContainer}>
        <StyledBox modalContent={<>test</>}></StyledBox>
        <StyledBox></StyledBox>
        <StyledBox></StyledBox>
        <StyledBox></StyledBox>
      </div>
      <div className={classes.themeSongContainer}>
        <Box className={classes.themeSongContent}></Box>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  header: {
    height: "100vh",
    width: "100%",
    marginBottom: "40px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerLink: {
    width: 300,
    height: 300,
    borderRadius: 150,
    background: "#F8F2E5",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: 120,
      height: 120,
    },
  },
  middle: {
    position: "absolute",
    width: "70%",
    height: "622px",
    marginTop: "0px",
    alignItems: "center",
    background: "#212121",
    marginLeft: "0px",
  },
  houseLeaderContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
  houseLeaderContent: {
    position: "relative",
    height: 500,
    minWidth: "50%",
    boxSizing: "border-box",
    background: "#C4C4C41A",
    border: "1px solid #000000",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover": {
      "& $houseLeaderBackdrop": {
        height: 1500,
        width: 1500,
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  houseLeaderBackdrop: {
    position: "absolute",
    top: -300,
    left: -300,
    zIndex: -1,
    height: 0,
    width: 0,
    borderRadius: 60000,
    backgroundColor: colors.gray,
    opacity: 0.3,
    transition: "ease-out 0.4s",
  },
  themeSongContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  themeSongContent: {
    width: "80%",
    minHeight: 600,
    textAlign: "center",
    backgroundColor: colors.cream,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 10,
  },
}));

const modalStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    position: "relative",
    height: 500,
    width: "50%",
    borderRadius: 0,
    backgroundColor: colors.black,
    boxShadow: theme.shadows[5],
    transition: "ease-out 0.2s",
    boxSizing: "border-box",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 400,
    },
  },
  exitButton: {
    color: colors.black,
    backgroundColor: colors.gray,
    alignSelf: "center",
    width: "max-content",
    minHeight: 30,
    height: 30,
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius: 0,
    "&:hover": {
      color: colors.gray,
      backgroundColor: colors.black,
    },
  },
}));
