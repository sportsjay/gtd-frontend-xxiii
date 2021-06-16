import React, {useState} from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';

const portList =['PPIT', 'POLOG', 'WELFARE'];
const pageList = ['page1', 'page2'];

const MainCom={
  PPIT:{
    one: {  
      nama: 'edward',
      posisi: 'PPIT',
      URLimg: 'gtd.png'
    },
    two: {
      nama: 'PPIT2',
      posisi: 'PPIT',
      URLimg: 'gtd.png'
    },
    three: {
      nama: 'PPIT3',
      posisi: 'PPIT',
      URLimg: 'gtd.png'
    },
  },
  POLOG:{
    one: {
      nama: 'POLOG1',
      posisi: 'POLOG',
      URLimg: 'gtd.png',
    },
    two: {
      nama: 'POLOG2',
      posisi: 'POLOG',
      URLimg: 'gtd.png',
    },
    three: {
      nama: 'POLOG3',
      posisi: 'POLOG',
      URLimg: 'gtd.png'
    },
  },
  WELFARE:{
    one: {
      nama: 'WELFARE1',
      posisi: 'WELFARE',
      URLimg: 'gtd.png',
    },
    two: {
      nama: 'WELFARE2',
      posisi: 'WELFARE',
      URLimg: 'gtd.png',
    },
    three: {
      nama: 'WELFARE3',
      posisi: 'WELFARE',
      URLimg: 'gtd.png'
    },
  }
}

const SubCom={
  PPIT:{
    page1:{
      one:{
        nama: 'PPIT1',
        posisi: 'subcom',
        URLimg: 'gtd.png'
      },
      two: {
        nama: 'PPIT2',
        posisi: 'subcom',
        URLimg: 'gtd.png',
      },
      three: {
        nama: 'PPIT3',
        posisi: 'subcom',
        URLimg: 'gtd.png'
      },
    },  
    page2:{
      one:{
        nama: 'PPIT4',
        posisi: 'subcom',
        URLimg: 'gtd.png'
      },
      two: {
        nama: 'PPIT5',
        posisi: 'subcom',
        URLimg: 'gtd.png',
      },
      three: {
        nama: 'PPIT6',
        posisi: 'subcom',
        URLimg: 'gtd.png'
      },
    },  
  },
    POLOG:{
    page1:{
      one: {
        nama: 'POLOG1',
        posisi: 'subcom',
        URLimg: 'gtd.png',
      },
      two: {
        nama: 'POLOG2',
        posisi: 'subcom',
        URLimg: 'gtd.png',
      },
      three: {
        nama: 'POLOG3',
        posisi: 'subcom',
        URLimg: 'gtd.png'
      },
    },
    page2:{
      one: {
        nama: 'POLOG4',
        posisi: 'subcom',
        URLimg: 'gtd.png',
      },
      two: {
        nama: 'POLOG5',
        posisi: 'subcom',
        URLimg: 'gtd.png',
      },
      three: {
        nama: 'POLOG6',
        posisi: 'subcom',
        URLimg: 'gtd.png'
      },
    }
    },
    WELFARE: {
    page1:{
      one: {
        nama: 'WELFARE1',
        posisi: 'subcom',
        URLimg: 'gtd.png',
      },
      two: {
        nama: 'WELFARE2',
        posisi: 'subcom',
        URLimg: 'gtd.png',
      },
      three: {
        nama: 'WELFARE3',
        posisi: 'subcom',
        URLimg: 'gtd.png'
      },
    },
    page2:{
      one: {
        nama: 'WELFARE4',
        posisi: 'subcom',
        URLimg: 'gtd.png',
      },
      two: {
        nama: 'WELFARE5',
        posisi: 'subcom',
        URLimg: 'gtd.png',
      },
      three: {
        nama: 'WELFARE6',
        posisi: 'subcom',
        URLimg: 'gtd.png'
      },
    }
  },
}

const colors = new colorPalette();

