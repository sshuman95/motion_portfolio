import React, {useState} from "react";
import { motion } from "framer-motion";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
     paper:{
         borderRadius:"5px",
         padding:"20px",
         minHeight:"90vh",
         display:"flex",
         alignItems:"center",
         boxShadow:"0px 0px 25px 0px rgba(243,210,80,1)"
     },
     projects:{
        width:"80%",
        position:"relative",
        marginTop:"50px",
        paddingBottom:"0px",
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
        marginTop:"15px",
        flexDirection:"column",
        alignItems:"center",
        '@media (min-width: 780px)' : {
            flexDirection:"row"
            
          }
    },
    button:{
        backgroundColor:"transparent",
        width:"12em",
        marginBottom:"15px",
        border:"1px solid black",
        borderRadius:"5px",
        height:"25px",
        '&:hover': {
            cursor:"pointer"
         }
    },
    pointer:{
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
    //State
    const classes = useStyles();
    const [project, setProject] = useState(0);
    const [next, setNext] = useState(1);
    const [prev, setPrev] = useState(2);

    //Functions
    const changeProject= () =>{
        if(project === (project_list.length - 1) ){
            setProject(0);
            setPrev(2);
            setNext(1)
        } else {
            let count = project+1;
            let nxt = count ===2?0:count+1;
            let prv = count >= 1 ? count -1 : 2;
            setProject(count);
           setNext(nxt);
           setPrev(prv);
        }
    }

    const prevProject= () =>{
        if(project ===0 ){
            setProject(project_list.length - 1);
            setPrev(1);
            setNext(0);
        } else {
            let count = project - 1;
            let nxt = count ===2?0:count+1;
            let prv = count >=1 ? count -1 : 2;
            setProject(count);
            setNext(nxt);
           setPrev(prv);
        }
    }


    //Components
    const Container = () =>{
        return(
            <div className={classes.pointer}>

            <motion.div 
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDrag={
                (event, info) => {
                    if(info.point.x>10){
                        changeProject();
                      
                    } else if(info.point.x<-10){
                        prevProject();
                        
                    }
                }
              
              }
            className={classes.motion_project}
            initial={{x:-30}}
            animate={{ x:0}}
            transition={{ type: "spring", stiffness: 100}}>
               
                <img alt={project_list[project].name} src={project_list[project].image} className={classes.project_image}/>
                <article  className={classes.inner_project}>
                <h1>{project_list[project].name}</h1> 
                <p>{project_list[project].desc} </p>
                </article>
            </motion.div>
            <div className={classes.project_buttons}>
            <button className={classes.button} onClick={prevProject}>{project_list[prev].name}</button>
            <button className={classes.button} onClick={changeProject}>{project_list[next].name}</button>
            </div>
            </div>
        )
    }
     
    return (
          <section className={classes.projects} id="projects">
              <Paper elavation={3} className={classes.paper}>
                    <Container/>
                   
              </Paper>
             
          </section>
    )
};

export default Projects;