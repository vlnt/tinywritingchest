import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../utils/firebase";
//import { Icon } from "semantic-ui-react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../themes";
import { ThemeProvider } from "@emotion/react";

export default function Header(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(props.user);
  }, user);
  console.log("header: ", user);
  return (
    <header className="header">
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Link to="/">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              </Link>

              <Typography
                variant="h4"
                color="#a0cca0"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                TinyWritingChest
              </Typography>
              
                <Link to="/login">{user ? 'Logout' : 'Login'}
                {/* <Icon
                  as="button"
                  size="big"
                  color="green"
                  name="user outline"
                />} */}
                </Link>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </header>
  );
}
