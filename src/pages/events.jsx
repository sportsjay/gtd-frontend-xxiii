import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";

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
    return (
      <div
        style={{
          height: 40,
          width: "40px",
          borderRadius: "50%",
          backgroundColor: "#CCCCCC", // change to #FFFFFF
          margin: "auto",
        }}
      />
    );
  }

  function Bar() {
    return (
      <div
        style={{
          height: 60,
          width: 3,
          borderRadius: "0%",
          backgroundColor: "#CCCCCC", // change to #FFFFFF
          margin: "10px auto 10px auto",
        }}
      />
    );
  }

  function Transition() {
    return (
      <div className={classes.displayTransition}>
        <Circ></Circ>
        <Bar></Bar>
        <Circ></Circ>
        <Bar></Bar>
        <Circ></Circ>
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
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
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

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
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
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "34pt",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "12vmin",
    letterSpacing: "0em",
    textAlign: "center",
    // color: "#00FF00", // delete later
    color: "#CCCCCC", // change to #FFFFFF
    // padding: "20px",
    margin: "0 0 20px 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16pt",
    },
  },

  subtitle: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "16pt",
    fontStyle: "normal",
    lineHeight: "6vmin",
    letterSpacing: "0em",
    textAlign: "center",
    // color: "#FF0000", // delete later
    color: "#CCCCCC", // change to #FFFFFF
    // padding: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12pt",
    },
  },
}));
