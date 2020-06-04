import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import "./about.css";
import mic from "../../mic.svg";
const useStyles = makeStyles({
  paper:{
      borderRadius:"5px",
      padding:"20px",
      minHeight:"45vh",
      flexDirection:"column-reverse",
      display:"flex",
      alignItems:"center",
      display:"flex",
      justifyContent:"space-evenly",
      boxShadow:"0px 0px 25px 0px rgba(243,210,80,1)",
      '@media (min-width: 780px)' : {
        flexDirection:"row",
      }
      
  },
  about:{
     width:"80%",
     position:"relative",
     marginTop:"0px",
     marginBottom:"15px",
     paddingBottom:"0px",
     zIndex:1,

    
  },
  mic:{
    width:"50%",
    '@media (min-width: 780px)' : {
      width:"20%"
    }
  },
  aboutInfo:{
    display:'flex',
    flexDirection:"column"
  },
  typography:{
    color:"#2F2E41",
    '@media (min-width: 780px)' : {
      fontSize:"2em",
    }
  }
});

const About = () =>{
    const classes = useStyles();
    return (
      <section className={classes.about}>
      <Paper elavation={3} className={classes.paper}>
        <div className={classes.aboutInfo}>
            <Typography variant="h5" className={classes.typography}>Hello, my name is Sidney.</Typography>
            <Typography variant="h5" className={classes.typography}>I'm a Web Developer Living in Richmond, VA</Typography>
        </div>
           <img src={mic} className={classes.mic}/>
      </Paper>
  </section>
    )
};

export default About;