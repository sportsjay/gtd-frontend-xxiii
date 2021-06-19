import React, { useState } from "react";
import { makeStyles, Container } from "@material-ui/core";

// import components
import { Text } from "../components/common/typography";
import { StyledButton } from "../components/common/button";

// import styles
import { colorPalette } from "../components/common/color-palette";

const portfolios = [
  {
    portfolio: "PPIT",
    maincommittee: [],
    subcommittee: [],
  },
  {
    portfolio: "Project Officer",
    maincommittee: [],
    subcommittee: [],
  },
  {
    portfolio: "Logistics",
    maincommittee: [],
    subcommittee: [],
  },
  {
    portfolio: "Welfare",
    maincommittee: [],
    subcommittee: [],
  },
  {
    portfolio: "Group Leader",
    maincommittee: [],
    subcommittee: [],
  },
];

const colors = new colorPalette();

function InfoCard(props) {
  const { name, position, URLimg, major } = props;
  const classes = useStyles();

  return (
    <div style={{ width: "25%", margin: 20, minWidth: "max-content" }}>
      <Container className={classes.imagebox}>
        <div style={{ position: "relative", top: "75px", left: "62px" }}></div>
        <div className={classes.whitebox}>
          <Text className={classes.NameBox}>{name}</Text>
          <Text className={classes.MajorText}>{major}</Text>
          <Text className={classes.PosBox}>Position</Text>
          <Text className={classes.PosText}>{position}</Text>
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
  const [page, setPage] = useState(0);

  function handlePrevPage() {
    if (page === 0) setPage(portfolios.length - 1);
    else setPage(page - 1);
  }
  function handleNextPage() {
    if (page === portfolios.length - 1) setPage(0);
    else setPage(page + 1);
  }

  return (
    <div className={classes.root}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Container className={classes.container}>
          <Text component="div" className={classes.GTD}>
            GTD XXIII
          </Text>
          <Text component="div" className={classes.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            suspendisse interdum consectetur libero id faucibus. Cursus risus at
            ultrices mi tempus imperdiet. Ut sem viverra aliquet eget sit amet
            tellus.
          </Text>
        </Container>
      </div>
      <div item xs={12}>
        <Text component="div" className={classes.headerTitle}>
          Top Management
        </Text>
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
      <div className={classes.portfolioSelect}>
        <StyledButton className={classes.switchButton} onClick={handlePrevPage}>
          previous
        </StyledButton>
        <Text component="div" className={classes.porfolioText}>
          {portfolios[page].portfolio}
        </Text>
        <StyledButton className={classes.switchButton} onClick={handleNextPage}>
          next
        </StyledButton>
      </div>
      <Text component="div" className={classes.headerTitle}>
        Main Committee
      </Text>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {portfolios[page].maincommittee.map((committee, idx) => (
          <InfoCard key={idx} />
        ))}
      </div>
      <Text component="div" className={classes.headerTitle}>
        Subcommittee
      </Text>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {portfolios[page].subcommittee.map((committee, idx) => (
          <InfoCard key={idx} />
        ))}
      </div>
      <div className={classes.portfolioSelect}>
        <StyledButton className={classes.switchButton} onClick={handlePrevPage}>
          previous
        </StyledButton>
        <Text component="div" className={classes.porfolioText}>
          {portfolios[page].portfolio}
        </Text>
        <StyledButton className={classes.switchButton} onClick={handleNextPage}>
          next
        </StyledButton>
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
  porfolioText: {
    fontSize: "48px",
    fontWeight: "700",
    textAlign: "center",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24pt",
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
    fontWeight: "600",
    alignItems: "center",
    textAlign: "center",
  },
  PosBox: {
    position: "absolute",
    width: "250px",
    left: "26.5px",
    top: "135px",
    fontSize: "16px",
    fontWeight: "600",
    alignItems: "center",
    textAlign: "center",
  },
  MajorText: {
    position: "absolute",
    width: "250px",
    left: "26.5px",
    textAlign: "center",
    top: "110px",
  },
  PosText: {
    position: "absolute",
    width: "250px",
    left: "26.5px",
    textAlign: "center",
    top: "160px",
  },
  NameText: {
    position: "absolute",
    width: "250px",
    left: "26.5px",
    textAlign: "center",
    top: "105px",
  },
  portfolioSelect: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
    boxSizing: "border-box",
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  switchButton: {
    [theme.breakpoints.down("sm")]: {
      width: 100,
    },
  },
}));
