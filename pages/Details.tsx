import React ,{useEffect, useState,useCallback}from 'react'
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
import projects from './api/projects'
import { Box,Typography,Grid,IconButton, Paper} from '@mui/material';
import Image from 'next/image';
import  NavBar  from './NavBar';
import { MdOutlineOpenInNew } from "react-icons/md";

const slide={
  ".slide":{
    position:"absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    transform: "translateX(-50%)",
    transition: "all 0.4s ease-in",
    },
    ".current" :{
    opacity: 1,
    transform: "translateX(0)",
    
    }
}
 const Details = () => {
  const[project,setProject]=useState([]); 
  const[currentSlide,setCurrentSlide]=useState(0) ;
  const[slideLength,setslideLength]=useState(0);
  const router = useRouter();
  var {id} = router.query;
  var slideInterval:any;
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 :
    currentSlide + 1);
  }
  const auto = ()=> {
    slideInterval = setInterval(nextSlide, 7000)
  }

    useEffect(() => {
      setCurrentSlide(0)}
    ,[])
    useEffect(()=> {
      auto()
      return () => {clearInterval(slideInterval);}
    },[currentSlide])
    
  useEffect(()=>{
    if (router.isReady) {
    var res=JSON.parse(localStorage.getItem("projects") || "") 
    let filtered=res.filter((proj:any)=>proj.name=== id)
    setProject(filtered)
    setslideLength(filtered[0].img.length)
    }
  }, [router.isReady,id]);
  
  return (
    <section className={styles.section}>
      <NavBar  />
      {project.map((project:any,id:number)=>(
        <div key={id}>
          <Box  position='absolute' top={0} left={0} width="100%" height="60vh"  >
           {project.img.map((src:string,index:number)=>(
              <Box  key={index} sx={slide} className={index === currentSlide?"slide current":"slide"} >
                {index === currentSlide &&(
                    <Image src={src} className={styles.col} alt='developer'
                    layout='fill' objectFit="cover" style={{position:"absolute", background:" rgb(0, 0, 0)",
                    opacity:".6"}} />
                )}
              </Box>
            ))}
            <Box position='absolute' top={"69%"}  margin={"0 1em"}>
              <Typography variant='h4'>{project.name} </Typography>
              <Typography sx={{color:"#fff"}} >{project.role}</Typography>
              <Typography sx={{color:"#fff"}} >{project.duration}</Typography>
            </Box>
          </Box>  
 
          <Grid container justifyContent={"space-around"}   m={"29em 0"}   padding={2} gap={7} >
            <Grid item lg={7} sm={5} md={4}xs={12}>
              <Typography variant="h6" p={"1em 0"}>Project</Typography>
              <Typography sx={{color:"#fff"}}  >{project.intro}</Typography>
              <IconButton href={project.github} ><MdOutlineOpenInNew color='white'/></IconButton> 
              {project.github2 &&(
                <IconButton href={project.github2} >
                  <MdOutlineOpenInNew color='white'/>
                </IconButton>
              )}
            </Grid>

            <Grid item lg={2} sm={5} md={4} xs={12}>
              <Paper sx={{p:"1em " ,backgroundColor:"rgba(255, 255, 255, .1)",color:"white"}}>
                <Typography p={"1em"} align="center" color={"#BBE1FA"} > Technologies</Typography>
                {project.technologies.map((name:string,id:number)=>(<li key={id}> {name}</li>))}
              </Paper>
            </Grid>

            <Grid item lg={4} sm={5} md={4} xs={12}>
              <Paper sx={{p:"1em",backgroundColor:"rgba(255, 255, 255, .1)",color:"white"}}>
                <Typography p={"1em"} align="center" color={"#BBE1FA"}>Tasks</Typography>
                  {project.tasks.map((name:string,id:number)=>(<li key={id}> {name}</li>))}
              </Paper>
            </Grid>

            <Grid item lg={4} sm={5} md={4} xs={12}>
              <Paper sx={{p:"1em",backgroundColor:"rgba(255, 255, 255, .1)",color:"white"}} >
                <Typography p={"1em"} align="center" color={"#BBE1FA"}>Achievement</Typography>
                {project.achievement.map((name:string,id:number)=>(<li key={id}  > {name}</li>))}
              </Paper>
            </Grid>
          </Grid>
        </div>
      ))}
    </section>
  )
}
export default Details;