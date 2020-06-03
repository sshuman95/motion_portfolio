import React from "react";
import { motion } from "framer-motion"



const Projects = () =>{
    return (
        <motion.div 
        transition={{ ease: "easeIn", duration: .4, delay:2}}
        initial={{ y: 60, display:"none"}}
        animate={{ y: 10,display:"block" }}
        >
          <div style={{backgroundColor:"black", color:"white"}}>
   
                <h1 style={{color:"white"}}>Projects</h1>
               
          </div>
          </motion.div>  
    )
};

export default Projects;