import React from "react"
import {Link} from 'react-router-dom'
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

export default function Header(){

  // function googleSignIn(){
  //   const auth = getAuth()
  //   signInWithPopup(auth, provider)
  //  .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });
  //}
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
          <Link to='/login'><Button id= "google_auth" color="inherit">Login</Button></Link>
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

