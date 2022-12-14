import React,{useEffect,useState,useRef} from 'react'
import styles from '../styles/Home.module.css'
import 
  { 
    Container, Grid, Paper, Typography,Box ,List ,ListItem ,
    Divider,ListItemText,ListItemAvatar ,Avatar    
  } from '@mui/material'

import Image from 'next/image';

const wraper={ 
  padding:{
    xs:"3.5em 2em  0 2em ",
    sm:"5.5em 2em  0 2em ",
    md:"5.5em 5.5em  0 5.5em ",
    lg:"4.5em 6em  0 6em " 
  },
  
}
const wraper2={ 
  p:{
    xs:" 0.5em ",
    sm:"1em 0.5em",
    md:"1em 5em",
    lg:"1em 5em "
  },

}

const thecard={ 
  width:{ xs:"100%",sm:"100%",md:"100%",lg:"100%" },
  height:{ xs:"12.5em",sm:"13em",md:"12em",lg:"14em" },
  margin:{xs:"0.1em 0.5em",sm:"1em 1em",md:"0.5em 0.5em",lg:"0.5em " },
  perspective:"800px",
  transition: "all 0.5s ease",
  backgroundColor: "#0A1929",
  
  "&:hover .back":{
    transform: "rotateY(360deg)",
   },
   "&:hover .front":{
    transform: "rotateY(180deg)",
   }
}
const thefront={
  color: "#fff",
  position: "absolute",
  width: "100%",
  height: "100%",
  transition: "transform 1s",
  backgroundColor:"rgba(255, 255, 255, .1)",
  backfaceVisibility: "hidden",
  borderRadius:"0.5em",
  padding:{xs:"3em 1em",sm:"3em 1em",md:"1.5em 0.5em",lg:"1.5em  0.5em " },
}
const theback={
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  backgroundColor:"rgba(255, 255, 255, .1)",
  color:"white",
  transition: "transform 1s",
  transform: "rotateY(180deg)",
  borderRadius:"0.5em",
  padding:{xs:"1.5em 0em",sm:"1em 1em",md:"0.5em 0.5em",lg:"0.5em " },
  
} 

const Skils = () => {
  const[skils,setskils]=useState([]); 
  const effectRan=useRef(false)
  useEffect(()=>{
    if(!effectRan.current){
      var res=JSON.parse(localStorage.getItem('skils') || "")
      setskils(res)
      return()=>{
        effectRan.current=true
      }
    }
  },[])
  return (
    <section className={styles.section3} id="Skils" >
      <Box sx={wraper} >
        <Typography variant='h6' 
          sx={{
            padding:
             {xs:"0.1em 0",sm:"0.5em 0"},
             
          }} >Skills</Typography>
        <Typography variant='h4'>What I Can Do</Typography>
      </Box>
      <Grid container    spacing={1}  sx={wraper2} >
        {skils.map((skil:any,id:number)=>(
          <Grid item  md={4} sm={4} xs={6}  lg={4} display={"flex"} justifyContent={"center"}
           key={id} 
            >
            <Grid sx={thecard} >
              <Grid 
                sx={thefront} 
                className="front"
              >
                <Image  src={skil.img}  layout='responsive' 
                alt='developer' blurDataURL='true' width="5em" height="2em" loading='lazy' />
                <Typography align='center' noWrap>
                  {skil.name}
                  </Typography>
              </Grid>
              <Grid 
                sx={theback} 
                className="back"
               >
                {skil.skills.map((skill:any,index:number)=>(
                  <List  key={index} disablePadding >
                    <ListItem 
                      >
                      <ListItemAvatar >
                        <Avatar sx={{ width: 24, height: 24 }} src={skill.link} />
                      </ListItemAvatar>
                      <ListItemText > 
                        <Typography  component="span"
                          variant="body2"
                          sx={{ display: 'inline',}}
                          noWrap
                        >
                          {skill.name}
                        </Typography>
                      </ListItemText> 
                    </ListItem>
                  </List>
                ))}
              </Grid>
            </Grid>
          </Grid>
        ))}
     </Grid>
    </section>
  )
}

export default Skils;