import React, { useState } from "react";
import { makeStyles, Container } from "@material-ui/core";

// import components
import { Text } from "../components/common/typography";
import { StyledButton } from "../components/common/button";

// import styles
import { colorPalette } from "../components/common/color-palette";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const portfolios = [
  {
    portfolio: "Project Officer",
    maincommittee: [],
    subcommittee: [
      {
        name: "Aaron Valencio",
        position: "PO",
        major: "PAS/2",
        URL: "",
      },
      {
        name: "Bryan Mardono",
        position: "PO",
        major: "CBE/2",
        URL: "",
      },
      {
        name: "Jonathan Kelvin",
        position: "PO",
        major: "EEE/2",
        URL: "",
      },
      {
        name: "Jonathan Nicholas Yap",
        position: "PO",
        major: "CEE/2",
        URL: "",
      },
      {
        name: "Kenrick Owen",
        position: "PO",
        major: "MSE/2",
        URL: "",
      },
      {
        name: "Matthew Anderson Yasuo",
        position: "PO",
        major: "CBE/2",
        URL: "",
      },
      {
        name: "Muhammad Rifqi Aulia",
        position: "PO",
        major: "CBE/2",
        URL: "",
      },
      {
        name: "Niko Kristanto",
        position: "PO",
        major: "IEM/2",
        URL: "",
      },
      {
        name: "Renardi Muliawan",
        position: "PO",
        major: "CEE/2",
        URL: "",
      },
      {
        name: "Jason Nicholas",
        position: "PO",
        major: "CBE/2",
        URL: "",
      },
      {
        name: "Vanessa Christy",
        position: "PO",
        major: "IEM/2",
        URL: "",
      },
      {
        name: "Wesley",
        position: "PO",
        major: "IEM/2",
        URL: "",
      },
      {
        name: "Kevin Pranoto",
        position: "PO",
        major: "MSE/3",
        URL: "",
      },
      {
        name: "Leonardo Sutanto",
        position: "PO",
        major: "MSE/3",
        URL: "",
      },
      {
        name: "Michelle Andrea",
        position: "PO",
        major: "EEE/3",
        URL: "",
      },
      {
        name: "Timothy Ellison Janong",
        position: "PO",
        major: "CBE/3",
        URL: "",
      },
      {
        name: "Marcella Mia Marcia",
        position: "PO",
        major: "CBE/4",
        URL: "",
      },
      {
        name: "Vincentius Dennis Herrell",
        position: "PO",
        major: "EEE/4",
        URL: "",
      },
    ],
  },
  {
    portfolio: "Logistics",
    maincommittee: [],
    subcommittee: [
      {
        name: "Anastasia Audrey Widjaja",
        position: "LOGS",
        major: "BIE/2",
        URL: "",
      },
      {
        name: "Andrew Tatang",
        position: "LOGS",
        major: "EEE/2",
        URL: "",
      },
      {
        name: "Bryan Christopher",
        position: "LOGS",
        major: "MAS/2",
        URL: "",
      },
      {
        name: "Daniel Rahmatcipta",
        position: "LOGS",
        major: "CEE/2",
        URL: "",
      },
      {
        name: "Enrian Wicaksana",
        position: "LOGS",
        major: "CEE/2",
        URL: "",
      },
      {
        name: "Hartawan Surya Santoso",
        position: "LOGS",
        major: "CEE/2",
        URL: "",
      },
      {
        name: "Rajendra Muhammad Alfarrel",
        position: "LOGS",
        major: "CEE/2",
        URL: "",
      },
      {
        name: "Vania Calista",
        position: "LOGS",
        major: "MSE/2",
        URL: "",
      },
      {
        name: "Abraham Osmond Edmundo",
        position: "LOGS",
        major: "MAS/3",
        URL: "",
      },
      {
        name: "Alexander Giovanni",
        position: "LOGS",
        major: "BIE/3",
        URL: "",
      },
      {
        name: "Mikael Ndaru Ajiwidodo",
        position: "LOGS",
        major: "EEE/3",
        URL: "",
      },
      {
        name: "Ryan Gabriel",
        position: "LOGS",
        major: "CEE/3",
        URL: "",
      },
      {
        name: "Andhika Satrya Bhayangkara",
        position: "LOGS",
        major: "ME/4",
        URL: "",
      },
      {
        name: "Eliora Violain Buyamin",
        position: "LOGS",
        major: "BIE/4",
        URL: "",
      },
      {
        name: "Francisco Bryant",
        position: "LOGS",
        major: "EEE/4",
        URL: "",
      },
      {
        name: "Kezia Janet",
        position: "LOGS",
        major: "MSE/4",
        URL: "",
      },
    ],
  },
  {
    portfolio: "PPIT",
    maincommittee: [
      {
        name: "Christopher Denny",
        position: "Publication & Publicity",
        URL: "",
        major: "EEE/Year 4",
      },
      {
        name: "Hans Aldi",
        position: "Publication & Publicity",
        URL: "",
        major: "EEE/Year 3",
      },
      {
        name: "Valencia Sendytio",
        position: "Publication & Publicity",
        URL: "",
        major: "WKW/Year 4",
      },
      {
        name: "Jason Nathaniel",
        position: "Information Technology",
        URL: "",
        major: "EEE/Year 4",
      },
    ],
    subcommittee: [
      {
        name: "Daren Nathaniel Janto",
        position: "PPIT",
        major: "CS/2",
        URL: "",
      },
      {
        name: "Edward Steven Wongso",
        position: "PPIT",
        major: "EEE/2",
        URL: "",
      },
      {
        name: "Hansen Lienardi",
        position: "PPIT",
        major: "EEE/2",
        URL: "",
      },
      {
        name: "Juan Samuel Sugianto",
        position: "PPIT",
        major: "CS/2",
        URL: "",
      },
      {
        name: "Justin Ferdinand Pradinatay",
        position: "PPIT",
        major: "ME/3",
        URL: "",
      },
      {
        name: "Rivaldo Billy Sebastian",
        position: "PPIT",
        major: "MAS/2",
        URL: "",
      },
      {
        name: "Theo Felix Kurniawan",
        position: "PPIT",
        major: "CBE/2",
        URL: "",
      },
      {
        name: "Sylvia Deborah",
        position: "PPIT",
        major: "EEE/2",
        URL: "",
      },
      {
        name: "Victor Lim",
        position: "PPIT",
        major: "EEE/2",
        URL: "",
      },
      {
        name: "Abhirama Radhitya",
        position: "PPIT",
        major: "CEE/3",
        URL: "",
      },
      {
        name: "Alvon Gunawan",
        position: "PPIT",
        major: "EEE/3",
        URL: "",
      },
      {
        name: "Ferlita Halim",
        position: "PPIT",
        major: "CS/3",
        URL: "",
      },
      {
        name: "Jessika Nadia Hartanto",
        position: "PPIT",
        major: "ADM/3",
        URL: "",
      },
      {
        name: "Wilhelmus Adi Prawira",
        position: "PPIT",
        major: "MSE/3",
        URL: "",
      },
      {
        name: "Gabrian Christopher",
        position: "PPIT",
        major: "EEE/4",
        URL: "",
      },
      {
        name: "Jessica Widjaja",
        position: "PPIT",
        major: "CBE/4",
        URL: "",
      },
      {
        name: "Justin Trisno",
        position: "PPIT",
        major: "EEE/4",
        URL: "",
      },
      {
        name: "Noah Winston",
        position: "PPIT",
        major: "EEE/4",
        URL: "",
      },
    ],
  },
  {
    portfolio: "Welfare",
    maincommittee: [],
    subcommittee: [
      {
        name: "Immanuel Yehuda",
        position: "Welfare",
        major: "NBS/3",
        URL: "",
      },
      {
        name: "Fernando",
        position: "Welfare",
        major: "EESS/2",
        URL: "",
      },
      {
        name: "Kathy Sophia Kristianty",
        position: "Welfare",
        major: "BIE/2",
        URL: "",
      },
      {
        name: "Jessica Chandra",
        position: "Welfare",
        major: "CEE/2",
        URL: "",
      },
      {
        name: "Jimmy Rivallo",
        position: "Welfare",
        major: "CBE/2",
        URL: "",
      },
      {
        name: "Richardson",
        position: "Welfare",
        major: "IEM/4",
        URL: "",
      },
      {
        name: "Hugo Sebastian",
        position: "Welfare",
        major: "EEE/2",
        URL: "",
      },
      {
        name: "Naufal Ragitya Daniswara",
        position: "Welfare",
        major: "MSE/2",
        URL: "",
      },
      {
        name: "Matthew Anderson Yasuo",
        position: "Welfare",
        major: "CBE/2",
        URL: "",
      },
      {
        name: "Dihan Jannatan Mutaalim",
        position: "Welfare",
        major: "ME/2",
        URL: "",
      },
      {
        name: "Andrew Imanuel",
        position: "Welfare",
        major: "NBS/3",
        URL: "",
      },
      {
        name: "Hagata Raguel Jehoshua",
        position: "Welfare",
        major: "MSE/3",
        URL: "",
      },
      {
        name: "Melina Novalia Jontera Lius",
        position: "Welfare",
        major: "MSE/3",
        URL: "",
      },
      {
        name: "Jason Jovi Brata",
        position: "Welfare",
        major: "MSE/4",
        URL: "",
      },
      {
        name: "David Alexander Yosal",
        position: "Welfare",
        major: "NBS/2",
        URL: "",
      },
      {
        name: "Sharon Gautama",
        position: "Welfare",
        major: "CBE/4",
        URL: "",
      },
    ],
  },
  {
    portfolio: "Group Leader",
    maincommittee: [],
    subcommittee: [
      {
        name: "Irfan Enkisra",
        position: "GL",
        major: "CEE/3",
        URL: "",
      },
      {
        name: "Kennard Hans Widjaja",
        position: "GL",
        major: "EEE/2",
        URL: "",
      },
      {
        name: "Felicia Angelina Halim",
        position: "GL",
        major: "NBS/2",
        URL: "",
      },
      {
        name: "Gabriella Angelina Lim",
        position: "GL",
        major: "NBS/2",
        URL: "",
      },
      {
        name: "John Nicholas Suharjono",
        position: "GL",
        major: "EEE/2",
        URL: "",
      },
      {
        name: "Kenzhi Iskandar Wong",
        position: "GL",
        major: "MAE/2",
        URL: "",
      },
      {
        name: "Jocelyn Valencia Yoswara",
        position: "GL",
        major: "IEM/2",
        URL: "",
      },
      {
        name: "Valencia Lie",
        position: "GL",
        major: "DSAI/2",
        URL: "",
      },
      {
        name: "Arvin Jaya",
        position: "GL",
        major: "CEE/2",
        URL: "",
      },
      {
        name: "Alvin Putera Budiman",
        position: "GL",
        major: "EEE/2",
        URL: "",
      },
      {
        name: "Vivian Widjaja",
        position: "GL",
        major: "IEM/3",
        URL: "",
      },
      {
        name: "Christopher Arif Setiadharma",
        position: "GL",
        major: "CE/2",
        URL: "",
      },
    ],
  },
  {
    portfolio: "BFM",
    maincommittee: [],
    subcommittee: [
      {
        name: "Kevin Lius",
        position: "BFM",
        major: "CEE/3",
        URL: "",
      },
      {
        name: "Leonard Darmawan",
        position: "BFM",
        major: "CBE/2",
        URL: "",
      },
      {
        name: "Karen Prasetio",
        position: "BFM",
        major: "CBC/4",
        URL: "",
      },
      {
        name: "Devin Edward",
        position: "BFM",
        major: "CBC/4",
        URL: "",
      },
      {
        name: "Julius Daniel Sarwono",
        position: "BFM",
        major: "NBS/3",
        URL: "",
      },
      {
        name: "Agnes Melia",
        position: "BFM",
        major: "MAS/4",
        URL: "",
      },
      {
        name: "Darrens Sanders Tanuwidjaja",
        position: "BFM",
        major: "ME/2",
        URL: "",
      },
      {
        name: "Hans Farrell Soegeng",
        position: "BFM",
        major: "MAS/2",
        URL: "",
      },
      {
        name: "Marvin Winson",
        position: "BFM",
        major: "CE/4",
        URL: "",
      },
      {
        name: "Rachel Emmanuelle Raphael",
        position: "BFM",
        major: "MSE/2",
        URL: "",
      },
      {
        name: "Ruby Clarissa Sutopo",
        position: "BFM",
        major: "BS/2",
        URL: "",
      },
      {
        name: "Vincent",
        position: "BFM",
        major: "MSE/3",
        URL: "",
      },
    ],
  },
];

