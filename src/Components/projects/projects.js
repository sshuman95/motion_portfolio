import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
     paper:{
         borderRadius:"5px",
     },
     projects:{
        gridColumn: "4/10",
        gridRow:"5/8"
     }
   });


 

const Projects = () =>{
    const classes = useStyles();
    return (
          <section className={classes.projects}>
              <Paper className={classes.paper}>
                    <h1>Hello</h1>
              </Paper>
          </section>
    )
};

export default Projects;