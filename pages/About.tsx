import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material'
const wraper={ 
  margin:{xs:"2em 0",sm:"9em 0em",md:"9em 0",lg:"-1em" },
}
// the previw of every work and picture and seemore button 
// the smoth scroling desgin 
 const About = () => {
  return (
    <section className={styles.section} id="About"  >
      <Grid container justifyContent={"center"} spacing={1} >
        <Grid item md={6} lg={6} sx={wraper} sm={6} xs={12}>
            <Image layout="responsive" width={40}  height={40}  objectFit="scale-down" alt='developer'   src="https://res.cloudinary.com/dod9yhmlt/image/upload/v1665852238/man-thinking-about-load-561228-unscreen_glybkn.gif"   blurDataURL='true' />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12} >
          <Box sx={{margin:{xs:"-10.5em 0",sm:"13em 0",md:"15em 01em",lg:"15em 3em" }}}>
          <Typography m={2} >
            ABOUT
          </Typography>
          <Typography variant='h3' m={2}>
            who I Am
          </Typography>
          <Typography  color={"InfoText"} m={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eum perspiciatis neque voluptatibus enim odit voluptates nostrum, suscipit culpa molestias iste quas pariatur, autem magnam molestiae fugit recusandae ab laudantium.
          </Typography>
          </Box>
        </Grid>
     </Grid>
    </section>
  )
}

export default About;