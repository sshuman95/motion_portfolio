import React from "react";
import { motion } from "framer-motion"



const Splash = () =>{
    return (
        <motion.div
        initial={{ scale: 1 }}
        animate={{
          x: 0,
          y: 0,
          scale: 0,
          rotate: 0,
        }}
        transition={{
            delay: 3,
            duration: .8,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        className="splash_motion"
      >
          <motion.div 
            transition={{ ease: "easeIn", duration: 0.4 }}
            initial={{ y: 0}}
            animate={{ y: 100 }}
            >
          <h1 style={{color:"white"}}>Sidney Shuman</h1>
          </motion.div>
          <motion.div 
            transition={{ type:"spring", duration: 0.4,delay: .5, }}
            initial={{scale:0,y:0}}
            animate={{scale:1,y:110 }}
            >
          <h1 style={{color:"white"}}>Web Devloper</h1>
          </motion.div>
          
          </motion.div>
        
          
          
    )
};

export default Splash;