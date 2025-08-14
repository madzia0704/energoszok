import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const manuItems = [
    {
      name: "O nas",
      href: "#about" 
    },
    {
      name: "Produkty",
      href: "#oferta" 
    },
    {
      name: "Kontakt",
      href: "#kontakt" 
    },
  ]
  return (
    <AppBar position="static" color="grey.100">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} width="200px"/>
          </a>
        </Typography>
        <div>
          {
            manuItems.map(item => (
              <Button 
                component="a" 
                href={item.href}
                className="nav-link" 
                color="inherit"
              >
                {item.name}
              </Button>
              ))
            }
           </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;