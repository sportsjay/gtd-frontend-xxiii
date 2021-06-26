import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

// import components
import { Text } from "../components/common/typography";

// import stlyes
import { colorPalette } from "../components/common/color-palette";
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
        <Bar />
        <Circ />
      </div>
    );
  }

  function Content(props) {
    // image-text orientation, default = row, else = row-reverse
    const orientation = props.index % 2 !== 0 ? "row-reverse" : "row";
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
          <img
            className={classes.image}
            src="../images/gtd-dummy.jpg"
            alt="../images/gtd.jpg"
            width="100%"
            height="auto"
          />
        </Grid>
        <Grid item xs={12} md={6} className={classes.displayText}>
          <Text className={classes.title}>{title}</Text>
          <Text className={classes.subtitle}>{subtitle}</Text>
        </Grid>
      </Grid>
    );
  }

  return (
    <div className={classes.root}>
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "16pt",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12pt",
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
