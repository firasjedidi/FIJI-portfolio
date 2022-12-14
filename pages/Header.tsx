import React from 'react'
import styles from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect';
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image';

const wraper={ 
  margin:{xs:"3em 0",sm:"3em 0",md:"7em 0",lg:"9em 0" },
}
// the anmation with emoji and the type writing anmation 
// each one as component than import them
// a button to direct the links 
 const Header = () => {
  return (
    <section className={styles.section} id="Home" >
      <Grid container spacing={1} sx={wraper}>
        <Grid item md={6}  xs={12} >
          <Box sx={{ m:{xs:"3em 2em ",sm:"3em ",md:"7em 1em",lg:"9em 6em" },}} >
            <Typography variant='h4' fontSize={"2.5em"}  >
              <Typewriter
                options={{
                  strings: 
                  ['Hello, There',
                   'I\'\m FIJI',
                   'I\'\m  Full-Stack Developer'],
                  autoStart: true, 
                  loop:true
                }}
              /> 
            </Typography>
            <Typography  sx={{color:"#fff"}}  marginTop={2}>
            Hi, If you&apos;re wondering how the hell this guy is, scroll down if you don&apos;t already.
            
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}  xs={12} 
            sx={{m:{sm:"-7.5em 1em" , md:"-4em 0"}}}
            >
              <Image layout="responsive" width={40}  height={40}  objectFit="scale-down" 
              src="https://res.cloudinary.com/dod9yhmlt/image/upload/v1665838969/web-application-development-40-unscreen_q9jlef.gif" alt='developer' blurDataURL='true'/>
        </Grid>
      </Grid>
      
    </section>
  )
}
export default Header;