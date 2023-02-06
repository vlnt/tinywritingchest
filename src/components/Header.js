import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
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
  console.log("props:", props);

  // return (
  //   <Menu color='red' stackable>
  //     <Menu.Item>
  //       <Image src="./images/icons/favicon-32x32.png" />
  //     </Menu.Item>
      
  //     <Link to="/">
  //     <Menu.Item color='green'>
  //       <h3>Tinywritingchest</h3>
  //     </Menu.Item>
  //     </Link>

  //     <Menu.Item name="sign-in" position="right">
  //       <Link to="/login">{props.user == null ? "Login" : props.user.email}</Link>
  //     </Menu.Item>
  //   </Menu>
  // );
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

              <Typography variant="h4" color='#a0cca0' component="div" sx={{ flexGrow: 1 }}>
                TinyWritingChest
              </Typography>
              <Button>
                <Link to='/login'>{props.user === null ? 'Login' :  <Icon size='big' color="green" name='user outline' />}</Link>
              </Button>

            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </header>
  )
}
