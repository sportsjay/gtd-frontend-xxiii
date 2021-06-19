import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { colorPalette } from "../components/common/color-palette";

const colors = new colorPalette();

function InfoCard(props) {
  const { name, position, URLimg, major } = props;
  const classes = useStyles();
  return (
    <div style={{ width: "25%", margin: 20, minWidth: "max-content" }}>
      <Container className={classes.imagebox}>
        <div style={{ position: "relative", top: "75px", left: "62px" }}></div>
        <div className={classes.whitebox}>
          <div className={classes.NameBox}>{name}</div>
          <div className={classes.NameText}>{major}</div>
          <div className={classes.PosBox}>position</div>
          <div className={classes.PosText}>{position}</div>
        </div>
        <img
          src={URLimg}
          className={classes.photoImage}
          aria-hidden
          alt="No Image Resources"
        />
      </Container>
    </div>
  );
}

InfoCard.defaultProps = {
  name: "Name",
  major: "School/Year",
  position: "Committee",
};

export default function AboutUsPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Container className={classes.container}>
          <Typography component="div" className={classes.GTD}>
            GTD XXIII
          </Typography>
          <Typography component="div" className={classes.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            suspendisse interdum consectetur libero id faucibus. Cursus risus at
            ultrices mi tempus imperdiet. Ut sem viverra aliquet eget sit amet
            tellus.
          </Typography>
        </Container>
      </div>
      <div item xs={12}>
        <Typography component="div" className={classes.headerTitle}>
          Top Management
        </Typography>
      </div>
      <div item xs={12} style={{ display: "flex", justifyContent: "center" }}>
        <InfoCard />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      <Typography component="div" className={classes.headerTitle}>
        Main Committee
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      <Typography component="div" className={classes.headerTitle}>
        Subcommittee
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.black,
    boxSizing: "border-box",
  },
  headerTitle: {
    backgroundColor: colors.black,
    fontSize: 48,
    fontWeight: "700",
    textAlign: "center",
    paddingTop: "50px",
    color: colors.white,
    paddingBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 36,
    },
  },
  content: {
    backgroundColor: colors.black,
    paddingTop: "10px",
    paddingLeft: "40px",
    paddingRight: "40px",
    textAlign: "center",
    color: colors.white,
  },
  GTD: {
    backgroundColor: colors.black,
    fontSize: 48,
    fontWeight: "700",
    textAlign: "center",
    marginTop: "10px",
    paddingTop: "10px",
    color: colors.white,
    [theme.breakpoints.down("sm")]: {
      fontSize: 36,
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  imagebox: {
    width: "250px",
    height: "300px",
    background: "#831515",
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",
    boxSizing: "border-box",
  },

  whitebox: {
    position: "relative",
    backgroundColor: "#F8F2E5",
    top: "100px",
    left: "-50px",
    width: "300px",
    height: "300px",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  photoImage: {
    position: "relative",
    backgroundColor: colors.white,
    borderRadius: 70,
    top: "-270px",
    left: "27px",
    minWidth: 140,
    minHeight: 140,
    maxWidth: 140,
    maxHeight: 140,
    border: `5px solid ${colors.cream}`,
    objectFit: "cover",
  },
  NameBox: {
    position: "absolute",
    width: "250px",
    left: "26.5px",
    top: "80px",
    fontSize: "24px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    alignItems: "center",
    textAlign: "center",
  },
  PosBox: {
    position: "absolute",
    width: "250px",
    left: "26.5px",
    top: "135px",
    fontSize: "24px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    alignItems: "center",
    textAlign: "center",
  },
  NameText: {
    position: "absolute",
    width: "250px",
    left: "26.5px",
    textAlign: "center",
    top: "105px",
  },
  PosText: {
    position: "absolute",
    width: "250px",
    left: "26.5px",
    textAlign: "center",
    top: "160px",
  },
}));
