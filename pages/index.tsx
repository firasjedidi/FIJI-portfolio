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
  useEffect(()=>{
    localStorage.setItem('projects',JSON.stringify(projects))
    localStorage.setItem('skils',JSON.stringify(skils))
  },[])
  return (
    <div className={styles.container} >
      <Head>
      <title>FIJI portfolio</title>
      <meta name='description' content='I hope this tutorial is helpful for you' />
      <link rel="icon" style={{width:"100%"}} href="https://res.cloudinary.com/dod9yhmlt/image/upload/v1666117613/Peachpuff_Brush_Stroke_Photography_Logo__1_-removebg-preview_ced3ka.png" />
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