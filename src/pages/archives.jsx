import React, { useState } from "react";
import { makeStyles, Grid, Fab } from "@material-ui/core";
// import components
import { Text } from "../components/common/typography";

// import stlyes
import { colorPalette } from "../components/common/color-palette";
import { ChevronRight, ChevronLeft, KeyboardArrowUp } from "@material-ui/icons";
const colors = new colorPalette();

const sampleData = [
  {
    link: "https://www.facebook.com/PINTUGTD/photos/2046685752017755",
    title: "GTD XX: Exodia",
    subtitle: `Exodia is a paradise.\n
      A prosperous and peaceful land for centuries, where the four legendary weapons (Hammer, Daggers, Shield and Arrow) reside. These weapons originally belonged to four legendary warriors, who established the golden age of this kingdom.\n
      However, this is not everlasting.\n
      The slightest crack in trust, threatens the peace of this ever so wonderful kingdom.\n
      Can Exodia bring back the beauty it once held before?`,
    pictures: [
      "gtd_xx-min.jpg",
      "gtd_xx1-min.jpg",
      "gtd_xx2-min.jpg",
      "gtd_xx3-min.jpg",
    ],
  },
  {
    title: "GTD XXI: Inxxignia",
    subtitle: `After the seemingly everlasting territorial disputes and manslaughters came to an end, the Godfather subdivided the newly established nation into four specialized semi-autonomous districts each ruled by a district leader chosen from those of the upper echelons. \n
      Alas, it seems that recently, our nation has yet been plagued with turmoil. It all began when a series of misfortunes struck each of the four districts, at too perfect timing for us to regard them as coincidental. \n
      Recruits, we need you to safeguard our hard-earned peace. . .`,
    pictures: [
      "gtd_xxi-min.jpg",
      "gtdxxi1-min.jpg",
      "gtdxxi2-min.jpg",
      "gtdxxi3-min.jpg",
      "gtdxxi4-min.jpg",
    ],
  },
  {
    title: "GTD XXII: Insurgio",
    subtitle:
      "Fun-filled weekend with seniors from NTU and a chance to get to know other freshies! It is also the first GTD to be done under covid regulations",
    pictures: ["gtd_xxii.png"],
  },
];

function Carousel(props) {
  const carouselClasses = carouselStyles();
  const content = props.content || [];
  const [contentIdx, setContentIdx] = useState(0);

  function handleNextContent() {
    if (contentIdx > content.length - 2) setContentIdx(0);
    else setContentIdx(contentIdx + 1);
  }

  function handlePrevContent() {
    if (contentIdx <= 0) setContentIdx(content.length - 1);
    else setContentIdx(contentIdx - 1);
  }

  return (
    <div className={carouselClasses.root}>
      <div className={carouselClasses.body}>
        <div className={carouselClasses.leftButton} onClick={handlePrevContent}>
          <ChevronLeft style={{ color: colors.cream }} />
        </div>
        <section className={carouselClasses.content}>
          <div
            style={{
              opacity: 0,
              position: "relative",
              height: "100%",
              width: "100%",
              zIndex: -1,
            }}
          >
            {content[0]}
          </div>
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: 0,
            }}
          >
            {content[contentIdx]}
          </div>
        </section>
        <div
          className={carouselClasses.rightButton}
          onClick={handleNextContent}
        >
          <ChevronRight style={{ color: colors.cream }} />
        </div>
      </div>
      <div className={carouselClasses.navigation}>
        {content.map((_, idx) => (
          <div
            key={idx}
            className={carouselClasses.navButton}
            style={{ opacity: idx !== contentIdx ? 0.4 : 1 }}
          />
        ))}
      </div>
    </div>
  );
}

const carouselStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  body: {
    position: "relative",
    height: "100%",
    widht: "100%",
  },
  content: {
    height: "100%",
    width: "100%",
  },
  leftButton: {
    position: "absolute",
    left: 0,
    top: 0,
    display: "flex",
    alignItems: "center",
    height: "100%",
    zIndex: 1,
    width: "40%",
  },
  rightButton: {
    position: "absolute",
    right: 0,
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
    zIndex: 1,
    width: "40%",
  },
  navigation: {
    height: 20,
    boxSizing: "border-box",
    paddingBottom: theme.spacing(2),
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  navButton: {
    backgroundColor: colors.cream,
    width: 20,
    height: 2,
    borderRadius: 2,
  },
}));

