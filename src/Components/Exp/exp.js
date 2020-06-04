import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  paper:{
      borderRadius:"5px",
      padding:"20px",
      minHeight:"90vh",
      display:"flex",
      alignItems:"center"
  },
  about:{
     width:"80%",
     position:"relative",
     marginTop:"0px",
     paddingBottom:"0px",
     zIndex:1,
    
  }
});

const Test = ()=>{
    return(
        <h1>Hello</h1>
    )
}

const Exp = () =>{
    const classes = useStyles();
    return (
      <section className={classes.about}>
      <Paper elavation={3} className={classes.paper}>
          <Test/>  
           
      </Paper>
  </section>
    )
};

export default Exp;