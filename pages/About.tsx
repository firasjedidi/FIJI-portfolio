import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material'
const wraper={ 
  margin:{xs:"2em 0",sm:"9em 0em",md:"9em 0",lg:"0em" },
}
const wraper2={ 
  margin:{xs:"-15.5em 0",sm:"13em 0",md:"15em 01em",lg:"15em 3em" }
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
          <Box sx={wraper2}>
          <Typography m={1.5} >
            ABOUT
          </Typography>
          <Typography variant='h3' m={1.5}>
            who I Am
          </Typography>
          <Typography  sx={{color:"#fff"}} m={1.5}>
          Hello once more I&apos;m Firas Jedidi, a Tunisian citizen, and I&apos;m not going to reveal my age for a few reasons. I studied computer science and dropped out of high school dropout before deciding to take a shortcut to become who I am today.
          </Typography>
          </Box>
        </Grid>
     </Grid>
    </section>
  )
}

export default About;