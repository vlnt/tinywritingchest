import React from "react"
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../themes'
import { ThemeProvider } from "@emotion/react";
//import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Header() {

  return (
    <header className="header">
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Link to='/'>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                ><MenuIcon /></IconButton>
              </Link>


              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                TinyWritingChest
              </Typography>
              <Button>
                <Link to='/login'>Login</Link>
              </Button>


            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </header>
  )
}

