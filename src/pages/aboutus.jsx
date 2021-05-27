import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


export default function AboutUsPage() {
  const classes = useStyles();
  
  const infoCard = (nama, posisi, URLimg) =>{
    return(
      <Container className={classes.imagebox}>
          <div style={{position: 'relative', top: '75px', left: '62px'}}>         
          </div>
          <div className={classes.whitebox}>
            <div className={classes.NameBox}>
              name
            </div>
            <div className={classes.NameText}>
              {nama}
            </div>
            <div className={classes.PosBox}>
              position
            </div>
            <div className={classes.PosText}>
              {posisi}
            </div>
          </div>
          <img src={URLimg} className={classes.photoImage}/>
        </Container>
    );
  }
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
      <Container className = {classes.container}>
        <Typography component="div" className = {classes.GTD} >
          GTD XXIII
        </Typography>
        <Typography component="div" className = {classes.content} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Laoreet suspendisse interdum consectetur libero id faucibus. 
          Cursus risus at ultrices mi tempus imperdiet. Ut sem viverra aliquet eget sit amet tellus. 
        </Typography>
      </Container>
      </Grid>
      <Grid item xs={12}>
      <Typography component="div" className = {classes.TopManagementText}>
          Top Management
      </Typography>
      </Grid>
      <Grid item xs={12}>
        {infoCard("edward", "IT", "gtd.png")}
      </Grid>
      <Grid container spacing={3} style={{marginTop:'50px'}}>
        <Grid item md={4} xs={12}>
        {infoCard()}
        </Grid>
        <Grid item md={4} xs={12}>
        {infoCard()}
        </Grid>
        <Grid item md={4} xs={12}>
        {infoCard()}
        </Grid>
      </Grid>
      <Typography component="div" className = {classes.TopManagementText}>
          Main Committee
      </Typography>
      <Grid container spacing={3} style={{marginTop:'50px'}}>
        <Grid item md={4} xs={12}>
        {infoCard()}
        </Grid>
        <Grid item md={4} xs={12}>
        {infoCard()}
        </Grid>     
        <Grid item md={4} xs={12}>
        {infoCard()}
        </Grid>
      </Grid>    
      <Typography component="div" className = {classes.TopManagementText}>
          Subcommittee
      </Typography>
      <Grid container spacing={3} style={{marginTop:'50px'}}>
        <Grid item md={4} xs={12}>
        {infoCard()}
        </Grid>
        <Grid item md={4} xs={12}>
        {infoCard()}
        </Grid>     
        <Grid item md={4} xs={12}>
        {infoCard()}
        </Grid>
      </Grid>    
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    height: '100%',
    backgroundColor: '#212121',
  },

  TopManagementText : {
    backgroundColor: '#212121', 
    fontSize: '48px', 
    textAlign : 'center', 
    paddingTop: '50px',
    color: 'white',
    paddingBottom: '30px',
  },
  content: {
    backgroundColor: '#212121', 
    paddingTop: '10px', 
    paddingLeft: '40px',
    paddingRight: '40px',
    textAlign: 'center',
    color: 'white',
  },
  GTD: {
    backgroundColor: '#212121', 
    fontSize: '48px', 
    textAlign : 'center', 
    marginTop: '10px', 
    paddingTop: '10px',
    color: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imagebox: {
    width: '250px',
    height: '300px',
    background: '#831515',
    borderRadius: '20px',
    overflow: 'hidden',
    position: 'relative',
  },

  whitebox: {
    position: 'relative',
    backgroundColor: '#F8F2E5',
    top: '100px',
    left: '-50px',
    width: '300px',
    height: '300px'
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  photoImage: {
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: '50%',
    top: '-270px',
    left: '27px',
    width: '140px',
    height: '140px',
    border: '5px solid #F8F2E5'
  },
  NameBox:{
    position: 'absolute',
    width: '250px',
    left: '26.5px',
    top: '80px',
    fontSize: '24px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    alignItems: 'center',
    textAlign: 'center',
  },
  PosBox:{
    position: 'absolute',
    width: '250px',
    left: '26.5px',
    top: '135px',
    fontSize: '24px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    alignItems: 'center',
    textAlign: 'center',
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
}));
