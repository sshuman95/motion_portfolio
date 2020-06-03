import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import "./about.css";
const useStyles = makeStyles({
   about: {
      width: '90%',
      alignSelf:"center",
     
      
    },
    paper:{
        borderRadius:"5px",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
    }
  });

const About = () =>{
    const classes = useStyles();
    return (
        <section className={classes.about}>
          <Paper className={classes.paper} elevation={3}>
            
            <Typography variant="h3"></Typography>
          </Paper>
          </section>
    )
};

export default About;