export default function EventsPage() {
  const classes = useStyles();

  function Circ() {
    const classes = transitionStyles();
    return <div className={classes.circle} />;
  }

  function Bar() {
    const classes = transitionStyles();
    return <div className={classes.rectangle} />;
  }

  function Transition() {
    return (
      <div className={classes.displayTransition}>
        <Circ />
        <Bar />
        <Circ />
      </div>
    );
  }

  function Content(props) {
    // image-text orientation, default = row, else = row-reverse
    const index = props.index;
    const pictures = props.pictures || ["../images/gtd-dummy.jpg-min"];
    const link = props.link;
    const title = props.title || "No Title";
    const subtitle = props.subtitle || "No subtitle";
    return (
      <div
        className={
          index % 2 !== 0
            ? classes.displayContainer1
            : classes.displayContainer2
        }
        // style={{ flexDirection: orientation }}
      >
        <div className={classes.displayImage}>
          <Carousel
            content={pictures.map((picture) => (
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <a
                  href={link}
                  alt="No link"
                  className={classes.imagePlaceHolder}
                >
                  <img
                    className={classes.image}
                    src={picture}
                    alt="../images/gtd.jpg"
                  />
                </a>
              </div>
            ))}
          />
        </div>
        <div className={classes.displayText}>
          <Text className={classes.title}>{title}</Text>
          <Text className={classes.subtitle}>{subtitle}</Text>
        </div>
      </div>
    );
  }

  function jumpToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className={classes.root}>
      <Fab
        onClick={jumpToTop}
        style={{
          position: "fixed",
          zIndex: 10000,
          bottom: 40,
          right: 40,
          backgroundColor: colors.gray,
        }}
      >
        <KeyboardArrowUp />
      </Fab>
      {sampleData.map((data, index) =>
        index === sampleData.length - 1 ? (
          <React.Fragment>
            <Content
              title={data.title}
              subtitle={data.subtitle}
              pictures={data.pictures}
              link={data.link}
              index={index}
              key={index}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Content
              title={data.title}
              subtitle={data.subtitle}
              pictures={data.pictures}
              index={index}
              key={index}
            />
            <Transition key={index} />
          </React.Fragment>
        )
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    width: "100%",
  },

  displayContainer1: {
    align: "center",
    padding: theme.spacing(2),
    margin: "auto",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  displayContainer2: {
    align: "center",
    padding: theme.spacing(2),
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  displayTransition: {
    justifyContent: "center",
    margin: "auto",
    padding: theme.spacing(2),
    boxSizing: "border-box",
  },
  displayImage: {
    padding: "20px",
    boxSizing: "border-box",
    width: "100%",
  },

  displayText: {
    padding: theme.spacing(2),
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  imagePlaceHolder: {
    width: "max-content",
    background: colors.black2,
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  },

  image: {
    width: "70%",
    minWidth: 200,
    maxWidth: 400,
    alignSelf: "center",
    background: "transparent",
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      minWidth: 100,
    },
  },

  title: {
    fontSize: "48pt",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "12vmin",
    letterSpacing: "0em",
    textAlign: "center",
    color: colors.white,
    margin: "0 0 20px 0",
    [theme.breakpoints.down("md")]: {
      fontSize: "32pt",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28pt",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "22pt",
    },
  },

  subtitle: {
    fontSize: "20pt",
    fontStyle: "normal",
    lineHeight: "6vmin",
    letterSpacing: "0em",
    color: colors.white,
    [theme.breakpoints.down("md")]: {
      fontSize: "14pt",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      maxWidth: 500,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12pt",
      maxWidth: 300,
    },
  },
}));

const transitionStyles = makeStyles((theme) => ({
  circle: {
    height: 30,
    width: 30,
    borderRadius: "50%",
    backgroundColor: colors.white,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      height: 20,
      width: 20,
    },
  },
  rectangle: {
    height: 60,
    width: 5,
    borderRadius: "0%",
    backgroundColor: colors.white,
    margin: "0px auto 0px auto",
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 3,
    },
  },
}));
