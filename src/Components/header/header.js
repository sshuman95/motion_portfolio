import React from "react";
import { motion } from "framer-motion"
import "./nav.css";


const Navigation = () =>{
    return (
        <motion.div 
        transition={{ ease: "easeIn", duration: 0.4,delay:2}}
        initial={{ y: -50}}
        animate={{ y: 0 }}
        >
          <div className="container">
   
                <h1 style={{color:"white"}}>Sidney Shuman</h1>
               
          </div>
          </motion.div>  
    )
};

export default Navigation;