import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import coding from "../../coding.svg";
import { motion } from "framer-motion"

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
        flexDirection:"row"
        
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
      border:"1px solid #F3D250",
      marginTop:"0"
  },
  article:{
      width:"100%",
      margin:"5% auto"
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
                    <p className={classes.pg}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </section>
                </motion.div>
                <motion.div
                        whileHover={{ scale: 1.05 }}
                    >
                <section className={classes.section}>
                    <h3  className={classes.title}>Education</h3>
                    <p className={classes.pg}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </section>
                </motion.div>
                <motion.div
                        whileHover={{ scale: 1.05 }}
                    >
                <section className={classes.section}>
                    <h3  className={classes.title}>Leisure</h3>
                    <p className={classes.pg}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
      <section className={classes.about}>
          <About/>
          <Skills/>
      </section>
    )
};

export default Exp;