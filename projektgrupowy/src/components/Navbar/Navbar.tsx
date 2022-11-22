import React from 'react';
import { useState, useEffect, useContext } from "react";
import { authContext } from "../../helpers/authContext";
//import RegisterPage from "../RegisterPage/RegisterPage";
import HomePage from '../HomePage/HomePage';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = ["Home", "Currency Converter"];



const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const loggedIn = useContext(authContext);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpenNavMenu}
   {/* const pages = ["Home", "Search"]; */}
           
   {pages.map((page) => (
              <Link
                    key={page}
                    to={page === "Home" ? "/" : page.toLowerCase()}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Link>
  
            ))}
          >
            <MenuIcon />
          </IconButton>
       //
        

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Grupa 3
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Link
              to={loggedIn ? "/user" : "/login"}
              style={{ textDecoration: "none" }}
            >

            </Link>
            </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
