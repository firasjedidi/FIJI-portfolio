import React,{useEffect,useState,useRef} from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { Container, Grid, Paper,Typography,Box,Button, Hidden } from '@mui/material'
import projects from './api/projects'
import Image from 'next/image';

const wraper={ 
  padding:{
    xs:"4em 4em  0 4em ",
    sm:"5.5em 2em  0 2em ",
    md:"5.5em 5.5em  0 5.5em ",
    lg:"4.5em 6em  0 6em " 
  },
  
}
const wraper2={ 
  p:{
    xs:" 0.1em 1.5em",
    sm:"1em 0.5em",
    md:"1em 5em",
    lg:"2em 5em "
  },
 
}



const thecard={ 
  position: "relative",
  width:{ xs:"60%",sm:"100%",md:"100%",lg:"100%" },
  height: { xs:"9em",sm:"9em",md:"12em",lg:"14em" },
  margin:{xs:"0.5em",sm:"1em",md:"1em ",lg:"0.5em " },
  background:"  #0A1929" ,
  overflow:"hidden",
  border:"none",
  "&:hover .img":{
    transform: "scale(1) translateY(-20px)",
  },
  ".img":{
    transform: "scale(1.2)",
    transition: "all 0.3s ease-out",
    backgroundClip: "padding-box", 
  },
  "&:hover .description":{
    backgroundColor:"rgba(0,0,0,0.5)", 
    ".h6":{ 
      transform: "translateY(0px)",
      opacity: 1,

    },
    ".p":{
      transform: "translateY(0px)",
      opacity: 1,
    },
    ".iconbtn":{
      transform: "translateY(0px)",
      opacity: 1,
    },
    
  },
 
}
const thedescription={
    position: "sticky",
    width: "100%",
    height: "100%",
    Left: 0,
    bottom: 0,
    padding: { xs:"0.4em",sm:"0.5em",md:"2em",lg:"3em" },
    textAlign: "center",
    color:"white",
    ".h6":{
      fonWeight: 100,
      fontSize: "20px",
      margin:"5px 0 10px",
      transform:" transLateY(30px)" ,
      opacity: 0,
    
    },
    ".p":{
      transform: "transLlaTeyY( 30px)" ,
      opacity: 0,
      padding:"0.5em",
    },
    ".iconbtn":{
      backgroundColor:"rgba(37 ,99, 216)",
      color:"#fff",
      borderRadius: "0.3em",
      transform: "transLateY(30px)" ,
      opacity: 0,
      margin:"5px 0 10px",
   
    },
    
  } 


 const Projects = () => {
  const[projects,setprojects]=useState([]);
  const effectRan=useRef(false)
  const router=useRouter()
  const onClick=(id:string)=>{
    router.push( 
      { 
        pathname: "/Details",
        query: { id: id }
      }
    ) 
  }
  
  useEffect(()=>{
    if(!effectRan.current){
      var res=JSON.parse(localStorage.getItem("projects") || "") 
      setprojects(res)
    return()=>{
      effectRan.current=true
    }
  }
  },[])
  return (
    <section className={styles.section4} id="Projects" >
       <Box sx={wraper}  >
        <Typography variant='h6' 
          sx={{
            padding:
             {xs:"0.1em 0",sm:"0.5em 0"},
          }} >Projects</Typography>
          <Typography variant='h4'>What I&#39;ve Built</Typography>
      </Box>
      <Grid container  spacing={1} sx={wraper2} >
      {projects.map((project:any,id:number)=>(
          <Grid item display={'flex'}   justifyContent={"center"} md={4} sm={4} xs={12}   
          key={id} 
            >
            <Paper 
             sx={thecard}
            >
                <Image src={project.img[0]} className={"img"}    blurDataURL='true'  alt='developer'
                layout='responsive'  width="100%" height="100%"     />
             <Box  
             sx={thedescription}
              className={"description"} 
             >
                <Typography  className="h6" noWrap variant='h6'>{project.name}</Typography>
                <Typography className="p" noWrap >{project.intro}</Typography>
                <Button onClick={(e)=>onClick(project.name)}  className='iconbtn'>
                  read more
                </Button>
              </Box>
            </Paper>
          </Grid>
 

      ))}
   </Grid>
    
  </section>
  )
}
export default Projects;