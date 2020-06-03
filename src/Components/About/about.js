import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import "./about.css";
const useStyles = makeStyles({
   about: {
      width: '100%',
      gridColumn:"4/10",
      gridRow:"1/8",
      height:"100%"
      
    },
    paper:{
        borderRadius:"5px",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    }
  });

const About = () =>{
    const classes = useStyles();
    return (
        <section className={classes.about}>
          <Paper className={classes.paper} elevation={3}>
            <Typography variant="h3">Sidney Shuman</Typography>
            <Typography>My name is Sidney Shuman. I am web developer located in Richmond, Virginia. I like to code things from scratch, and enjoy bringing ideas to life. Feel free to check out the projects I've worked on below.</Typography>
          </Paper>
          </section>
    )
};

export default About;