export default function AboutUsPage() {
  const classes = useStyles();
  const [currentPort, setCurrentPort] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevPortButton = () => {
    if(currentPort <= 0){
      setCurrentPort(currentPort + portList.length-1);
    }
    else{
      setCurrentPort(currentPort -1);
    }
  }

  const handleNextPortButton = () => {
    if(currentPort >= portList.length-1){
      setCurrentPort(currentPort - (portList.length-1));
    }
    else{
      setCurrentPort(currentPort + 1);
    }
  }

  const handlePrevPageButton = () => {
    if(currentPage <= 0){
      setCurrentPage(currentPage + pageList.length-1);
    }
    else{
      setCurrentPage(currentPage -1);
    }
  }
  
  const handleNextPageButton = () => {
    if(currentPage >= pageList.length-1){
      setCurrentPage(currentPage - (pageList.length-1));
    }
    else{
      setCurrentPage(currentPage + 1);
    }
  }

  const infoCard = (nama, posisi, URLimg) =>{
    return(
      <Container className={classes.imagebox}>
        <div style={{ position: "relative", top: "75px", left: "62px" }}></div>
        <div className={classes.whitebox}>
          <div className={classes.NameBox}>name</div>
          <div className={classes.NameText}>{nama}</div>
          <div className={classes.PosBox}>position</div>
          <div className={classes.PosText}>{posisi}</div>
        </div>
        <img
          src={URLimg}
          className={classes.photoImage}
          aria-hidden
          alt="No Image Resources"
        />
      </Container>
    );
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
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
      </Grid>
      <Grid item xs={12}>
        <Typography component="div" className={classes.headerTitle}>
          Top Management
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {infoCard('PINTU TOPS', 'TOPS', 'gtd.png')}
      </Grid>
      <Grid container spacing={3} style={{ marginTop: "50px" }}>
        <Grid item md={4} xs={12}>
        {infoCard('PINTU TOPS', 'TOPS', 'gtd.png')}
        </Grid>
        <Grid item md={4} xs={12}>
        {infoCard('PINTU TOPS', 'TOPS', 'gtd.png')}
        </Grid>
        <Grid item md={4} xs={12}>
        {infoCard('PINTU TOPS', 'TOPS', 'gtd.png')}
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.portfolioSelect}>
      <button onClick={handlePrevPortButton}>previous</button>
      <div component="div" className = {classes.TopManagementText}>
          {portList[currentPort]}
      </div>
      <button onClick={handleNextPortButton}>next</button>
      </Grid>
      <Typography component="div" className = {classes.TopManagementText}>
          Main Committee
      </Typography>
      <Grid container spacing={3} style={{ marginTop: "50px" }}>
        <Grid item md={4} xs={12}>
        {infoCard(MainCom[portList[currentPort]].one.nama, MainCom[portList[currentPort]].one.posisi, MainCom[portList[currentPort]].one.URLimg )}
        </Grid>
        <Grid item md={4} xs={12}>
        {infoCard(MainCom[portList[currentPort]].two.nama, MainCom[portList[currentPort]].two.posisi, MainCom[portList[currentPort]].two.URLimg )}
        </Grid>     
        <Grid item md={4} xs={12}>
        {infoCard(MainCom[portList[currentPort]].three.nama, MainCom[portList[currentPort]].three.posisi, MainCom[portList[currentPort]].three.URLimg )}
        </Grid>
      </Grid>
      <Typography component="div" className={classes.headerTitle}>
        Subcommittee
      </Typography>
      <Grid container spacing={3} style={{ marginTop: "50px" }}>
        <Grid item md={4} xs={12}>
        {infoCard(SubCom[portList[currentPort]][pageList[currentPage]].one.nama, SubCom[portList[currentPort]][pageList[currentPage]].one.posisi, SubCom[portList[currentPort]][pageList[currentPage]].one.URLimg )}
        </Grid>
        <Grid item md={4} xs={12}>
        {infoCard(SubCom[portList[currentPort]][pageList[currentPage]].two.nama, SubCom[portList[currentPort]][pageList[currentPage]].two.posisi, SubCom[portList[currentPort]][pageList[currentPage]].two.URLimg )}
        </Grid>     
        <Grid item md={4} xs={12}>
        {infoCard(SubCom[portList[currentPort]][pageList[currentPage]].three.nama, SubCom[portList[currentPort]][pageList[currentPage]].three.posisi, SubCom[portList[currentPort]][pageList[currentPage]].three.URLimg )}
        </Grid>
      </Grid> 
      <div className={classes.pageButton}>
        <button onClick={handlePrevPageButton}>previous</button>
        <button onClick={handleNextPageButton}>next</button>
      </div>   
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.black,
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
  },
  imagebox: {
    width: "250px",
    height: "300px",
    background: "#831515",
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",
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
  NameText: {
    position: 'absolute',
    width: '250px',
    left: '26.5px',
    textAlign: 'center',
    top: '105px',
  },
  PosText:{
    position: 'absolute',
    width: '250px',
    left: '26.5px',
    textAlign: 'center',
    top: '160px',
  },
  portfolioSelect:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageButton:{
    textAlign: 'center',
  }
}));
