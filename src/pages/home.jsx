import React, { useState } from "react";
import { makeStyles, Box, Modal, IconButton, Fade } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

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
  const title = props.title;
  const right = props.right || false;
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
        <div
          className={classes.houseLeaderBody}
          style={{ alignItems: right ? "flex-end" : "flex-start" }}
        >
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
  title: "Coming Soon",
  description: "No Description Present",
};

function ModalContent(props) {
  const modalClasses = modalStyles();
  const title = props.title;
  const description = props.description;
  return (
    <div className={modalClasses.content}>
      <Text
        style={{ color: colors.white, fontSize: "32pt", fontWeight: "600" }}
      >
        {title}
      </Text>
      <Text style={{ color: colors.gray }}>{description}</Text>
    </div>
  );
}
ModalContent.defaultProps = {
  title: "Coming Soon",
  description: "No Description Present",
};

export default function HomePage() {
  const classes = useStyles();

  function linkToGame() {
    alert("Coming Soon!");
  }
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <a
          href="https://tinyurl.com/DaftarGTDYuk"
          target="_blank"
          rel="noreferrer"
        >
          <Box className={classes.headerLink} />
        </a>
      </div>
      <div className={classes.houseLeaderContainer}>
        <StyledBox
          modalContent={
            <React.Fragment>
              <StyledButton
                onClick={linkToGame}
                style={{
                  marginTop: 10,
                  backgroundColor: "green",
                  fontSize: "14pt",
                  alignSelf: "flex-end",
                }}
              >
                Visit Leaderboard
              </StyledButton>
              <ModalContent
                title="Artemis"
                description="She resides in the forest of humanity's home planet, the Earth. Hiding within the midst of the vast greeneries. Powered by the might of woodland warriors and druids. Does she and her kingdom got what it takes to win over Pandora's Box?"
              />
            </React.Fragment>
          }
          style={{
            background: 'url("/house_leaders/ely.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          title="Artemis"
          description="Goddess of forest, hunt and nature"
        ></StyledBox>
        <StyledBox
          right={true}
          style={{
            background: 'url("/house_leaders/hagan.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          modalContent={
            <React.Fragment>
              <StyledButton
                onClick={linkToGame}
                style={{
                  marginTop: 10,
                  backgroundColor: "#4682B4",
                  fontSize: "14pt",
                  alignSelf: "flex-end",
                }}
              >
                Visit Leaderboard
              </StyledButton>
              <ModalContent
                title="Poseidon"
                description="Among the seven seas, Poseidon leads the mighty mariners, slithereens and aquatic creatures. His kingdom may be strong under water, but will he thrive the challenges brought by the other elements? Can Atlantis bring Pandora's Box power to restore peace?"
              />
            </React.Fragment>
          }
          title="Poseidon"
          description="Father of the seas, god of oceans"
        ></StyledBox>
        <StyledBox
          style={{
            background: 'url("/house_leaders/vio.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          modalContent={
            <React.Fragment>
              <StyledButton
                onClick={linkToGame}
                style={{
                  marginTop: 10,
                  backgroundColor: "#A93226",
                  fontSize: "14pt",
                  alignSelf: "flex-end",
                }}
              >
                Visit Leaderboard
              </StyledButton>
              <ModalContent
                title="Persephone"
                description="She may be the master of the underworld, where death resides in every corner. But will she conquer Pandora's Box with Hades' army or will she claim more souls for her own kingdom?"
              />
            </React.Fragment>
          }
          title="Persephone"
          description="Queen of the underworld, death's mistress"
        ></StyledBox>
        <StyledBox
          right={true}
          style={{
            background: 'url("/house_leaders/nico.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          modalContent={
            <React.Fragment>
              <StyledButton
                onClick={linkToGame}
                style={{
                  marginTop: 10,
                  backgroundColor: "#D4AC0D",
                  fontSize: "14pt",
                  alignSelf: "flex-end",
                }}
              >
                Visit Leaderboard
              </StyledButton>
              <ModalContent
                title="Zeus"
                description="The almighty Zeus, great leader, father of gods, and ruler of Olympus. Will he be able to capture Pandora's Box before the other gods do?"
              />
            </React.Fragment>
          }
          title="Zeus"
          description="God of thunder, father of all gods and humans"
        ></StyledBox>
      </div>
      <div className={classes.themeSongContainer}>
        <Box className={classes.themeSongContent}>
          <Text
            variant="h4"
            style={{ fontWeight: "600", margin: 20 }}
            className={classes.themeSongHeader}
          >
            Verse
          </Text>
          <Text className={classes.themeSongVerse}>
            From different places, different times <br />
            With a common goal in our minds <br />
            We want to enjoy this moment while it lasts <br />
            Have you ever stopped and wonder why <br />
            That now we can share a common sky <br />
            So many of us with different childhoods <br />
            Different dreams, different lives <br />
          </Text>
          <Text
            variant="h4"
            style={{ fontWeight: "600", margin: 20 }}
            className={classes.themeSongHeader}
          >
            Chorus
          </Text>
          <Text className={classes.themeSongVerse} style={{ marginBottom: 20 }}>
            I know now what the answer is <br />
            I'm sure I'm gonna miss <br />
            This special day when we get together <br />
            As clouds drift and seasons flee <br />
            We will porbably not meet <br />
            And different lives we'll lives <br />
            No once we'll forget this great day we have <br />
          </Text>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/455672094&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <div
            style={{
              fontSize: 10,
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/steveprat"
              title="StevePrat"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              credits by StevePrat
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/steveprat/get-together-day-anthem"
              title="Get Together Day Anthem"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Get Together Day Anthem
            </a>
          </div>
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
    background: 'url("images/background.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 350%",
    backgroundPosition: "center",
  },
  headerLink: {
    width: "30vw",
    maxWidth: 400,
    minWidth: 160,
    height: "30vw",
    maxHeight: 400,
    minHeight: 160,
    borderRadius: "50%",
    background: 'url("logo.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: `${colors.white} 0px 13px 27px -5px, ${colors.cream} 0px 8px 16px -8px`,
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
    height: "100vh",
    minWidth: "50%",
    boxSizing: "border-box",
    background: "#C4C4C41A",
    border: "1px solid #000000",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover": {
      "& $houseLeaderBackdrop": {
        height: "100%",
        width: "100%",
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
    top: 0,
    left: 0,
    height: 0,
    width: "100%",
    zIndex: 1,
    backgroundColor: colors.gray,
    opacity: 0.4,
    transition: "ease-out 0.5s",
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
    width: "60%",
    minWidth: 300,
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
  themeSongHeader: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "16pt",
    },
  },
  themeSongVerse: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "10pt",
    },
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
    height: "min-content",
    width: "100%",
  },
}));
