import React, {useState} from "react";
import { motion } from "framer-motion";
import { makeStyles } from '@material-ui/core/styles';
import kjp from "../../Images/kjp.png";
import resume from "../../Images/resume.PNG";
import ravenous from "../../Images/ravenous.png";
import home from "../../Images/home.PNG";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
     paper:{
         borderRadius:"5px",
         padding:"20px",
         minHeight:"72vh",
         '@media (min-width: 780px)' : {
            minHeight:"60vh",
             
           },
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
         textAlign:"left",
         '@media (min-width: 780px)' : {
            flexDirection:"row",
            width:"100%",
            justifyContent:"space-evenly"
          }
     },
     project_image:{
         width:"80%",
         '@media (min-width: 780px)' : {
           width:"45%"
            
          }
        
     },
     inner_project:{
        display:"flex",
        flexDirection:"column",
        width:"80%",
        '@media (min-width: 780px)' : {
            width:"45%"
             
           }
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
         },
         display:"flex",
         flexDirection:"column",
         '@media (min-width: 780px)' : {
            width:"100%"
            
          }
    },
    links:{
        display:'flex',
        marginBlockStart: "1em",
        marginBlockEnd:'0em',
        marginInlineStart: 0,
        marginInlineEnd: 0,
    },
    title:{
        color:"#2F2E41",
        fontWeight:"bold",
        marginTop:"15px",
        padding:"0px 25px",
        alignSelf:"flex-start"
    },
   });


   const project_list = [
    {
       name:"KJ Presley Designs",
       desc:"This site was built using React, Firebase, and Stripe. The owner can easily update their store through their own custom admin portal. Buyers can customize their cart and pay securely with Stripe. Users can also upload an image and submit a custom design.",
       image:kjp,
       live:"https://www.kjpresleydesigns.com/",
       github:"https://github.com/sshuman95/kjpresleydesigns"
    },
    {
       name:"Free Resume Builder",
       desc:"This app was built using React and Firebase. Users can create a resume without singing and will be able to save it as a PDF. If a user decides that they want to be able to edit their resume later, they can sign up and firebase will create both a user and document containing that users resume.",
       image:resume,
       live:"https://free-resume-builder.web.app/",
       github:"https://github.com/sshuman95/resumeBuilder"
    },
    {
        name:"Home History",
        desc:"The goal of this app is to give users more insight into the history of their home. Using React and Firebase users can submit the latest projects done on their homes. Users can then query this data to get information about a possible purchase or help on a DIY.",
        image:home,
        live:"https://homehistory.org/",
        github:"https://github.com/sshuman95/homehistory"
     },
    {
        name:"Ravenous",
        desc:"Using the Yelp API this app finds restuarants based on the user's search. This app can use multiple search parameters, such as 'Best Match', 'Highest Rated', or 'Most Reviewed'. The JSON data is then mapped to create an eye catching design.",
        image:ravenous,
        live:"https://wrong-cherries.surge.sh/",
        github:"https://github.com/sshuman95/ravenous"
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
            setPrev(3);
            setNext(1)
        } else {
            let count = project+1;
            let nxt = count ===3?0:count+1;
            let prv = count >= 1 ? count -1 : 3;
            setProject(count);
           setNext(nxt);
           setPrev(prv);
        }
    }

    const prevProject= () =>{
        if(project ===0 ){
            setProject(project_list.length - 1);
            setPrev(2);
            setNext(0);
        } else {
            let count = project - 1;
            let nxt = count ===3?0:count+1;
            let prv = count >=1 ? count -1 : 3;
            setProject(count);
            setNext(nxt);
           setPrev(prv);
        }
    }


    //Components
    const Container = () =>{
        return(
            <div className={classes.pointer}>
           <Typography variant="h4" className={classes.title}>
                    Projects
                </Typography>
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
                <div className={classes.links}>
                    <a rel="noopener noreferrer" target="_blank" href={project_list[project].live} style={{marginRight:"10px"}}>Live</a>
                    <a rel="noopener noreferrer" target="_blank" href={project_list[project].github}>GitHub</a>
                </div>
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