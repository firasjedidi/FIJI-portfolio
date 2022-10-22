import React from 'react'
import styles from '../styles/Home.module.css'
import {  Container, Grid, Link  ,Typography,Box} from '@mui/material'
import { BsLinkedin,BsInstagram,BsGithub,BsWhatsapp,BsFacebook,BsGoogle } from "react-icons/bs";
import Image from 'next/image';
import Divider from '@mui/material/Divider';
const wraper={ 
  m:{
    xs:"5em 6em  0 6em  ",
    sm:"5.5em 6em  0 6em ",
    md:"5.5em 8em  0 8em ",
    lg:"5em 9em  0 9em " 
  },
 
}
const wraper2={ 
  padding:{
    xs:"1em 5em",
    sm:"2em 5em",
    md:"1em 6em",
    lg:"-1em 6em "
  },
 
}
//footer contains all my links withe peace emoji 
  const Footer = () => {
  return (
     <section className={styles.section2} id="Contact" >
      <Box sx={wraper} >
          <Typography variant='h4' >Get In Touch</Typography>
      </Box>
      <Grid container  sx={wraper2}>
        <Grid container display={"flex"} spacing={1}  justifyContent={"center"}  sm={6} md={6}  xs={12} >
            <Grid item   xs={3} sm={3} md={3}  lg={3} style={{margin:"0.5em "}}  >
              <a href="https://www.linkedin.com/in/firas-jedidi-827328232/"  target='_blank' rel="noopener  noreferrer ">
                <BsLinkedin color='white'   size={"medium"} />
              </a>
            </Grid>
            <Grid item xs={3} sm={3} md={3}  lg={3} style={{margin:"0.5em "}}  >
              <a href="https://github.com/firasjedidi"   target="_blank"  rel="noopener  noreferrer " >
                <BsGithub color='white'  size={"medium"}/>
              </a>
             
            </Grid> 
            <Grid item xs={3} sm={3} md={3}  lg={3} style={{margin:"0.5em "}}  >
              <a href="mailto:firasjedidi0713@gmail.com">
                <BsGoogle color='white'  size={"medium"}/>
              </a>
            </Grid> 
             <Grid item xs={3} sm={3} md={3} lg={3} style={{margin:"0.5em "}} >
              <a href="https://www.instagram.com/fj16th/"   target='_blank' rel="noopener  noreferrer "
>
                <BsInstagram color='white'  size={"medium"}/>
              </a>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} style={{margin:"0.5em "}}  >
             <a href="tel:+216 20924041">
                <BsWhatsapp color='white'   size={"medium"}/>
              </a>
            </Grid> 
            <Grid item xs={3} sm={3} md={3} lg={3} style={{margin:"0.5em "}}  >
              <a href="https://www.facebook.com/FJ16TH" target="_blank"  rel="noopener  noreferrer ">
                <BsFacebook color='white'  size={"medium"}/>
              </a>
            </Grid>
           
        </Grid>
        <Grid item sm={6} md={6}  xs={12}
            >
              <Image layout="responsive" width="100%"  height="100%"   alt='developer'
              src="https://res.cloudinary.com/dod9yhmlt/image/upload/v1665852048/young-say-hello-4788642-398830-unscreen_ypc1np.gif" blurDataURL='true' />
        </Grid>
      </Grid>
      {/* <Divider sx={{backgroundColor:"ButtonFace" ,marginTop:"16em"}} variant="fullWidth" />
      <Typography align='center' margin={"1em 0"}> ©Copyright 2022</Typography> */}
    </section>
    
  )
}
export default Footer;