const colors = new colorPalette();

function InfoCard(props) {
  const { name, position, URL, major } = props;
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
          src={URL ? URL : "gtd.png"}
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
  const buttonClasses = buttonStyles();
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
            Hello! Welcome to GTD XXIII. Here we bring you to all our personnels
            coming from each respective porfolios.
          </Text>
        </Container>
      </div>
      <div item xs={12}>
        <Text component="div" className={classes.headerTitle}>
          Top Management
        </Text>
      </div>
      <div item xs={12} style={{ display: "flex", justifyContent: "center" }}>
        <InfoCard name="Kelvin Leo" position="President" major="MSE/Year 4" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <InfoCard
          name="Nicholas Eric Geraldo"
          position="VP PO-LOG"
          major="EEE/Year 4"
        />
        <InfoCard
          name="Matthew Stanley"
          position="VP PPIT-Welfare"
          major="EEE/Year 4"
        />
        <InfoCard name="Edward Siman" position="VP GL-BFM" major="CBE/Year 4" />
      </div>
      <div className={classes.portfolioSelect}>
        <StyledButton className={buttonClasses.header} onClick={handlePrevPage}>
          previous
        </StyledButton>
        <Text component="div" className={classes.porfolioText}>
          {portfolios[page].portfolio}
        </Text>
        <StyledButton className={buttonClasses.header} onClick={handleNextPage}>
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
          <InfoCard key={idx} {...committee} />
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
          <InfoCard key={idx} {...committee} />
        ))}
      </div>
      <div className={classes.portfolioSelect}>
        <StyledButton className={buttonClasses.bottom} onClick={handlePrevPage}>
          previous
        </StyledButton>
        <StyledButton className={buttonClasses.bottom} onClick={handleNextPage}>
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
    maxHeight: 40,
    left: "26.5px",
    top: "80px",
    fontSize: "24px",
    fontWeight: "600",
    alignItems: "center",
    textAlign: "center",
    overflow: "hidden",
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
      justifyContent: "center",
      gap: theme.spacing(4),
    },
  },
}));

const buttonStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  bottom: {
    [theme.breakpoints.down("sm")]: {
      width: "40%",
      maxWidth: "40%",
    },
  },
}));
