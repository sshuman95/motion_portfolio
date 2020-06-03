import React, {useState} from "react";
import { motion } from "framer-motion";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
     paper:{
         borderRadius:"5px",
         padding:"20px"
     },
     projects:{
        width:"90%",
        position:"relative",
        marginTop:"15px",
        paddingBottom:"15px",
        zIndex:1
     },
     motion_project:{
         display:"flex",
         flexDirection:"column",
         alignItems:"center",
         textAlign:"left"
     },
     project_image:{
         width:"80%",
        
     },
     inner_project:{
        display:"flex",
        flexDirection:"column",
        width:"80%"
    },
    project_buttons:{
        display:"flex",
        justifyContent:"space-evenly",
        marginTop:"15px"
    },
    button:{
        backgroundColor:"white",
        width:"15%",
        border:"1px solid black",
        borderRadius:"5px",
        height:"25px",
        '&:hover': {
            cursor:"pointer"
         }
    }
   });


   const project_list = [
    {
       name:"KJ Presley Designs",
       desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
       image:"https://sidneyshuman.com/static/media/kjp_image.cf0c3226.PNG"
    },
    {
       name:"Free Resume Builder",
       desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum",
       image:"https://sidneyshuman.com/static/media/ravenous.12b56866.PNG"
    },
    {
        name:"Bulldawg",
        desc:"Call me bulldawg",
        image:"https://sidneyshuman.com/static/media/ravenous.12b56866.PNG"
     }
]



const Projects = () =>{
    const classes = useStyles();
    const [project, setProject] = useState(0);
    const changeProject= () =>{
        if(project ===2 ){
            setProject(0)
        } else {
            let count = project+1;
            setProject(count);
        }
    }

    const prevProject= () =>{
        if(project ===0 ){
            setProject(2)
        } else {
            let count = project - 1;
            setProject(count);
        }
    }

    const Test = () =>{
        return(
            <div>
            <motion.div 
            className={classes.motion_project}
            initial={{x:-70}}
            animate={{ x:0}}
            transition={{ type: "spring", stiffness: 100}}>
               
                <img src={project_list[project].image} className={classes.project_image}/>
                <div  className={classes.inner_project}>
                <h1>{project_list[project].name}</h1> 
                <p>{project_list[project].desc} </p>
                </div>
            </motion.div>
            <div className={classes.project_buttons}>
            <button className={classes.button} onClick={prevProject}>Prev</button>
            <button className={classes.button} onClick={changeProject}>Next</button>
            </div>
            </div>
        )
    }
     
    return (
          <section className={classes.projects}>
              <Paper className={classes.paper}>
                    <Test/>
                   
              </Paper>
             
          </section>
    )
};

export default Projects;