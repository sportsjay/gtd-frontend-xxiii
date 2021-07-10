import React, { useState } from "react";
import {
  makeStyles,
  Container,
  TextField,
  IconButton,
} from "@material-ui/core";

// import components
import { Text } from "../components/common/typography";
import { StyledButton } from "../components/common/button";

// import colors
import { colorPalette } from "../components/common/color-palette";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
const colors = new colorPalette();

const faqs = [
  {
    question: "Kapan GTD XXIII ini diadakan?",
    answer:
      "GTD XXIII akan diakan pada tanggal 7 sampai 8 Agustus 2021, tepat sebelum mahasiswa baru memulai minggu pertamanya berkuliah di NTU.\n Namun pada tanggal 18 Juli 2021, Komite GTD XXIII telah mempersiapkan acara 'pemanasan' untuk bekenalan dengan senior dan juga sesama mahasiswa baru.",
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
      "Selama 2 hari tersebut, kita akan berkenalan lebih dekat dengan senior-senior dan bermain berbagai games yang sudah persiapkan oleh komite GTD XXIII.",
  },
  {
    question:
      "Katanya orientasi mahasiswa baru di NTU harus bayar hingga puluhan dollar ya kak? Gimana cara daftarnya ya, kak?",
    answer: `Betul tapi, kalian tenang saja! GTD XXIII tidak memungut biaya sepeser-pun alias GRATIS!!! Yang diperlukan hanyalah semangat kalian selama acara berlangsung.\n Cara daftarnya cukup click
      <a href="https://tinyurl.com/DaftarGTDYuk">tinyurl.com/DaftarGTDYuk</a>. Periode pendaftaran dibuka dari tanggal 10 hingga 15 Juli 2021.`,
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
        <Text style={{ textOverflow: "ellipsis" }}>
          <b>Question:</b> <br />
          {question}
        </Text>
        <IconButton onClick={toggleDropDown}>
          {!dropDown ? <ExpandMore /> : <ExpandLess />}
        </IconButton>
      </div>
      {dropDown ? (
        <Text className={classes.answer} style={{ textOverflow: "ellipsis" }}>
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
  const [field, setField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  return (
    <div className={classes.root}>
      <Container className={classes.body}>
        <section className={classes.formWrapper}>
          <Text style={{ fontWeight: "600" }}>Contact Us</Text>
          <div className={classes.nameFieldWrapper}>
            <TextField
              variant="outlined"
              label="first name"
              value={field.firstName}
              onChange={(e) =>
                setField({ ...field, firstName: e.target.value })
              }
            />
            <TextField
              variant="outlined"
              label="last name"
              value={field.lastName}
              onChange={(e) => setField({ ...field, lastName: e.target.value })}
            />
          </div>
          <TextField
            variant="outlined"
            label="E-mail"
            value={field.email}
            onChange={(e) => setField({ ...field, email: e.target.value })}
          />
          <TextField
            variant="outlined"
            multiline
            rows={4}
            rowsMax={6}
            label="Message"
            value={field.message}
            onChange={(e) => setField({ ...field, message: e.target.value })}
          />
          <StyledButton style={{ width: "100%", maxWidth: "100%" }}>
            Submit
          </StyledButton>
        </section>
        <section className={classes.faqWrapper}>
          {faqs.map((faq) => (
            <FAQContainer answer={faq.answer} question={faq.question} />
          ))}
        </section>
      </Container>
    </div>
  );
}

const faqContainerStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxSizing: "border-box",
    paddingLeft: theme.spacing(4),
    borderLeft: `6px solid ${colors.red}`,
    backgroundColor: colors.gray,
    transition: "ease-out 0.2s",
    "&:hover": {
      transform: "scale(1.02)",
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
    backgroundColor: colors.black,
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
  formWrapper: {
    maxWidth: 600,
    width: "50%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.white,
    padding: theme.spacing(2),
    boxSizing: "border-box",
    gap: 10,
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      width: "100%",
    },
  },
  nameFieldWrapper: {
    display: "flex",
    gap: 10,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
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
