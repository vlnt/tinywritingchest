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


export default function Header(props) {

 // const auth = getAuth()
//   onAuthStateChanged(auth, user => {
//     if(user){
//         console.log(user.email, ',\n ', user.uid)
        
//     } else{
//        console.log('no user')
//     }
// })
  //const [user, setUser] = useState(auth.currentUser)
  //const user = auth
  console.log("props:", props) 
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
                <Link to='/login'>{(props.user == "no user") ? "Login" : props.user}</Link>
              </Button>


            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </header>
  )
}

