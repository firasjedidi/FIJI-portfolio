import React ,{useEffect}from 'react'
import styles from '../styles/Home.module.css'
import  Header  from './Header'
import  About  from './About'
import  Footer  from './Footer'
import  Skils  from './Skils'
import  Projects  from './Projects'
import  NavBar  from './NavBar'
import Head from 'next/head'
import projects from './api/projects'
import skils from './api/skils';

export default function Home() {
useEffect(() => {
  const setdata=()=>{
    localStorage.setItem('projects',JSON.stringify(projects))
    localStorage.setItem('skils',JSON.stringify(skils))
  }
  setdata()
}, [])
 
 
  return (   
      <div className={styles.container} >
        <Head>
        <title>FIJI portfolio</title>
        <link rel="icon" style={{width:"100%"}} href="https://res.cloudinary.com/dod9yhmlt/image/upload/v1666117613/Peachpuff_Brush_Stroke_Photography_Logo__1_-removebg-preview_ced3ka.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
          <NavBar/>
          <Header/>
          <About/>
          <Skils/>
          <Projects/>
          <Footer/>
      </div> 
  )
}
