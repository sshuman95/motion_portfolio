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
            delay: .9,
            duration: .8,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        className="splash_motion"
      >
          <motion.div 
            transition={{ ease: "easeIn", duration: 0.2 }}
            initial={{ y: 300, opacity:0}}
            animate={{ y: 300, opacity:1 }}
            >
          <img src="https://sidneyshuman.com/static/media/new_logo.ee76600a.png"/>
          <h1 style={{color:"white"}}>Web Developer</h1>
          </motion.div>
          
          </motion.div>
        
          
          
    )
};

export default Splash;

/*        <motion.div
        initial={{ scale: 1 }}
        animate={{
          x: 0,
          y: 0,
          scale: 0,
          rotate: 0,
        }}
        transition={{
            delay: 2,
            duration: .8,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        className="splash_motion"
      >
          <motion.div 
            transition={{ ease: "easeIn", duration: 0.4 }}
            initial={{ y: 200}}
            animate={{ y: 300 }}
            >
          <h1 style={{color:"white"}}>Sidney Shuman</h1>
          </motion.div>
          <motion.div 
            transition={{ type:"spring", duration: 0.4,delay: .4, }}
            initial={{scale:0,y:300}}
            animate={{scale:1,y:310 }}
            >
          <h1 style={{color:"white"}}>Web Developer</h1>
          </motion.div>
          
          </motion.div>
        
           */