import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"
import image from "../../lightbulb.svg";
import image2 from "../../yellowbulb.svg";


const Splash = () =>{
  const [source, setSource] = useState(image);
  
  
  function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }


  useInterval(() => {
    setSource(image2);
  }, 1100);


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
          delay: 1.8,
          duration: .8,
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="splash_motion"
      >
          <img src={source} className="lightbulb"/>
          <motion.div 
            transition={{ ease: "easeIn", duration: .5 }}
            initial={{ y: 0, opacity:0}}
            animate={{ y: 10, opacity:1}}
            className="splash_flex"
            >
          <h1 style={{color:"white"}}>Sidney Shuman</h1>
          </motion.div>
          <motion.div 
            transition={{ ease: "easeIn", duration: .5, delay:.5 }}
            initial={{ y: 0, opacity:0}}
            animate={{ y: 10, opacity:1}}
            className="splash_flex"
            >
          <h1 style={{color:"white"}}>Web Developer</h1>
          </motion.div>
          
          </motion.div>
          
    )
};

export default Splash;
