import React, { useState } from "react";
import { makeStyles, Container, Avatar } from "@material-ui/core";

// import components
import { Text } from "../components/common/typography";
import { StyledButton } from "../components/common/button";

// import styles
import { colorPalette } from "../components/common/color-palette";

const portfolios = [
  {
    portfolio: "Project Officer",
    maincommittee: [
      {
        name: "Elysia",
        position: "PO",
        URL: "portfolio/MC/Elysia-min.jpg",
        major: "MSE/Year 3",
      },
      {
        name: "Hendrick Sebastian",
        position: "PO",
        URL: "portfolio/MC/Hendrick Sebastian-min.jpg",
        major: "EEE/Year 3",
      },
      {
        name: "Violin Yapputri",
        position: "PO",
        URL: "portfolio/MC/Violin Yapputri-min.jpg",
        major: "IEM/Year 3",
      },
      {
        name: "Nicolas Erlando Edisanto",
        position: "PO",
        URL: "portfolio/MC/Nicolas Erlando Edisanto-min.jpg",
        major: "EEE/Year 3",
      },
      {
        name: "Andrew Wiraatmaja",
        position: "PO",
        URL: "portfolio/MC/Andrew Wiraatmaja-min.jpg",
        major: "DSAI/Year 3",
      },
      {
        name: "Adeline Yee",
        position: "PO",
        URL: "portfolio/MC/Adeline Yee-min.jpg",
        major: "CS-MAS/Year 3",
      },
    ],
    subcommittee: [
      {
        name: "Aaron Valencio Kristanto",
        position: "PO",
        major: "PAS/2",
        URL: "portfolio/PO/Aaron Valencio Kristanto-min.jpg",
      },
      {
        name: "Bryan Mardono",
        position: "PO",
        major: "CBE/2",
        URL: "portfolio/PO/Bryan Mardono-min.jpg",
      },
      {
        name: "Jonathan Kelvin Santoso",
        position: "PO",
        major: "EEE/2",
        URL: "portfolio/PO/Jonathan Kelvin Santoso-min.jpg",
      },
      {
        name: "Jonathan Nicholas Yap",
        position: "PO",
        major: "CEE/2",
        URL: "portfolio/PO/Jonathan Nicholas Yap-min.jpg",
      },
      {
        name: "Kenrick Owen",
        position: "PO",
        major: "MSE/2",
        URL: "portfolio/PO/Kenrick Owen-min.jpg",
      },
      {
        name: "Matthew Yasuo",
        position: "PO",
        major: "CBE/2",
        URL: "portfolio/PO/Matthew Yasuo-min.jpg",
      },
      {
        name: "Muhammad Rifqi Aulia",
        position: "PO",
        major: "CBE/2",
        URL: null,
      },
      {
        name: "Niko Kristanto",
        position: "PO",
        major: "IEM/2",
        URL: "portfolio/PO/Niko Kristanto-min.jpg",
      },
      {
        name: "Renardi Muliawan",
        position: "PO",
        major: "CEE/2",
        URL: "portfolio/PO/Renardi Muliawan-min.jpg",
      },
      {
        name: "Jason Nicholas",
        position: "PO",
        major: "CBE/2",
        URL: "portfolio/PO/Jason Nicholas-min.jpg",
      },
      {
        name: "Vanessa Christy Chandra",
        position: "PO",
        major: "IEM/2",
        URL: "portfolio/PO/Vanessa Christy Chandra-min.jpg",
      },
      {
        name: "Wesley Susanto",
        position: "PO",
        major: "IEM/2",
        URL: "portfolio/PO/Wesley Susanto-min.jpg",
      },
      {
        name: "Kevin Pranoto",
        position: "PO",
        major: "MSE/3",
        URL: "portfolio/PO/Kevin Pranoto-min.jpg",
      },
      {
        name: "Leonardo Sutanto",
        position: "PO",
        major: "MSE/3",
        URL: "portfolio/PO/Leonardo Sutanto-min.jpg",
      },
      {
        name: "Michelle Andrea Budiarto",
        position: "PO",
        major: "EEE/3",
        URL: "portfolio/PO/Michelle Andrea Budiarto-min.jpg",
      },
      {
        name: "Timothy Ellison Janong",
        position: "PO",
        major: "CBE/3",
        URL: "portfolio/PO/Timothy Ellison Janong-min.jpg",
      },
      {
        name: "Marcella Mia Marcia",
        position: "PO",
        major: "CBE/4",
        URL: "portfolio/PO/Marcella Mia Marcia-min.jpg",
      },
      {
        name: "Vincentius Dennis Herell",
        position: "PO",
        major: "EEE/4",
        URL: "portfolio/PO/Vincentius Dennis Herell-min.jpg",
      },
    ],
  },
  {
    portfolio: "Logistics",
    maincommittee: [
      {
        name: "Danendra Lohanata",
        position: "Logistics",
        URL: "portfolio/MC/Danendra Lohanata-min.jpg",
        major: "MAS/Year 3",
      },
      {
        name: "Ahmad Aufar Thoriq",
        position: "Logistics",
        URL: "portfolio/MC/Ahmad Aufar Thoriq-min.jpg",
        major: "EEE/Year 3",
      },
      {
        name: "Bhara Sina Murtadla",
        position: "Logistics",
        URL: "portfolio/MC/Bhara Sina Murtadla-min.jpg",
        major: "EEE/Year 3",
      },
    ],
    subcommittee: [
      {
        name: "Anastasia Audrey Widjaja",
        position: "LOGS",
        major: "BIE/2",
        URL: "portfolio/LOGS/Anastasia Audrey Widjaja-min.jpg",
      },
      {
        name: "Andrew Tatang",
        position: "LOGS",
        major: "EEE/2",
        URL: "portfolio/LOGS/Andrew Tatang-min.jpg",
      },
      {
        name: "Bryan Christopher",
        position: "LOGS",
        major: "MAS/2",
        URL: "portfolio/LOGS/Bryan Christopher-min.jpg",
      },
      {
        name: "Daniel Rahmatcipta",
        position: "LOGS",
        major: "CEE/2",
        URL: "portfolio/LOGS/Daniel Rahmatcipta-min.jpg",
      },
      {
        name: "Enrian Wicaksana",
        position: "LOGS",
        major: "CEE/2",
        URL: "portfolio/LOGS/Enrian Wicaksana-min.jpg",
      },
      {
        name: "Hartawan Surya Santoso",
        position: "LOGS",
        major: "CEE/2",
        URL: "portfolio/LOGS/Hartawan Surya Santoso-min.jpg",
      },
      {
        name: "Rajendra Muhammad Alfarrel",
        position: "LOGS",
        major: "CEE/2",
        URL: "portfolio/LOGS/Rajendra Muhammad Alfarrel-min.jpg",
      },
      {
        name: "Vania Calista",
        position: "LOGS",
        major: "MSE/2",
        URL: "portfolio/LOGS/Vania Calista-min.jpg",
      },
      {
        name: "Abraham Osmond Edmundo",
        position: "LOGS",
        major: "MAS/3",
        URL: "portfolio/LOGS/Abraham Osmond Edmundo-min.jpg",
      },
      {
        name: "Alexander Giovanni",
        position: "LOGS",
        major: "BIE/3",
        URL: "portfolio/LOGS/Alexander Giovanni-min.jpg",
      },
      {
        name: "Mikael Ndaru Ajiwidodo",
        position: "LOGS",
        major: "EEE/3",
        URL: "portfolio/LOGS/Mikael Ndaru Ajiwidodo-min.jpg",
      },
      {
        name: "Ryan Gabriel",
        position: "LOGS",
        major: "CEE/3",
        URL: "portfolio/LOGS/Ryan Gabriel-min.jpg",
      },
      {
        name: "Andhika Satriya Bhayangkara",
        position: "LOGS",
        major: "MAE/4",
        URL: "portfolio/LOGS/Andhika Satriya Bhayangkara-min.jpg",
      },
      {
        name: "Eliora Violain Buyamin",
        position: "LOGS",
        major: "BIE/4",
        URL: "portfolio/LOGS/Eliora Violain Buyamin-min.jpg",
      },
      {
        name: "Francisco Bryant",
        position: "LOGS",
        major: "EEE/4",
        URL: "portfolio/LOGS/Francisco Bryant-min.jpg",
      },
      {
        name: "Kezia Janet",
        position: "LOGS",
        major: "MSE/4",
        URL: "portfolio/LOGS/Kezia Janet-min.jpg",
      },
    ],
  },
  {
    portfolio: "PPIT",
    maincommittee: [
      {
        name: "Christopher Denny",
        position: "Publication & Publicity",
        URL: "portfolio/MC/Christopher Denny Prihadi-min.jpg",
        major: "EEE/Year 4",
      },
      {
        name: "Hans Aldi Christian",
        position: "Publication & Publicity",
        URL: "portfolio/MC/Hans Aldi Christian-min.jpg",
        major: "EEE/Year 3",
      },
      {
        name: "Valencia Sendytio",
        position: "Publication & Publicity",
        URL: "portfolio/MC/Valencia Sendytio-min.jpg",
        major: "WKW/Year 4",
      },
      {
        name: "Jason Nathaniel",
        position: "Information Technology",
        URL: "portfolio/MC/Jason Nathaniel-min.jpg",
        major: "EEE/Year 4",
      },
    ],
    subcommittee: [
      {
        name: "Daren Nathaniel Janto",
        position: "PPIT",
        major: "CS/2",
        URL: "portfolio/PPIT/Daren Nathaniel Janto-min.jpg",
      },
      {
        name: "Edward Steven Wongso",
        position: "PPIT",
        major: "EEE/2",
        URL: "portfolio/PPIT/Edward Steven Wongso-min.jpg",
      },
      {
        name: "Hansen Lienardi",
        position: "PPIT",
        major: "EEE/2",
        URL: "portfolio/PPIT/Hansen Lienardi-min.jpg",
      },
      {
        name: "Juan Samuel Sugianto",
        position: "PPIT",
        major: "CS/2",
        URL: "portfolio/PPIT/Juan Samuel Sugianto-min.jpg",
      },
      {
        name: "Justin Ferdinand Pradinatay",
        position: "PPIT",
        major: "MAE/3",
        URL: "portfolio/PPIT/Justin Ferdinand Pradinatay-min.jpg",
      },
      {
        name: "Rivaldo Billy Sebastian",
        position: "PPIT",
        major: "MAS/2",
        URL: "portfolio/PPIT/Rivaldo Billy Sebastian-min.jpg",
      },
      {
        name: "Theo Felix Kurniawan",
        position: "PPIT",
        major: "CBE/2",
        URL: "portfolio/PPIT/Theo Felix Kurniawan-min.jpg",
      },
      {
        name: "Sylvia Deborah",
        position: "PPIT",
        major: "EEE/2",
        URL: "portfolio/PPIT/Sylvia Deborah-min.jpg",
      },
      {
        name: "Victor Lim",
        position: "PPIT",
        major: "EEE/2",
        URL: "portfolio/PPIT/Victor Lim-min.jpg",
      },
      {
        name: "Abhirama Radhitya Santoso",
        position: "PPIT",
        major: "CEE/3",
        URL: "portfolio/PPIT/Abhirama Radhitya Santoso-min.jpg",
      },
      {
        name: "Alvon Gunawan",
        position: "PPIT",
        major: "EEE/3",
        URL: "portfolio/PPIT/Alvon Gunawan-min.jpg",
      },
      {
        name: "Ferlita Halim",
        position: "PPIT",
        major: "CS/3",
        URL: "portfolio/PPIT/Ferlita Halim-min.jpg",
      },
      {
        name: "Jessika Nadia Hartanto",
        position: "PPIT",
        major: "ADM/3",
        URL: "portfolio/PPIT/Jessika Nadia Hartanto-min.jpg",
      },
      {
        name: "Wilhelmus Adi Prawira Pangestu",
        position: "PPIT",
        major: "MSE/3",
        URL: "portfolio/PPIT/Wilhelmus Adi Prawira Pangestu-min.jpg",
      },
      {
        name: "Gabrian Christopher",
        position: "PPIT",
        major: "EEE/4",
        URL: "portfolio/PPIT/Gabrian Christopher-min.jpg",
      },
      {
        name: "Jessica Widjaja",
        position: "PPIT",
        major: "CBE/4",
        URL: "portfolio/PPIT/Jessica Widjaja-min.jpg",
      },
      {
        name: "Justin Trisno",
        position: "PPIT",
        major: "EEE/4",
        URL: "portfolio/PPIT/Justin Trisno-min.jpg",
      },
      {
        name: "Noah Winston",
        position: "PPIT",
        major: "EEE/4",
        URL: "portfolio/PPIT/Noah Winston-min.jpg",
      },
    ],
  },
  {
    portfolio: "Welfare",
    maincommittee: [
      {
        name: "Michael Hans",
        position: "Welfare",
        URL: "portfolio/MC/Michael Hans-min.jpg",
        major: "EEE/Year 3",
      },
      {
        name: "Dzakiy Farid Fadhila",
        position: "Welfare",
        URL: "portfolio/MC/Dzakiy Farid Fadhila-min.jpg",
        major: "MAE/Year 3",
      },
      {
        name: "Janet Widianto",
        position: "Welfare",
        URL: "portfolio/MC/Janet Widianto-min.jpg",
        major: "MSE/Year 3",
      },
    ],
    subcommittee: [
      {
        name: "Immanuel Yehuda",
        position: "Welfare",
        major: "NBS/3",
        URL: "portfolio/Welfare/Immanuel Yehuda-min.jpg",
      },
      {
        name: "Fernando",
        position: "Welfare",
        major: "EESS/2",
        URL: "portfolio/Welfare/Fernando-min.jpg",
      },
      {
        name: "Hou Lixuan",
        position: "Welfare",
        major: "ACC/3",
        URL: null,
      },
      {
        name: "Kathy Sophia Kristianty",
        position: "Welfare",
        major: "BIE/2",
        URL: "portfolio/Welfare/Kathy Sophia Kristianty-min.jpg",
      },
      {
        name: "Jessica Chandra",
        position: "Welfare",
        major: "CEE/2",
        URL: "portfolio/Welfare/Jessica Chandra-min.jpg",
      },
      {
        name: "Jimmy Rivallo",
        position: "Welfare",
        major: "CBE/2",
        URL: "portfolio/Welfare/Jimmy Rivallo-min.jpg",
      },
      {
        name: "Richardson",
        position: "Welfare",
        major: "IEM/4",
        URL: "portfolio/Welfare/Richardson-min.jpg",
      },
      {
        name: "Hugo Sebastian Gouw",
        position: "Welfare",
        major: "EEE/2",
        URL: "portfolio/Welfare/Hugo Sebastian Gouw-min.jpg",
      },
      {
        name: "Naufal Ragitya Daniswara",
        position: "Welfare",
        major: "MSE/2",
        URL: "portfolio/Welfare/Naufal Ragitya Daniswara-min.jpg",
      },
      {
        name: "Celine Prawiro",
        position: "Welfare",
        major: "MSE/4",
        URL: "portfolio/Welfare/Celine Prawiro-min.jpg",
      },
      {
        name: "Dihan Jannatan Mutaalim",
        position: "Welfare",
        major: "MAE/2",
        URL: "portfolio/Welfare/Dihan Jannatan Mutaalim-min.jpg",
      },
      {
        name: "Andrew Imanuel",
        position: "Welfare",
        major: "NBS/3",
        URL: "portfolio/Welfare/Andrew Imanuel-min.jpg",
      },
      {
        name: "Hagata Raguel Jehoshua",
        position: "Welfare",
        major: "MSE/3",
        URL: "portfolio/Welfare/Hagata Raguel Jehoshua-min.jpg",
      },
      {
        name: "Melina Novalia Jontera Lius",
        position: "Welfare",
        major: "MSE/3",
        URL: "portfolio/Welfare/Melina Novalia Jontera Lius-min.jpg",
      },
      {
        name: "Jason Jovi Brata",
        position: "Welfare",
        major: "MSE/4",
        URL: "portfolio/Welfare/Jason Jovi Brata-min.jpg",
      },
      {
        name: "David Alexander Yosal",
        position: "Welfare",
        major: "NBS/2",
        URL: "portfolio/Welfare/David Alexander Yosal-min.jpg",
      },
      {
        name: "Sharon Gautama",
        position: "Welfare",
        major: "CBE/4",
        URL: "portfolio/Welfare/Sharon Gautama-min.jpg",
      },
    ],
  },
  {
    portfolio: "Group Leader",
    maincommittee: [
      {
        name: "Theodora Lynn",
        position: "CGL",
        URL: "portfolio/MC/Theodora Lynn-min.jpg",
        major: "MSE/Year 3",
      },
      {
        name: "Kenny Lo",
        position: "CGL",
        URL: "portfolio/MC/Kenny Lo-min.jpg",
        major: "MSE/Year 3",
      },
    ],
    subcommittee: [
      {
        name: "Irfan Enkisra",
        position: "GL",
        major: "CEE/3",
        URL: "portfolio/GL/Irfan Enkisra-min.jpg",
      },
      {
        name: "Kennard Hans Widjaja",
        position: "GL",
        major: "EEE/2",
        URL: "portfolio/GL/Kennard Hans Widjaja-min.jpg",
      },
      {
        name: "Felicia Angelina Halim",
        position: "GL",
        major: "NBS/2",
        URL: "portfolio/GL/Felicia Angelina Halim-min.jpg",
      },
      {
        name: "Gabriella Angelina Lim",
        position: "GL",
        major: "NBS/2",
        URL: "portfolio/GL/Gabriella Angelina Lim-min.jpg",
      },
      {
        name: "John Nicholas Suharjono",
        position: "GL",
        major: "EEE/2",
        URL: "portfolio/GL/John Nicholas Suharjono-min.jpg",
      },
      {
        name: "Kenzhi Iskandar Wong",
        position: "GL",
        major: "MAE/2",
        URL: "portfolio/GL/Kenzhi Iskandar Wong-min.jpg",
      },
      {
        name: "Jocelyn Valencia Yoswara",
        position: "GL",
        major: "IEM/2",
        URL: "portfolio/GL/Jocelyn Valencia Yoswara-min.jpg",
      },
      {
        name: "Valencia Lie",
        position: "GL",
        major: "DSAI/2",
        URL: "portfolio/GL/Valencia Lie-min.jpg",
      },
      {
        name: "Arvin Jaya",
        position: "GL",
        major: "CEE/2",
        URL: "portfolio/GL/Arvin Jaya-min.jpg",
      },
      {
        name: "Alvin Putera Budiman",
        position: "GL",
        major: "EEE/2",
        URL: "portfolio/GL/Alvin Putera Budiman-min.jpg",
      },
      {
        name: "Vivian Widjaja",
        position: "GL",
        major: "IEM/3",
        URL: "portfolio/GL/Vivian Widjaja-min.jpg",
      },
      {
        name: "Christopher Arif Setiadharma",
        position: "GL",
        major: "CE/2",
        URL: "portfolio/GL/Christopher Arif Setiadharma-min.jpg",
      },
    ],
  },
  {
    portfolio: "BFM",
    maincommittee: [
      {
        name: "Shellia Oktavina",
        position: "BFM",
        URL: "portfolio/MC/Shellia Oktavina-min.jpg",
        major: "SBS/Year 3",
      },
      {
        name: "Hagan Hototo Barus",
        position: "BFM",
        URL: "portfolio/MC/Hagan Hototo Barus-min.jpg",
        major: "NBS/Year 2",
      },
      {
        name: "Winnie Faustinelie",
        position: "BFM",
        URL: "portfolio/MC/Winnie Faustinelie-min.jpg",
        major: "CBE/Year 4",
      },
      {
        name: "Timothy William Delin",
        position: "BFM",
        URL: "portfolio/MC/Timothy William Delin-min.jpg",
        major: "MSE/Year 3",
      },
    ],
    subcommittee: [
      {
        name: "Kevin Lius",
        position: "BFM",
        major: "CEE/3",
        URL: "portfolio/BFM/Kevin Lius-min.jpg",
      },
      {
        name: "Ryan Kent Tanadi",
        position: "BFM",
        major: "CS/2",
        URL: "portfolio/BFM/Ryan Kent Tanadi-min.jpg",
      },
      {
        name: "Leonard Darmawan",
        position: "BFM",
        major: "CBE/2",
        URL: "portfolio/BFM/Leonard Darmawan-min.jpg",
      },
      {
        name: "Juan Steven",
        position: "BFM",
        major: "CEE/2",
        URL: null,
      },
      {
        name: "Karen Prasetio",
        position: "BFM",
        major: "CBC/4",
        URL: "portfolio/BFM/Karen Prasetio-min.jpg",
      },
      {
        name: "Devin Edward",
        position: "BFM",
        major: "CBC/4",
        URL: "portfolio/BFM/Devin Edward-min.jpg",
      },
      {
        name: "Julius Daniel Sarwono",
        position: "BFM",
        major: "NBS/3",
        URL: "portfolio/BFM/Julius Daniel Sarwono-min.jpg",
      },
      {
        name: "Agnes Melia",
        position: "BFM",
        major: "MAS/4",
        URL: "portfolio/BFM/Agnes Melia-min.jpg",
      },
      {
        name: "Darrens Sanders Tanuwidjaja",
        position: "BFM",
        major: "MAE/2",
        URL: "portfolio/BFM/Darrens Sanders Tanuwidjaja-min.jpg",
      },
      {
        name: "Hans Farrell Soegeng",
        position: "BFM",
        major: "MAS/2",
        URL: "portfolio/BFM/Hans Farrell Soegeng-min.jpg",
      },
      {
        name: "Marvin Winson",
        position: "BFM",
        major: "CE/4",
        URL: "portfolio/BFM/Marvin Winson-min.jpg",
      },
      {
        name: "Rachel Emmanuelle Raphael",
        position: "BFM",
        major: "MSE/2",
        URL: "portfolio/BFM/Rachel Emmanuelle Raphael-min.jpg",
      },
      {
        name: "Ruby Clarissa Sutopo",
        position: "BFM",
        major: "BS/2",
        URL: "portfolio/BFM/Ruby Clarissa Sutopo-min.jpg",
      },
      {
        name: "Vincent",
        position: "BFM",
        major: "MSE/4",
        URL: "portfolio/BFM/Vincent-min.jpg",
      },
    ],
  },
];

