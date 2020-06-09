import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import "./about.css";
import app_pic from "../../Images/app_pic.svg";
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  paper:{
      borderRadius:"5px",
      padding:"20px",
      minHeight:"45vh",
      flexDirection:"column-reverse",
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
     marginBottom:"25px",
     paddingBottom:"0px",
     zIndex:1,

    
  },
  app_pic:{
    width:"70%",
    '@media (min-width: 780px)' : {
      width:"30%"
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
  },
  social:{
    display:"flex",
    justifyContent:"space-around",
    marginTop:"10px"
  }
});

const About = () =>{
    const classes = useStyles();
    return (
      <section className={classes.about}>
      <Paper elavation={3} className={classes.paper}>
        <div className={classes.aboutInfo}>
            <Typography variant="h5" className={classes.typography}>Hello, my name is Sidney.</Typography>
            <Typography variant="h5" className={classes.typography}>I'm a Web Developer living in Richmond, VA.</Typography>
           <div className={classes.social}>
              <Tooltip  disableFocusListener title="LinkedIn" aria-label="linkedin">
                <a href="https://www.linkedin.com/in/sidney-shuman-604966160/" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              </Tooltip>
              <Tooltip title="GitHub" aria-label="github">
                <a href="https://github.com/sshuman95" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg></a>
             </Tooltip>
             <Tooltip title="Download Resume" aria-label="resume">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm4.256 11h-12v-1h12v1zm0-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-3.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z"/></svg>
             </Tooltip>
           </div>
           </div>
           <img src={app_pic} className={classes.app_pic} alt="Mobile Friendly"/>
      </Paper>
  </section>
    )
};

export default About;