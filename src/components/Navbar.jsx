 import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  IconButton,
  Typography,
  styled
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/Images/logo.png";

// Aapke exact CSS variables
const themeColors = {
  orangeColor: '#FF5532',
  deepBlack: '#111111',
  darkGray: '#575757',
  lightGray: '#CECFCA',
  offWhite: '#F7F7F7',
  pureWhite: '#FFFFFF',
  softPeach: '#F7A291'
};

// Navbar Container - aapke CSS ke exact according
const NavbarWrapper = styled(AppBar)(({ theme }) => ({
  position: "relative",
  width: "85%",
  margin: "auto",
  top: "10px",
  zIndex: 10,
  backgroundColor: themeColors.pureWhite,
  color: themeColors.deepBlack,
  padding: "10px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "19px",
  boxShadow: "none",
}));

const Logo = styled(Typography)(({ theme }) => ({
  "& img": {
    width: "130px",
  },
}));

const NavLinks = styled(Box)(({ theme }) => ({
  listStyle: "none",
  display: "flex",
  gap: "40px",
  margin: 0,
  padding: 0,
  
  [theme.breakpoints.down('md')]: {
    display: "none",
  }
}));

const NavLinkItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
  "& a": {
    color: themeColors.deepBlack,
    textDecoration: "none",
    fontSize: "17px",
    transition: "all 0.3s ease",
    "&:hover": {
      textUnderlineOffset: "10px",
      color: themeColors.orangeColor,
      transition: "all 0.2s ease",
    },
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  backgroundColor: themeColors.deepBlack,
  color: themeColors.offWhite,
  padding: "10px 20px",
  borderRadius: "8px",
  textTransform: "none",
  fontSize: "16px",
  "&:hover": {
     backgroundColor: themeColors.orangeColor,
    color: themeColors.pureWhite,          
    transform: "translateY(-3px) scale(1.01)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  },
  
  [theme.breakpoints.down('md')]: {
    display: "none",
  }
}));

const MobileNavButton = styled(Button)(({ theme }) => ({
  backgroundColor: themeColors.deepBlack,
  color: themeColors.offWhite,
  padding: "10px 20px",
  borderRadius: "8px",
  textTransform: "none",
  fontSize: "16px",
  width: "100%",
  marginTop: "10px",
  "&:hover": {
    backgroundColor: themeColors.darkGray,
  },
  
  [theme.breakpoints.up('md')]: {
    display: "none !important",
  }
}));

const Hamburger = styled(IconButton)(({ theme }) => ({
  display: "none",
  cursor: "pointer",
  fontSize: "28px",
  color: themeColors.deepBlack,
  
  [theme.breakpoints.down('md')]: {
    display: "flex",
  }
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: themeColors.pureWhite,
    padding: "20px",
    borderRadius: "12px",
    marginTop: "70px",
    marginRight: "20px",
    width: "200px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
  },
}));

const MobileNavList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "20px 0",
}));

const MobileNavItem = styled(ListItem)(({ theme }) => ({
  padding: "8px 0",
  "& a": {
    color: themeColors.deepBlack,
    textDecoration: "none",
    fontSize: "17px",
    width: "100%",
    textAlign: "center",
    "&:hover": {
      color: themeColors.orangeColor,
    },
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const mobileMenu = (
    <Box>
      <MobileNavList>
        <MobileNavItem>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        </MobileNavItem>
        <MobileNavItem>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        </MobileNavItem>
        <MobileNavItem>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
        </MobileNavItem>
        <MobileNavItem>
          <Link to="/education" onClick={() => setOpen(false)}>Education</Link>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavButton 
            component={Link} 
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Contact us
          </MobileNavButton>
        </MobileNavItem>
      </MobileNavList>
    </Box>
  );

  return (
    <NavbarWrapper position="static">
      <Toolbar sx={{ justifyContent: "space-between", width: "100%" }}>
        {/* Logo */}
        <Logo variant="h6" component="div">
          <img src={logo} alt="Netcoder Technology" />
        </Logo>

        {/* Desktop Navigation Links */}
        <NavLinks component="nav">
          <NavLinkItem>
            <Link to="/">Home</Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link to="/about">About</Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link to="/services">Services</Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link to="/education">Education</Link>
          </NavLinkItem>
        </NavLinks>

        {/* Desktop Contact Button */}
        <NavButton component={Link} to="/contact">
          Contact us
        </NavButton>

        {/* Mobile Hamburger Menu */}
        <Hamburger onClick={toggleDrawer(true)}>
          <MenuIcon fontSize="large" />
        </Hamburger>

        {/* Mobile Drawer */}
        <MobileDrawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
        >
          {mobileMenu}
        </MobileDrawer>
      </Toolbar>
    </NavbarWrapper>
  );
}

export default Navbar;