const colors = new colorPalette();

function InfoCard(props) {
  const { name, position, URL, major } = props;
  const classes = useStyles();

  return (
    <div
      style={{ width: 250, height: 300, margin: 20, minWidth: "max-content" }}
    >
      <section className={classes.imagebox}>
        <div className={classes.whitebox}>
          <Text className={classes.NameBox}>{name}</Text>
          <Text className={classes.MajorText}>{major}</Text>
          <Text className={classes.PosBox}>Position</Text>
          <Text className={classes.PosText}>{position}</Text>
        </div>
        <Avatar
          src={URL}
          className={classes.photoImage}
          alt={name
            .split()
            .map((_name) => _name[0])
            .join(" ")}
        />
      </section>
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
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  }
  function handleNextPage() {
    if (page === portfolios.length - 1) setPage(0);
    else setPage(page + 1);
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  }

  function handleSelectPage(idx) {
    setPage(idx);
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={classes.root}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Container className={classes.container}>
          <Text component="div" className={classes.GTD}>
            GTD XXIII
          </Text>
          <Text component="div" className={classes.content}>
            Welcome to GTD XXIII. Here we bring you to all our personnels coming
            from each respective porfolios.
          </Text>
        </Container>
      </div>
      <div item xs={12}>
        <Text component="div" className={classes.headerTitle}>
          Top Management
        </Text>
      </div>
      <div item xs={12} style={{ display: "flex", justifyContent: "center" }}>
        <InfoCard
          name="Kelvin Leo"
          position="President"
          major="MSE/Year 4"
          URL="portfolio/MC/Kelvin Leo-min.jpg"
        />
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
          position="VP PO-LOGS"
          major="EEE/Year 4"
          URL="portfolio/MC/Nicholas Eric Geraldo-min.jpg"
        />
        <InfoCard
          name="Matthew Stanley"
          position="VP PPIT-Welfare"
          major="EEE/Year 4"
          URL="portfolio/MC/Stanley Qiu-min.jpg"
        />
        <InfoCard
          name="Edward Siman"
          position="VP GL-BFM"
          major="CBE/Year 4"
          URL="portfolio/MC/Edward Siman-min.jpg"
        />
      </div>
      {/* portfolio section */}
      <div id="portfolio" />
      <div className={classes.portfolioSelect} style={{ marginTop: 90 }}>
        <Text className={classes.porfolioText}>
          {portfolios[page].portfolio}
        </Text>
      </div>
      <header className={classes.headerWrapper}>
        <div
          style={{ backgroundColor: colors.cream, width: "32%", height: 2 }}
        />
        <Text
          component="div"
          className={classes.headerTitle}
          style={{ minWidth: "max-content" }}
        >
          Main Committee
        </Text>
        <div
          style={{ backgroundColor: colors.cream, width: "32%", height: 2 }}
        />
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
        className={classes.subcommitteeWrapper}
      >
        {portfolios[page].maincommittee.map((committee, idx) => (
          <InfoCard key={idx} {...committee} />
        ))}
      </div>
      <header className={classes.headerWrapper}>
        <div
          style={{ backgroundColor: colors.cream, width: "34%", height: 2 }}
        />
        <Text component="div" className={classes.headerTitle}>
          Subcommittee
        </Text>
        <div
          style={{ backgroundColor: colors.cream, width: "34%", height: 2 }}
        />
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
        className={classes.subcommitteeWrapper}
      >
        {portfolios[page].subcommittee.map((committee, idx) => (
          <InfoCard key={idx} {...committee} />
        ))}
      </div>
      <div className={classes.portfolioSelect}>
        <StyledButton className={buttonClasses.bottom} onClick={handlePrevPage}>
          previous
        </StyledButton>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
          }}
        >
          {portfolios.map((_, idx) => (
            <div
              key={idx}
              className={classes.tab}
              style={{
                filter: idx === page ? "brightness(1)" : "",
              }}
              onClick={() => handleSelectPage(idx)}
            />
          ))}
        </section>
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
  headerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(2),
    width: "100%",
    boxSizing: "border-box",
    paddingLeft: 60,
    paddingRight: 60,
  },
  headerTitle: {
    backgroundColor: colors.black,
    fontSize: 48,
    fontWeight: "700",
    textAlign: "center",
    paddingTop: 30,
    color: colors.white,
    paddingBottom: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 36,
    },
  },
  porfolioText: {
    fontSize: 60,
    fontWeight: "700",
    textAlign: "center",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "36pt",
    },
  },
  content: {
    backgroundColor: colors.black,
    fontSize: "20pt",
    color: colors.gray,
    paddingTop: "10px",
    paddingLeft: "40px",
    paddingRight: "40px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16pt",
    },
  },
  GTD: {
    backgroundColor: colors.black,
    fontSize: 72,
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
  subcommitteeWrapper: {
    paddingLeft: "20%",
    paddingRight: "20%",
    boxSizing: "border-box",
  },
  imagebox: {
    width: 250,
    height: 300,
    background: colors.red,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    boxSizing: "border-box",
  },

  whitebox: {
    position: "absolute",
    backgroundColor: colors.cream,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    boxSizing: "border-box",
    bottom: 0,
    width: 250,
    height: 200,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  photoImage: {
    position: "absolute",
    backgroundColor: colors.gray,
    left: "calc(50% - 75px)",
    top: 20,
    borderRadius: 70,
    minWidth: 140,
    minHeight: 140,
    maxWidth: 140,
    maxHeight: 140,
    border: `5px solid ${colors.cream}`,
    objectFit: "cover",
  },
  NameBox: {
    marginTop: 70,
    maxHeight: 40,
    fontSize: "24px",
    fontWeight: "600",
    alignItems: "center",
    textAlign: "center",
    overflow: "hidden",
  },
  PosBox: {
    fontSize: "16px",
    fontWeight: "600",
    alignItems: "center",
    textAlign: "center",
  },
  MajorText: {
    textAlign: "center",
    top: "110px",
  },
  PosText: {
    textAlign: "center",
    top: "160px",
  },
  portfolioSelect: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
    boxSizing: "border-box",
    justifyContent: "center",
    width: "100%",
    gap: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      justifyContent: "center",
      gap: theme.spacing(4),
    },
  },
  tab: {
    height: 10,
    width: 10,
    backgroundColor: colors.gray,
    borderRadius: 5,
    filter: "brightness(0.6)",
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
      width: "20%",
      maxWidth: 200,
    },
  },
}));
