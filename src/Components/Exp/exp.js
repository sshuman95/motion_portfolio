import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import coding from "../../coding.svg";
import { motion } from "framer-motion";
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
  paper:{
      borderRadius:"5px",
      minHeight:"80vh",
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:'space-between',
      width:"100%",
      textAlign:"left",
      boxShadow:"0px 0px 25px 0px rgba(243,210,80,1)",
      '@media (min-width: 780px)' : {
        marginTop:"0",
        width:"60%"
      }
  },
  paper_two:{
    borderRadius:"5px",
    marginTop:"25px",
    minHeight:"80vh",
    display:"flex",
    alignItems:"flex-start",
    flexDirection:"column",
    width:"100%",
    boxShadow:"0px 0px 25px 0px rgba(243,210,80,1)",
    '@media (min-width: 780px)' : {
        marginTop:"0",
        width:"30%"
        
      }
},
  about:{
     width:"80%",
     position:"relative",
     paddingBottom:"0px",
     zIndex:1,
     display:"flex",
     flexDirection:"column",
     justifyContent:"space-between",
     marginTop:"25px",
     alignItems:"center",
     '@media (min-width: 780px)' : {
        flexDirection:"row",
        alignItems:"stretch"
        
      }
  },
  coding:{
      width:"100%"
  },
  faq:{
    color:"#2F2E41",
    fontWeight:"bold",
    marginTop:"15px",
    padding:"0px 25px"
},
  skills:{
    color:"#2F2E41",
    fontWeight:"bold",
    marginTop:"15px",
    padding:"15px"
  },
  section:{
    marginTop:"0px",
    padding:"10px 45px",
  },
  title:{
      background:"#F3D250",
      borderTopLeftRadius:"5px",
      borderTopRightRadius:"5px",
      paddingLeft:"10px",
      paddingBottom:"0",
      margin:"0"
  },
  pg:{
      padding:"0px 15px",
      marginTop:"0",
      marginBottom:"0",
      color:"#2F2E41"
  },
  article:{
      width:"100%",
      margin:"3% auto"
  },
  container:{
    border: "1px solid #F3D250",
    paddingTop:"10px",
    paddingBottom:"10px"
  },
  divider:{
      margin:"10px 0"
  }
})

const About = ()=>{
    const classes = useStyles();
    return(
        <Paper elavation={3} className={classes.paper}>
            <article className={classes.article}>
                <Typography variant="h4" className={classes.faq}>
                    About Me
                </Typography>
                <motion.div
                        whileHover={{ scale: 1.05 }}
                    >
                <section className={classes.section}>
                    <h3 className={classes.title}>Work History</h3>
                    <article className={classes.container}>
                    <p  style={{fontWeight:"bold"}} className={classes.pg}>CollectivTech</p>
                    <p className={classes.pg}>Production Specialist</p>
                    <p className={classes.pg}>2020 - Current</p>
                    <Divider className={classes.divider}/>
                    <p className={classes.pg} style={{fontWeight:"bold"}}>RND Interactive</p>
                    <p className={classes.pg}>Production Specialist</p>
                    <p className={classes.pg}>2019 - 2020</p>
                    <Divider className={classes.divider}/>
                    <p className={classes.pg} style={{fontWeight:"bold"}}>SLAIT Consulting</p>
                    <p className={classes.pg}>IT Project Coordinator</p>
                    <p className={classes.pg}>2018 - 2019</p>
                    </article>
                </section>
                </motion.div>
                <motion.div
                        whileHover={{ scale: 1.05 }}
                    >
                <section className={classes.section}>
                    <h3  className={classes.title}>Education</h3>
                    <article className={classes.container}>
                    <p className={classes.pg} style={{fontWeight:"bold"}}>Virginia Commonwealth University</p>
                    <p className={classes.pg}>Economics, Bachelor of Science (B.S.)</p>
                    <p className={classes.pg}>2014 - 2018</p>
                    <Divider className={classes.divider}/>
                    <p className={classes.pg} style={{fontWeight:"bold"}}>Codecademy</p>
                    <p className={classes.pg}>Web Development Path / Learn PHP / Data Science Path (Curernt)</p>
                    <p className={classes.pg}>2018 - Current</p>
                    </article>
                </section>
                </motion.div>
                <motion.div
                        whileHover={{ scale: 1.05 }}
                    >
                <section className={classes.section}>
                    <h3  className={classes.title}>Leisure</h3>
                    <article className={classes.container}>
                    <p className={classes.pg} style={{fontWeight:"bold"}}>Brazilian Jiu-Jitsu</p>
                    <p className={classes.pg}>Upstream BJJ</p>
                    <Divider className={classes.divider}/>
                    <p className={classes.pg} style={{fontWeight:"bold"}}>Coming Soon</p>
                    <p className={classes.pg}>Coming soon</p>
                    </article>
                </section>
                </motion.div>
            </article>
        </Paper>
    )
}

const Skills = ()=>{
    const classes = useStyles();
    return(
        <Paper elavation={3} className={classes.paper_two}>
            <img src={coding} className={classes.coding}/> 
            <Typography variant="h4" className={classes.skills}>Skills</Typography>
           
        </Paper>
    )
}

const Exp = () =>{
    const classes = useStyles();
    return (
      <section className={classes.about} id="about">
          <About/>
          <Skills/>
      </section>
    )
};

export default Exp;