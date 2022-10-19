import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Icon from '@mui/material/Icon';
import styles from '../styles/Home.module.css'
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

import { BsLinkedin,BsInstagram,BsGithub,BsWhatsapp,BsFacebook,BsGoogle ,BsCodeSlash} from "react-icons/bs";
const pages = ['Home', 'About', 'Skils', 'Projects', 'Contact'];

 const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="absolute"  className={styles.bg}>
    <Container >
      <Toolbar disableGutters >
        <Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}> <BsCodeSlash  /></Icon>
       
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Lucida Handwriting',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          FIJI
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }  }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            {Boolean(anchorElNav)? <CloseIcon  />:<MenuIcon />}
          
          </IconButton>
          <Menu
            id="menu-appbar"
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              backgroundColor:"rgba(0, 0, 0, 0.5)",position:"fixed",
              top:"4em"
            }}
          >
            <Paper sx={{
              backgroundColor:"#0A1929",position:"fixed",left:0,width:"50%",
              height: "100vh",top:"3.5em",transition:"ease-in",transitionDuration:"100ms",
              
             }}>
              <Typography align='center'm={"2em 0.5em 1em"} color='InfoText' >Let&apos;s build something legendary together</Typography>
             <Divider sx={{backgroundColor:"InfoText"}} variant="middle" />
            {pages.map((page) => (
              <MenuItem key={page}   onClick={handleCloseNavMenu}sx={{m:{xs:"1em ",sm:"1.2em"},p:{xs:"1.1em 3em",sm:"1.1em 2.5em"},":hover":{backgroundColor:"rgba(255,255,255,0.1)"},}} >
                <Link href={`/#${page}`} color="#fff" underline="none" sx={{width:"100%"}}  >
                  {page} 
                </Link>
              </MenuItem>
            ))}
             <Typography align='left'm={"3em 2em 1em "} color='InfoText' >Let&apos;s Connect</Typography>
            <Divider sx={{backgroundColor:"ButtonFace",justifyItems:"center"}} variant="middle" />
            <Box sx={{display:"flex",justifyContent:"space-between",m:{xs:"1em ",sm:"2em"}}}>
              <a href="https://www.linkedin.com/in/firas-jedidi-827328232/"  target="_blank" rel="noopener noreferrer ">
                <BsLinkedin color='white'   />
              </a>
              <a href="https://github.com/firasjedidi"  target="_blank" rel="noopener noreferrer ">
                <BsGithub color='white'  />
              </a>
              <a href="mailto:firasjedidi0713@gmail.com">
                <BsGoogle color='white' />
              </a>
              <a href="https://www.instagram.com/fj16th/"  target="_blank" rel="noopener noreferrer ">
                <BsInstagram color='white'  />
              </a>
              <a href="tel:+216 20924041">
                <BsWhatsapp color='white' />
              </a>
              <a href="https://www.facebook.com/FJ16TH" target="_blank" rel="noopener noreferrer ">
                <BsFacebook color='white' />
              </a>
            </Box>
          </Paper>
          </Menu>
        </Box>
        <Icon sx={{ display:{ xs: 'flex', md: 'none' }, mr: 1 }}> <BsCodeSlash  /></Icon>
      
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'Lucida Handwriting',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            
          }}
        >
          FIJI
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,justifyContent:"space-around"}}>
          {pages.map((page) => (
            <Link
              key={page}
              onClick={handleCloseNavMenu}
              href={`/#${page}`}
              sx={{ margin: 2, color: 'white', display: 'block' }}
              underline="none"
              > 
              {page}
            </Link>
          ))}
        </Box>

        
      </Toolbar>
    </Container>
  </AppBar>

  )
}
export default NavBar;