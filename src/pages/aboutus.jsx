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
        position: "PO Main Committee",
        URL: "portfolio/MC/Elysia.jpg",
        major: "MSE/Year 3",
      },
      {
        name: "Hendrick Sebastian",
        position: "PO Main Committee",
        URL: "portfolio/MC/Hendrick Sebastian.jpg",
        major: "EEE/Year 3",
      },
      {
        name: "Violin Yapputri",
        position: "PO Main Committee",
        URL: "portfolio/MC/Violin Yapputri.jpg",
        major: "IEM/Year 3",
      },
      {
        name: "Nicolas Erlando Edisanto",
        position: "PO Main Committee",
        URL: "portfolio/MC/Nicolas Erlando Edisanto.jpg",
        major: "EEE/Year 3",
      },
      {
        name: "Andrew Wiraatmaja",
        position: "PO Main Committee",
        URL: "portfolio/MC/Andrew Wiraatmaja.jpg",
        major: "DSAI/Year 3",
      },
      {
        name: "Adeline Yee",
        position: "PO Main Committee",
        URL: "portfolio/MC/Adeline Yee.jpg",
        major: "CS-MAS/Year 3",
      },
    ],
    subcommittee: [
      {
        name: "Aaron Valencio Kristanto",
        position: "Project Officer",
        major: "PAS/2",
        URL: "portfolio/PO/Aaron Valencio Kristanto.jpg",
      },
      {
        name: "Bryan Mardono",
        position: "Project Officer",
        major: "CBE/2",
        URL: "portfolio/PO/Bryan Mardono.jpg",
      },
      {
        name: "Jonathan Kelvin Santoso",
        position: "Project Officer",
        major: "EEE/2",
        URL: "portfolio/PO/Jonathan Kelvin Santoso.jpg",
      },
      {
        name: "Jonathan Nicholas Yap",
        position: "Project Officer",
        major: "CEE/2",
        URL: "portfolio/PO/Jonathan Nicholas Yap.jpg",
      },
      {
        name: "Kenrick Owen",
        position: "Project Officer",
        major: "MSE/2",
        URL: "portfolio/PO/Kenrick Owen.jpg",
      },
      {
        name: "Matthew Yasuo",
        position: "Project Officer",
        major: "CBE/2",
        URL: "portfolio/PO/Matthew Yasuo.jpg",
      },
      {
        name: "Muhammad Rifqi Aulia",
        position: "Project Officer",
        major: "CBE/2",
        URL: null,
      },
      {
        name: "Niko Kristanto",
        position: "Project Officer",
        major: "IEM/2",
        URL: "portfolio/PO/Niko Kristanto.jpg",
      },
      {
        name: "Renardi Muliawan",
        position: "Project Officer",
        major: "CEE/2",
        URL: "portfolio/PO/Renardi Muliawan.jpg",
      },
      {
        name: "Jason Nicholas",
        position: "Project Officer",
        major: "CBE/2",
        URL: "portfolio/PO/Jason Nicholas.jpg",
      },
      {
        name: "Vanessa Christy Chandra",
        position: "Project Officer",
        major: "IEM/2",
        URL: "portfolio/PO/Vanessa Christy Chandra.jpg",
      },
      {
        name: "Wesley Susanto",
        position: "Project Officer",
        major: "IEM/2",
        URL: "portfolio/PO/Wesley Susanto.jpg",
      },
      {
        name: "Kevin Pranoto",
        position: "Project Officer",
        major: "MSE/3",
        URL: "portfolio/PO/Kevin Pranoto.jpg",
      },
      {
        name: "Leonardo Sutanto",
        position: "Project Officer",
        major: "MSE/3",
        URL: "portfolio/PO/Leonardo Sutanto.jpg",
      },
      {
        name: "Michelle Andrea Budiarto",
        position: "Project Officer",
        major: "EEE/3",
        URL: "portfolio/PO/Michelle Andrea Budiarto.jpg",
      },
      {
        name: "Timothy Ellison Janong",
        position: "Project Officer",
        major: "CBE/3",
        URL: "portfolio/PO/Timothy Ellison Janong.jpg",
      },
      {
        name: "Marcella Mia Marcia",
        position: "Project Officer",
        major: "CBE/4",
        URL: "portfolio/PO/Marcella Mia Marcia.jpg",
      },
      {
        name: "Vincentius Dennis Herell",
        position: "Project Officer",
        major: "EEE/4",
        URL: "portfolio/PO/Vincentius Dennis Herell.jpg",
      },
    ],
  },
  {
    portfolio: "Logistics",
    maincommittee: [
      {
        name: "Danendra Lohanata",
        position: "Logistics Main Committee",
        URL: "portfolio/MC/Danendra Lohanata.jpg",
        major: "MAS/Year 3",
      },
      {
        name: "Ahmad Aufar Thoriq",
        position: "Logistics Main Committee",
        URL: "portfolio/MC/Ahmad Aufar Thoriq.jpg",
        major: "EEE/Year 3",
      },
      {
        name: "Bhara Sina Murtadla",
        position: "Logistics Main Committee",
        URL: "portfolio/MC/Bhara Sina Murtadla.jpg",
        major: "EEE/Year 3",
      },
    ],
    subcommittee: [
      {
        name: "Anastasia Audrey Widjaja",
        position: "Logistics",
        major: "BIE/2",
        URL: "portfolio/LOGS/Anastasia Audrey Widjaja.jpg",
      },
      {
        name: "Andrew Tatang",
        position: "Logistics",
        major: "EEE/2",
        URL: "portfolio/LOGS/Andrew Tatang.jpg",
      },
      {
        name: "Bryan Christopher",
        position: "Logistics",
        major: "MAS/2",
        URL: "portfolio/LOGS/Bryan Christopher.jpg",
      },
      {
        name: "Daniel Rahmatcipta",
        position: "Logistics",
        major: "CEE/2",
        URL: "portfolio/LOGS/Daniel Rahmatcipta.jpg",
      },
      {
        name: "Enrian Wicaksana",
        position: "Logistics",
        major: "CEE/2",
        URL: "portfolio/LOGS/Enrian Wicaksana.jpg",
      },
      {
        name: "Hartawan Surya Santoso",
        position: "Logistics",
        major: "CEE/2",
        URL: "portfolio/LOGS/Hartawan Surya Santoso.jpg",
      },
      {
        name: "Rajendra Muhammad Alfarrel",
        position: "Logistics",
        major: "CEE/2",
        URL: "portfolio/LOGS/Rajendra Muhammad Alfarrel.jpg",
      },
      {
        name: "Vania Calista",
        position: "Logistics",
        major: "MSE/2",
        URL: "portfolio/LOGS/Vania Calista.jpg",
      },
      {
        name: "Abraham Osmond Edmundo",
        position: "Logistics",
        major: "MAS/3",
        URL: "portfolio/LOGS/Abraham Osmond Edmundo.jpg",
      },
      {
        name: "Alexander Giovanni",
        position: "Logistics",
        major: "BIE/3",
        URL: "portfolio/LOGS/Alexander Giovanni.jpg",
      },
      {
        name: "Mikael Ndaru Ajiwidodo",
        position: "Logistics",
        major: "EEE/3",
        URL: "portfolio/LOGS/Mikael Ndaru Ajiwidodo.jpg",
      },
      {
        name: "Ryan Gabriel",
        position: "Logistics",
        major: "CEE/3",
        URL: "portfolio/LOGS/Ryan Gabriel.jpg",
      },
      {
        name: "Andhika Satriya Bhayangkara",
        position: "Logistics",
        major: "MAE/4",
        URL: "portfolio/LOGS/Andhika Satriya Bhayangkara.jpg",
      },
      {
        name: "Eliora Violain Buyamin",
        position: "Logistics",
        major: "BIE/4",
        URL: "portfolio/LOGS/Eliora Violain Buyamin.jpg",
      },
      {
        name: "Francisco Bryant",
        position: "Logistics",
        major: "EEE/4",
        URL: "portfolio/LOGS/Francisco Bryant.jpg",
      },
      {
        name: "Kezia Janet",
        position: "Logistics",
        major: "MSE/4",
        URL: "portfolio/LOGS/Kezia Janet.jpg",
      },
    ],
  },
  {
    portfolio: "PPIT",
    maincommittee: [
      {
        name: "Christopher Denny",
        position: "Publication & Publicity",
        URL: "portfolio/MC/Christopher Denny Prihadi.jpg",
        major: "EEE/Year 4",
      },
      {
        name: "Hans Aldi Christian",
        position: "Publication & Publicity",
        URL: "portfolio/MC/Hans Aldi Christian.jpg",
        major: "EEE/Year 3",
      },
      {
        name: "Valencia Sendytio",
        position: "Publication & Publicity",
        URL: "portfolio/MC/Valencia Sendytio.jpg",
        major: "WKW/Year 4",
      },
      {
        name: "Jason Nathaniel",
        position: "Information Technology",
        URL: "portfolio/MC/Jason Nathaniel.jpg",
        major: "EEE/Year 4",
      },
    ],
    subcommittee: [
      {
        name: "Daren Nathaniel Janto",
        position: "PPIT",
        major: "CS/2",
        URL: "portfolio/PPIT/Daren Nathaniel Janto.jpg",
      },
      {
        name: "Edward Steven Wongso",
        position: "PPIT",
        major: "EEE/2",
        URL: "portfolio/PPIT/Edward Steven Wongso.jpg",
      },
      {
        name: "Hansen Lienardi",
        position: "PPIT",
        major: "EEE/2",
        URL: "portfolio/PPIT/Hansen Lienardi.jpg",
      },
      {
        name: "Juan Samuel Sugianto",
        position: "PPIT",
        major: "CS/2",
        URL: "portfolio/PPIT/Juan Samuel Sugianto.jpg",
      },
      {
        name: "Justin Ferdinand Pradinatay",
        position: "PPIT",
        major: "MAE/3",
        URL: "portfolio/PPIT/Justin Ferdinand Pradinatay.jpg",
      },
      {
        name: "Rivaldo Billy Sebastian",
        position: "PPIT",
        major: "MAS/2",
        URL: "portfolio/PPIT/Rivaldo Billy Sebastian.jpg",
      },
      {
        name: "Theo Felix Kurniawan",
        position: "PPIT",
        major: "CBE/2",
        URL: "portfolio/PPIT/Theo Felix Kurniawan.jpg",
      },
      {
        name: "Sylvia Deborah",
        position: "PPIT",
        major: "EEE/2",
        URL: "portfolio/PPIT/Sylvia Deborah.jpg",
      },
      {
        name: "Victor Lim",
        position: "PPIT",
        major: "EEE/2",
        URL: "portfolio/PPIT/Victor Lim.jpg",
      },
      {
        name: "Abhirama Radhitya Santoso",
        position: "PPIT",
        major: "CEE/3",
        URL: "portfolio/PPIT/Abhirama Radhitya Santoso.jpg",
      },
      {
        name: "Alvon Gunawan",
        position: "PPIT",
        major: "EEE/3",
        URL: "portfolio/PPIT/Alvon Gunawan.jpg",
      },
      {
        name: "Ferlita Halim",
        position: "PPIT",
        major: "CS/3",
        URL: "portfolio/PPIT/Ferlita Halim.jpg",
      },
      {
        name: "Jessika Nadia Hartanto",
        position: "PPIT",
        major: "ADM/3",
        URL: "portfolio/PPIT/Jessika Nadia Hartanto.jpg",
      },
      {
        name: "Wilhelmus Adi Prawira Pangestu",
        position: "PPIT",
        major: "MSE/3",
        URL: "portfolio/PPIT/Wilhelmus Adi Prawira Pangestu.jpg",
      },
      {
        name: "Gabrian Christopher",
        position: "PPIT",
        major: "EEE/4",
        URL: "portfolio/PPIT/Gabrian Christopher.jpg",
      },
      {
        name: "Jessica Widjaja",
        position: "PPIT",
        major: "CBE/4",
        URL: "portfolio/PPIT/Jessica Widjaja.jpg",
      },
      {
        name: "Justin Trisno",
        position: "PPIT",
        major: "EEE/4",
        URL: "portfolio/PPIT/Justin Trisno.jpg",
      },
      {
        name: "Noah Winston",
        position: "PPIT",
        major: "EEE/4",
        URL: "portfolio/PPIT/Noah Winston.jpg",
      },
    ],
  },
  {
    portfolio: "Welfare",
    maincommittee: [
      {
        name: "Michael Hans",
        position: "Welfare Main Committee",
        URL: "portfolio/MC/Michael Hans.jpg",
        major: "EEE/Year 3",
      },
      {
        name: "Dzakiy Farid Fadhila",
        position: "Welfare Main Committee",
        URL: "portfolio/MC/Dzakiy Farid Fadhila.jpg",
        major: "MAE/Year 3",
      },
      {
        name: "Janet Widianto",
        position: "Welfare Main Committee",
        URL: "portfolio/MC/Janet Widianto.jpg",
        major: "MSE/Year 3",
      },
    ],
    subcommittee: [
      {
        name: "Immanuel Yehuda",
        position: "Welfare Main Committee",
        major: "NBS/3",
        URL: "portfolio/Welfare/Immanuel Yehuda.jpg",
      },
      {
        name: "Fernando",
        position: "Welfare Main Committee",
        major: "EESS/2",
        URL: "portfolio/Welfare/Fernando.jpg",
      },
      {
        name: "Jessica Vania Gospel",
        position: "Welfare Main Committee",
        major: "CEE/2",
        URL: "portfolio/Welfare/Jessica Vania Gospel.jpg",
      },
      {
        name: "Kathy Sophia Kristianty",
        position: "Welfare Main Committee",
        major: "BIE/2",
        URL: "portfolio/Welfare/Kathy Sophia Kristianty.jpg",
      },
      {
        name: "Jessica Chandra",
        position: "Welfare Main Committee",
        major: "CEE/2",
        URL: "portfolio/Welfare/Jessica Chandra.jpg",
      },
      {
        name: "Jimmy Rivallo",
        position: "Welfare Main Committee",
        major: "CBE/2",
        URL: "portfolio/Welfare/Jimmy Rivallo.jpg",
      },
      {
        name: "Richardson",
        position: "Welfare Main Committee",
        major: "IEM/4",
        URL: "portfolio/Welfare/Richardson.jpg",
      },
      {
        name: "Hugo Sebastian Gouw",
        position: "Welfare Main Committee",
        major: "EEE/2",
        URL: "portfolio/Welfare/Hugo Sebastian Gouw.jpg",
      },
      {
        name: "Naufal Ragitya Daniswara",
        position: "Welfare Main Committee",
        major: "MSE/2",
        URL: "portfolio/Welfare/Naufal Ragitya Daniswara.jpg",
      },
      {
        name: "Celine Prawiro",
        position: "Welfare Main Committee",
        major: "MSE/4",
        URL: "portfolio/Welfare/Celine Prawiro.jpg",
      },
      {
        name: "Dihan Jannatan Mutaalim",
        position: "Welfare Main Committee",
        major: "MAE/2",
        URL: "portfolio/Welfare/Dihan Jannatan Mutaalim.jpg",
      },
      {
        name: "Andrew Imanuel",
        position: "Welfare Main Committee",
        major: "NBS/3",
        URL: "portfolio/Welfare/Andrew Imanuel.jpg",
      },
      {
        name: "Hagata Raguel Jehoshua",
        position: "Welfare Main Committee",
        major: "MSE/3",
        URL: "portfolio/Welfare/Hagata Raguel Jehoshua.jpg",
      },
      {
        name: "Melina Novalia Jontera Lius",
        position: "Welfare Main Committee",
        major: "MSE/3",
        URL: "portfolio/Welfare/Melina Novalia Jontera Lius.jpg",
      },
      {
        name: "Jason Jovi Brata",
        position: "Welfare Main Committee",
        major: "MSE/4",
        URL: "portfolio/Welfare/Jason Jovi Brata.jpg",
      },
      {
        name: "David Alexander Yosal",
        position: "Welfare Main Committee",
        major: "NBS/2",
        URL: "portfolio/Welfare/David Alexander Yosal.jpg",
      },
      {
        name: "Sharon Gautama",
        position: "Welfare Main Committee",
        major: "CBE/4",
        URL: "portfolio/Welfare/Sharon Gautama.jpg",
      },
    ],
  },
  {
    portfolio: "Group Leader",
    maincommittee: [
      {
        name: "Theodora Lynn",
        position: "Chief Group Leader",
        URL: "portfolio/MC/Theodora Lynn.jpg",
        major: "MSE/Year 3",
      },
      {
        name: "Kenny Lo",
        position: "Chief Group Leader",
        URL: "portfolio/MC/Kenny Lo.jpg",
        major: "MSE/Year 3",
      },
    ],
    subcommittee: [
      {
        name: "Irfan Enkisra",
        position: "Group Leader",
        major: "CEE/3",
        URL: "portfolio/GL/Irfan Enkisra.jpg",
      },
      {
        name: "Kennard Hans Widjaja",
        position: "Group Leader",
        major: "EEE/2",
        URL: "portfolio/GL/Kennard Hans Widjaja.jpg",
      },
      {
        name: "Felicia Angelina Halim",
        position: "Group Leader",
        major: "NBS/2",
        URL: "portfolio/GL/Felicia Angelina Halim.jpg",
      },
      {
        name: "Gabriella Angelina Lim",
        position: "Group Leader",
        major: "NBS/2",
        URL: "portfolio/GL/Gabriella Angelina Lim.jpg",
      },
      {
        name: "John Nicholas Suharjono",
        position: "Group Leader",
        major: "EEE/2",
        URL: "portfolio/GL/John Nicholas Suharjono.jpg",
      },
      {
        name: "Kenzhi Iskandar Wong",
        position: "Group Leader",
        major: "MAE/2",
        URL: "portfolio/GL/Kenzhi Iskandar Wong.jpg",
      },
      {
        name: "Jocelyn Valencia Yoswara",
        position: "Group Leader",
        major: "IEM/2",
        URL: "portfolio/GL/Jocelyn Valencia Yoswara.jpg",
      },
      {
        name: "Valencia Lie",
        position: "Group Leader",
        major: "DSAI/2",
        URL: "portfolio/GL/Valencia Lie.jpg",
      },
      {
        name: "Arvin Jaya",
        position: "Group Leader",
        major: "CEE/2",
        URL: "portfolio/GL/Arvin Jaya.jpg",
      },
      {
        name: "Alvin Putera Budiman",
        position: "Group Leader",
        major: "EEE/2",
        URL: "portfolio/GL/Alvin Putera Budiman.jpg",
      },
      {
        name: "Vivian Widjaja",
        position: "Group Leader",
        major: "IEM/3",
        URL: "portfolio/GL/Vivian Widjaja.jpg",
      },
      {
        name: "Christopher Arif Setiadharma",
        position: "Group Leader",
        major: "CE/2",
        URL: "portfolio/GL/Christopher Arif Setiadharma.jpg",
      },
    ],
  },
  {
    portfolio: "BFM",
    maincommittee: [
      {
        name: "Shellia Oktavina",
        position: "BFM Main Committee",
        URL: "portfolio/MC/Shellia Oktavina.jpg",
        major: "SBS/Year 3",
      },
      {
        name: "Hagan Hototo Barus",
        position: "BFM Main Committee",
        URL: "portfolio/MC/Hagan Hototo Barus.jpg",
        major: "NBS/Year 2",
      },
      {
        name: "Winnie Faustinelie",
        position: "BFM Main Committee",
        URL: "portfolio/MC/Winnie Faustinelie.jpg",
        major: "CBE/Year 4",
      },
      {
        name: "Timothy William Delin",
        position: "BFM Main Committee",
        URL: "portfolio/MC/Timothy William Delin.jpg",
        major: "MSE/Year 3",
      },
    ],
    subcommittee: [
      {
        name: "Kevin Lius",
        position: "BFM",
        major: "CEE/3",
        URL: "portfolio/BFM/Kevin Lius.jpg",
      },
      {
        name: "Ryan Kent Tanadi",
        position: "BFM",
        major: "CS/2",
        URL: "portfolio/BFM/Ryan Kent Tanadi.jpg",
      },
      {
        name: "Leonard Darmawan",
        position: "BFM",
        major: "CBE/2",
        URL: "portfolio/BFM/Leonard Darmawan.jpg",
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
        URL: "portfolio/BFM/Karen Prasetio.jpg",
      },
      {
        name: "Devin Edward",
        position: "BFM",
        major: "CBC/4",
        URL: "portfolio/BFM/Devin Edward.jpg",
      },
      {
        name: "Julius Daniel Sarwono",
        position: "BFM",
        major: "NBS/3",
        URL: "portfolio/BFM/Julius Daniel Sarwono.jpg",
      },
      {
        name: "Agnes Melia",
        position: "BFM",
        major: "MAS/4",
        URL: "portfolio/BFM/Agnes Melia.jpg",
      },
      {
        name: "Darrens Sanders Tanuwidjaja",
        position: "BFM",
        major: "MAE/2",
        URL: "portfolio/BFM/Darrens Sanders Tanuwidjaja.jpg",
      },
      {
        name: "Hans Farrell Soegeng",
        position: "BFM",
        major: "MAS/2",
        URL: "portfolio/BFM/Hans Farrell Soegeng.jpg",
      },
      {
        name: "Marvin Winson",
        position: "BFM",
        major: "CE/4",
        URL: "portfolio/BFM/Marvin Winson.jpg",
      },
      {
        name: "Rachel Emmanuelle Raphael",
        position: "BFM",
        major: "MSE/2",
        URL: "portfolio/BFM/Rachel Emmanuelle Raphael.jpg",
      },
      {
        name: "Ruby Clarissa Sutopo",
        position: "BFM",
        major: "BS/2",
        URL: "portfolio/BFM/Ruby Clarissa Sutopo.jpg",
      },
      {
        name: "Vincent",
        position: "BFM",
        major: "MSE/4",
        URL: "portfolio/BFM/Vincent.jpg",
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
        <Container
          className={classes.container}
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <Text component="div" className={classes.GTD}>
            GTD XXIII: RESURGENCE
          </Text>
          <div className={classes.logo} />
        </Container>
      </div>
      <div id="portfolio" />
      <div className={classes.headerWrapper} style={{ marginTop: 120 }}>
        <div
          style={{ backgroundColor: colors.cream, width: "100%", height: 2 }}
        />
        <Text component="div" className={classes.headerTitle}>
          Top Management
        </Text>
        <div
          style={{
            backgroundColor: colors.cream,
            width: "100%",
            height: 2,
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InfoCard
          name="Kelvin Leo"
          position="President"
          major="MSE/Year 4"
          URL="portfolio/MC/Kelvin Leo.jpg"
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
          URL="portfolio/MC/Nicholas Eric Geraldo.jpg"
        />
        <InfoCard
          name="Matthew Stanley"
          position="VP PPIT-Welfare"
          major="EEE/Year 4"
          URL="portfolio/MC/Stanley Qiu.jpg"
        />
        <InfoCard
          name="Edward Siman"
          position="VP GL-BFM"
          major="CBE/Year 4"
          URL="portfolio/MC/Edward Siman.jpg"
        />
      </div>
      {/* portfolio section */}

      <div className={classes.portfolioSelect} style={{ marginTop: 90 }}>
        <Text className={classes.porfolioText}>
          {portfolios[page].portfolio}
        </Text>
      </div>
      <header className={classes.headerWrapper}>
        <div
          style={{ backgroundColor: colors.cream, width: "100%", height: 2 }}
        />
        <Text className={classes.headerTitle}>Main Committee</Text>
        <div
          style={{ backgroundColor: colors.cream, width: "100%", height: 2 }}
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
      <header className={classes.headerWrapper} style={{ marginTop: 120 }}>
        <div
          style={{ backgroundColor: colors.cream, width: "100%", height: 2 }}
        />
        <Text component="div" className={classes.headerTitle}>
          Subcommittee
        </Text>
        <div
          style={{ backgroundColor: colors.cream, width: "100%", height: 2 }}
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
    backgroundColor: colors.black2,
    boxSizing: "border-box",
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(2),
    width: "100%",
    boxSizing: "border-box",
    paddingLeft: 60,
    paddingRight: 60,
  },
  headerTitle: {
    backgroundColor: colors.black2,
    fontSize: 48,
    minWidth: "max-content",
    fontWeight: "700",
    textAlign: "center",
    paddingTop: 30,
    color: colors.white,
    paddingBottom: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },
  porfolioText: {
    fontSize: 66,
    fontWeight: "700",
    textAlign: "center",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "36pt",
    },
  },
  content: {
    backgroundColor: colors.black2,
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
    backgroundColor: colors.black2,
    fontSize: 66,
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
    padding: "10%",
    paddingTop: 40,
    paddingBottom: 40,
    boxSizing: "border-box",
    justifyContent: "center",
    width: "100%",
    gap: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      padding: 40,
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
  logo: {
    marginTop: 40,
    width: "25vw",
    height: "25vw",
    minWidth: 200,
    minHeight: 200,
    borderRadius: "50%",
    background: 'url("logo.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: `${colors.gray} 0px 10px 20px -5px, ${colors.gray} 0px 8px 16px -8px`,
    transition: "ease-out 0.2s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.01)",
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
      width: "20%",
      maxWidth: 200,
    },
  },
}));
