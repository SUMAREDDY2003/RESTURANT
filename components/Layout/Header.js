
import React, { useState } from 'react';
import { AppBar, Box, Typography, IconButton, Drawer } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';

import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import "../../styles/HeaderStyles.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography color={"goldenrod"} variant='h8' component='div' sx={{ flexGrow: 1, my: 2 }}>
        <FastfoodIcon />
        My Restaurant
      </Typography>
      <ul className='mobile-navigation'>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "black" }}>
          <toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: "none " } }}>
              <MenuIcon onClick={handleDrawerToggle} />
            </IconButton>
            <Typography color={"goldenrod"} variant='h4' component='div' sx={{ flexGrow: 1 }}>
              <FastfoodIcon />
              My Restaurant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
          </toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px", }, }}>
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <toolbar/>
        </Box>
      </Box>
    </>
  );
};

export default Header;