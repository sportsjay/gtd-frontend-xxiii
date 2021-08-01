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
          <Text
            variant="h4"
            style={{
              fontWeight: "700",
              color: colors.white,
              fontFamily: "Neothic",
            }}
          >
            {title}
          </Text>
          <Text style={{ color: colors.gray, fontFamily: "Neothic" }}>
            {description}
          </Text>
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
      <img
        src={props.logo}
        alt="no logo available"
        height="200px"
        width="200px"
      />
      <Text
        style={{
          color: colors.white,
          fontSize: "32pt",
          fontWeight: "600",
          width: "100%",
          fontFamily: "Neothic",
        }}
      >
        {title}
      </Text>
      <Text style={{ color: colors.gray, fontFamily: "Neothic" }}>
        {description}
      </Text>
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
        <a href="/" target="_blank" rel="noreferrer">
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
                logo="images/logo_artemis.png"
                title="House of Gaia"
                description="Deep in the forests of Gaia, stands the provinces of James Bondsai and Herby Potter, led by the Almighty Queen Goddess Artemis. The 2 provinces thrive and prosper as they produce seeds for agriculture through defecation. However, due to the conflict between the realms of the Earth, they now live under stress that hinders their ability to defecate seeds. This crucial and delicate supply chain of seed defecation has come to a screeching halt, and they are now in danger of famine and pestilence. In the midst of all this chaos, queen Goddess Artemis sets out on an epic adventure in search of the omnipotent Pandora's Box, in the hopes of using it to heal and free the colony away from stress. This is done in hopes that it will in turn restore the fertility of the whole realm. But this poses an almost insurmountable challenge, as the box itself is the subject of the currently broiling interrealm war. As the race for Pandora’s box intensifies, can the Almighty queen Goddess Artemis successfully retrieve the grand prize?"
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
                logo="images/logo_poseidon.png"
                title="House of Atlantis"
                description="Once home to the most advanced civilization on Earth, the Kingdom of Atlantis is now an underwater kingdom ruled by the wise King Poseidon Hototo Barus LXIX. The king had ruled an era of peace and brought the kingdom greater prosperity and wealth, but things changed when Kronos, the Father of the Gods, was assassinated. The Pandora’s Box went missing, prompting the three other kingdoms, Filled with greed and avarice, to search high and low for the Pandora’s Box. When they ransacked the ocean in hopes of finding it, King Poseidon grew livid. They had planted mines and dropped weapons in the once beautiful and spotless ocean he called home. Motivated by revenge for his sullied domain, the king, cloaked in his green coat, light green underwear, and lime green miniskirt, summoned his neighbour, the Mighty General of the Southern Ocean: Nyi Loro Kidul. After listening to the king’s plight, Nyi Loro Kidul agreed to clone herself to thousands of Kiduls. In the end, the Kiduls and the Atlantis army joined forces, vowing to defeat the other kingdoms in their race to search for the Pandora’s Box. Armed with his almighty trident and mystical Southern sorcerers, it’s just a matter of time before he unleashes his wrath to those who have destroyed his beloved home. Will King Hagan succeed in his quest? "
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
                logo="images/logo_persephone.png"
                title="House of Tartarus"
                description="Queen Persevio, the proprietor of the underworld, believes that she should have the Pandora’s box and rule over the other Gods, as she is the most beautiful amongst the four. She knows that the key to a person's beauty is their heart followed by their hair and body. 

                As the benevolent and kind-hearted ruler that she is, she doesn’t intend to hurt the other Gods and their subjects, even when waging war with them. She opts to destroy their morale instead, by destroying all of her opponents hair. Her rationale is that they would look less respectable and presentable, so as to be less charismatic than her. These low self-esteemed people in turn, would be more easily subjugated by her and her subjects.
                
                She gathered her Kingdom’s strongest men and wisest women in order to develop the hair-killing products necessary in this bio-psychological warfare in the making. After research and trials, the 2 most prominent underworld research labs from Tartarus each came up with a product. One named as DEATHtol which will let anyone who uses this shampoo have extremely horrible hair fall and the other called PAINtene which will cause them pain everytime they touch their hair. This would mean they either have no hair or bad hair, as it'll be too painful for them to comb or even style them. Will this diabolical hair-terrorism come to fruition? Will Queen Persevio be able to claim the all-powerful box?
                
                "
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
                logo="images/logo_zeus.png"
                title="House of Olympus"
                description="Living across the earth, the people of Olympus are well known for their power and strength. The people live in peace and prosperity, and this could only happen because of the great leadership of the mighty God, Zeus. However, the death of Cronus has changed Olympus and its denizens. The people live with fear from continuous war over the pandora box between itself and the 3 other realms: Gaia, Tartarus, and Atlantis. Zeus believes that he, as the self proclaimed most powerful God, and his people deserve the Pandora’s Box. In his journey to conquer the box, he met Tony Star and Captain Amerisky who later became his trusted servants. Together, with the power of Zeus, the witty Tony Star and the fearless Captain Amerisky, they are ready to claim the box once and for all. Olympus Assemble!"
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
          <Text
            className={classes.themeSongVerse}
            style={{ fontWeight: "500" }}
          >
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
          <Text
            className={classes.themeSongVerse}
            style={{ marginBottom: 20, fontWeight: "500" }}
          >
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
    height: "48vw",
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
      height: "50vh",
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
    minWidth: "max-height",
    width: "50%",
    borderRadius: 0,
    backgroundColor: colors.black2,
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
      height: "max-content",
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
    height: "max-content",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
