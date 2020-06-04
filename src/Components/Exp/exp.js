import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import coding from "../../coding.svg";
const useStyles = makeStyles({
  paper:{
      borderRadius:"5px",
      minHeight:"80vh",
      display:"flex",
      alignItems:"center",
      width:"100%",
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
  skills:{
    color:"#2F2E41",
    fontWeight:"bold",
    marginTop:"15px",
    padding:"15px"
  }
})

const Test = ()=>{
    const classes = useStyles();
    return(
        <Paper elavation={3} className={classes.paper}>
            
         
        </Paper>
    )
}

const Skills = ()=>{
    const classes = useStyles();
    return(
        <Paper elavation={3} className={classes.paper_two}>
            <img src={coding} className={classes.coding}/> 
            <Typography variant="h3" className={classes.skills}>Skills</Typography>
        </Paper>
    )
}

const Exp = () =>{
    const classes = useStyles();
    return (
      <section className={classes.about}>
          <Test/>
          <Skills/>
      </section>
    )
};

export default Exp;