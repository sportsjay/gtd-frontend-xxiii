import React, { useState } from "react";
import { makeStyles, Box, Modal, IconButton, Fade } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

// import components
import { Text } from "../components/common/typography";

// import styles
import { colorPalette } from "../components/common/color-palette";

const colors = new colorPalette();

function StyledBox(props) {
  const classes = useStyles();
  const modalClasses = modalStyles();
  const [openModal, setOpenModal] = useState(false);
  const title = props.title;
  const description = props.description;

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
        <div className={classes.houseLeaderBody}>
          <Text variant="h4" style={{ fontWeight: "700", color: colors.white }}>
            {title}
          </Text>
          <Text style={{ color: colors.gray }}>{description}</Text>
        </div>
        <div className={classes.houseLeaderBackdrop} />
        <div className={classes.houseLeaderFooterBackdrop} />
      </Box>
      <Modal
        open={openModal}
        className={modalClasses.modal}
        onClose={handleCloseModal}
        aria-labelledby="house-leader-modal-title"
        aria-describedby="house-leader-modal-description"
      >
        <Fade in={openModal}>
          <div className={modalClasses.root}>
            <IconButton
              size="medium"
              className={modalClasses.exitButton}
              onClick={handleCloseModal}
              closeAfterTransition
            >
              <CloseIcon style={{ color: colors.gray }} />
            </IconButton>
            {props.modalContent}
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}
StyledBox.defaultProps = {
  title: "No title",
  description: "No description",
};

function ModalContent(props) {
  const modalClasses = modalStyles();
  const title = props.title;
  const description = props.description;
  return (
    <div className={modalClasses.content}>
      <Text style={{ color: colors.white }}>{title}</Text>
      <Text style={{ color: colors.gray }}>{description}</Text>
    </div>
  );
}
ModalContent.defaultProps = {
  title: "No Title",
  description: "No description",
};

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
        <StyledBox
          modalContent={
            <ModalContent title="Title" description="lorem ipsum" />
          }
          style={{
            background:
              'url("https://imagecolorpicker.com/_next/image?url=%2Fimagecolorpicker-preview_b.jpg&w=1920&q=75")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></StyledBox>
        <StyledBox></StyledBox>
        <StyledBox></StyledBox>
        <StyledBox></StyledBox>
      </div>
      <div className={classes.themeSongContainer}>
        <Box className={classes.themeSongContent}>
          <Text variant="h4" style={{ fontWeight: "600", margin: 20 }}>
            Verse
          </Text>
          <Text>
            From different places, different times <br />
            With a common goal in our minds <br />
            We want to enjoy this moment while it lasts <br />
            Have you ever stopped and wonder why <br />
            That now we can share a common sky <br />
            So many of us with different childhoods <br />
            Different dreams, different lives <br />
          </Text>
          <Text variant="h4" style={{ fontWeight: "600", margin: 20 }}>
            Chorus
          </Text>
          <Text>
            I know now what the answer is <br />
            I'm sure I'm gonna miss <br />
            This special day when we get together <br />
            As clouds drift and seasons flee <br />
            We will porbably not meet <br />
            And different lives we'll lives <br />
            No once we'll forget this great day we have <br />
          </Text>
          <iframe
            allowtransparency="true"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fundefined&color=orange_white&size=32"
            style={{ width: 32, height: 32 }}
          ></iframe>
        </Box>
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
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerLink: {
    width: "30vw",
    minWidth: 160,
    height: "30vw",
    minHeight: 160,
    borderRadius: "50%",
    background: "#F8F2E5",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    overflow: "hidden",
    transition: "ease-out 0.2s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.01)",
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
  houseLeaderBody: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "absolute",
    zIndex: 2,
    boxSizing: "border-box",
    padding: theme.spacing(2),
  },
  houseLeaderBackdrop: {
    position: "absolute",
    top: -300,
    left: -300,
    height: 0,
    width: 0,
    borderRadius: 6000,
    zIndex: 1,
    backgroundColor: colors.gray,
    opacity: 0.4,
    transition: "ease-out 0.7s",
  },
  houseLeaderFooterBackdrop: {
    height: "60%",
    width: "100%",
    background: "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
    position: "absolute",
    zIndex: 1,
    bottom: 0,
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
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
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
    display: "flex",
    flexDirection: "column-reverse",
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
    alignSelf: "center",
    width: "max-content",
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 0,
  },
  content: {
    height: "20%",
    width: "100%",
  },
}));
