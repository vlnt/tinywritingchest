import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../themes'
import { ThemeProvider } from "@emotion/react";
import { signInWithPopup } from "firebase/auth";

export default function Header(){
    return(
        <header className="header">
        <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
           <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TinyWritingChest
          </Typography>
          <Button color="inherit" onClick={()=>signInWithPopup}>Login</Button>
           </Toolbar>
          </AppBar>
         </Box>
        </ThemeProvider>
        

            {/* <div className="container">
            <img src="images/inkpot.png" alt="vlnt"/>
            <h2 className="header--title">TinyWritingChest</h2> */}
            
            {/* </div> */}
        </header>
    )
}

