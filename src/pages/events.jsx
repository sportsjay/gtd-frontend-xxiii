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
    title: "GTD XXIII",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam aspernatur tempore voluptatum, facere ex tenetur vero! Amet, sit neque eos similique illo recusandae a tempore perferendis explicabo architecto soluta dolorum.",
  },
  {
    title: "GTD XXIII",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam aspernatur tempore voluptatum, facere ex tenetur vero! Amet, sit neque eos similique illo recusandae a tempore perferendis explicabo architecto soluta dolorum.",
  },
  {
    title: "GTD XXIII",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam aspernatur tempore voluptatum, facere ex tenetur vero! Amet, sit neque eos similique illo recusandae a tempore perferendis explicabo architecto soluta dolorum.",
  },
  {
    title: "GTD XXIII",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam aspernatur tempore voluptatum, facere ex tenetur vero! Amet, sit neque eos similique illo recusandae a tempore perferendis explicabo architecto soluta dolorum.",
  },
  {
    title: "GTD XXIII",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam aspernatur tempore voluptatum, facere ex tenetur vero! Amet, sit neque eos similique illo recusandae a tempore perferendis explicabo architecto soluta dolorum.",
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
    const orientation = props.index % 2 !== 0 ? "row-reverse" : "row";
    const pictures = props.pictures || [
      <img
        className={classes.image}
        src="../images/gtd-dummy.jpg"
        alt="../images/gtd.jpg"
        width="100%"
        height="auto"
      />,
      <img
        className={classes.image}
        src="../images/gtd-dummy.jpg"
        alt="../images/gtd.jpg"
        width="100%"
        height="auto"
      />,
      <img
        className={classes.image}
        src="../images/gtd-dummy.jpg"
        alt="../images/gtd.jpg"
        width="100%"
        height="auto"
      />,
    ];
    const title = props.title || "No Title";
    const subtitle = props.subtitle || "No subtitle";
    return (
      <Grid
        container
        spacing={3}
        className={classes.displayContainer}
        style={{ flexDirection: orientation }}
      >
        <Grid item xs={12} md={6} className={classes.displayImage}>
          <Carousel content={pictures} />
        </Grid>
        <Grid item xs={12} md={6} className={classes.displayText}>
          <Text className={classes.title}>{title}</Text>
          <Text className={classes.subtitle}>{subtitle}</Text>
        </Grid>
      </Grid>
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
              index={index}
              key={index}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Content
              title={data.title}
              subtitle={data.subtitle}
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
    flexGrow: 1,
    align: "center",
    boxSizing: "border-box",
  },

  displayContainer: {
    align: "center",
    padding: theme.spacing(2),
    margin: "auto",
    display: "flex",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
  },

  displayTransition: {
    justifyContent: "center",
    margin: "auto",
    padding: theme.spacing(2),
    display: "block",
    boxSizing: "border-box",
  },

  displayImage: {
    padding: "20px",
    boxSizing: "border-box",
    width: "50%",
  },

  displayText: {
    padding: "20px",
    boxSizing: "border-box",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    background: "#F8F2E5",
    borderRadius: "20px",
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
    margin: "10px auto 10px auto",
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 3,
    },
  },
}));
