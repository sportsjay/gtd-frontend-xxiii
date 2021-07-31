import React, { useState } from "react";
import { makeStyles, Container, IconButton } from "@material-ui/core";
// import components
import { Text } from "../components/common/typography";
import ContactUsForm from "../components/faq";

// import colors
import { colorPalette } from "../components/common/color-palette";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
const colors = new colorPalette();

const faqs = [
  {
    question: "Kapan GTD XXIII ini diadakan?",
    answer:
      "GTD XXIII akan diakan pada tanggal 7 sampai 9 Agustus 2021, tepat sebelum mahasiswa baru memulai minggu pertamanya berkuliah di NTU.\n Namun pada tanggal 18 Juli 2021, Komite GTD XXIII telah mempersiapkan acara 'pemanasan' untuk bekenalan dengan senior dan juga sesama mahasiswa baru.",
  },
  {
    question:
      "Aduh aku takut kena COVID! Tahun ini acaranya online/offline ya, kak?",
    answer:
      "Melihat kondisi yang belum memungkinkan, baik secara peraturan pemerintah maupun jumlah mahasiswa baru yang sudah ada di Singapura pada saat tanggal pelaksanaan, maka komite GTD XXIII memutuskan untuk mengadakan acara GTD XXIII secara online sepenuhnya.",
  },
  {
    question: "GTD bakal ngapain aja tuh, kak?",
    answer:
      "Selama 2 hari tersebut, kita akan berkenalan lebih dekat dengan senior-senior dan bermain berbagai games yang sudah dipersiapkan oleh komite GTD XXIII.",
  },
  {
    question:
      "Katanya orientasi mahasiswa baru di NTU harus bayar hingga puluhan dollar ya kak? Gimana cara daftarnya ya, kak?",
    answer: (
      <Text>
        Betul! Tapi, kalian tenang saja! GTD XXIII tidak memungut biaya
        sepeser-pun alias GRATIS!!! Yang diperlukan hanyalah semangat kalian
        selama acara berlangsung.{`\n`}
      </Text>
    ),
  },
  {
    question: "Kalo aku ada pertanyaan lain, harus tanya siapa ya, kak?",
    answer:
      "Kamu bisa langsung mencari kakak senior yang bernama Kelvin Leo dan Edward Siman yang sudah tergabung didalam grup Telegram 'PINTU Freshie 2021'.",
  },
];

function FAQContainer(props) {
  const classes = faqContainerStyles();
  const [dropDown, setDropDown] = useState(false);
  const question = props.question;
  const answer = props.answer;

  function toggleDropDown() {
    setDropDown(!dropDown);
  }

  return (
    <div className={classes.root} onClick={toggleDropDown}>
      <div className={classes.question}>
        <Text style={{ textOverflow: "ellipsis", color: colors.white }}>
          <b>Question:</b> <br />
          {question}
        </Text>
        <IconButton onClick={toggleDropDown}>
          {!dropDown ? (
            <ExpandMore style={{ color: colors.white }} />
          ) : (
            <ExpandLess style={{ color: colors.white }} />
          )}
        </IconButton>
      </div>
      {dropDown ? (
        <Text
          className={classes.answer}
          style={{ textOverflow: "ellipsis", color: colors.white }}
        >
          <b>Answer:</b> <br />
          {answer}
        </Text>
      ) : (
        <></>
      )}
    </div>
  );
}
FAQContainer.defaultProps = {
  question:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nihil voluptatem voluptatibus eum tenetur nulla quasi autem iure nemo. Laboriosam numquam eveniet aut, distinctio iure nemo amet illo porro et.",
  answer: "answer template",
};

export default function FAQPage() {
  const classes = rootPageStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.body}>
        <ContactUsForm />
        <section className={classes.faqWrapper}>
          {faqs.map((faq) => (
            <FAQContainer
              answer={faq.answer}
              question={faq.question}
              isLinked={faq.isLinked}
            />
          ))}
        </section>
      </Container>
    </div>
  );
}

const faqContainerStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: 10,
    boxSizing: "border-box",
    paddingLeft: theme.spacing(4),
    borderLeft: `6px solid ${colors.red}`,
    backgroundColor: colors.black2,
    transition: "ease-out 0.2s",
    cursor: "pointer",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "&:hover": {
      transform: "scale(1.014)",
    },
  },
  question: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    padding: theme.spacing(2),
    paddingLeft: 0,
  },
  answer: {
    boxSizing: "border-box",
    padding: theme.spacing(2),
    paddingLeft: 0,
    width: "100%",
  },
}));
const rootPageStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: "100%",
    minHeight: "calc(100vh - 32px)",
    backgroundColor: colors.black2,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
  },
  body: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.cream,
    alignItems: "center",
    minHeight: "max-content",
    boxSizing: "border-box",
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      height: "max-content",
      width: "100%",
    },
  },
  faqWrapper: {
    width: "50%",
    height: "100%",
    boxSizing: "border-box",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      width: "100%",
    },
  },
}));
