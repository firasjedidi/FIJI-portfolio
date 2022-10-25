import React from 'react'
import { AppBar,Box,Toolbar,IconButton,Typography,Menu,Container,Paper,MenuItem,Icon ,Divider} from "@mui/material";
import { BsLinkedin,BsInstagram,BsGithub,BsWhatsapp,BsFacebook,BsGoogle ,BsCodeSlash} from "react-icons/bs";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';
const pages = ['Home', 'About', 'Skils', 'Projects', 'Contact'];
const links={
  m:{xs:"0.5em ",sm:"1.2em"},
  p:{xs:"1em 3em",sm:"1.1em 2.5em"},
  ":hover":{
    backgroundColor:"rgba(255,255,255,0.1)"
  },
}
 const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const matches = useMediaQuery('(min-width:600px)');
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget); 
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar  sx={anchorElNav?{
      background: "#0A1929",width: "100%",position:"absolute",}
     :{ background: "#0A1929",width: "100%",opacity:" 0.7",position:"absolute"}} >
    <Container >
      <Toolbar disableGutters >
        <Icon sx={{ display: matches ?'flex':"none", mr: 1 }}> <BsCodeSlash  /></Icon>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: matches?'flex':"none",
            fontFamily: 'Lucida Handwriting',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          FIJI
        </Typography>

        <Box sx={{ flexGrow: 1, display: !matches?"flex":"none"  }}>
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
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              backgroundColor:"rgba(0, 0, 0, 0.5)",position:"fixed",
              top:"3.5em"
            }}
          >
            <Paper sx={{
              backgroundColor:"#0A1929",position:"fixed",left:0,width:"50%",
              height: "100vh",top:"3.5em",transition:"ease-in",transitionDuration:"10ms",
             }}>
              <Typography align='center'm={"1em 0.5em 1em 0.5em"} color='#fff' >Let&apos;s build something legendary together</Typography>
             <Divider sx={{backgroundColor:"#fff"}} variant="middle" />
            {pages.map((page) => (
              <MenuItem key={page}   onClick={handleCloseNavMenu} sx={links} >
                <Link 
                  href={`/#${page}`} 
                 >
                  {page} 
                </Link>
              </MenuItem>
            ))}
             <Typography align='left'm={"1em 2em 1em 2em"}sx={{color:"#fff"}}  >Let&apos;s Connect</Typography>
            <Divider sx={{backgroundColor:"#fff",justifyItems:"center"}} variant="middle" />
            <Box sx={{display:"flex",justifyContent:"space-between",m:{xs:"1em ",sm:"2em"},flex:""}}>
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
        <Icon sx={{ display:!matches?"flex":"none", mr: 1 }}> <BsCodeSlash  /></Icon>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: !matches?"flex":"none",
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

        <Box sx={{ flexGrow: 1, display:matches?"flex":"none" ,justifyContent:"space-around"}}>
          {pages.map((page) => (        
            <Typography key={page} onClick={handleCloseNavMenu} >
              <Link   
                  href={`/#${page}`} 
                > 
                 {page}
              </Link>
            </Typography>
          ))}
        </Box>

        
      </Toolbar>
    </Container>
  </AppBar>

  )
}
export default NavBar;