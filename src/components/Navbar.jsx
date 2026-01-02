import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {AppBar,Toolbar,Box,Button,Drawer,List,ListItem,IconButton,Typography,styled} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/Images/logo.png";

// Colors
const themeColors = {
  orangeColor: "#FF5532",
  deepBlack: "#111111",
  darkGray: "#575757",
  lightGray: "#CECFCA",
  offWhite: "#F7F7F7",
  pureWhite: "#FFFFFF",
  softPeach: "#F7A291",
};

// Styled Components
const NavbarWrapper = styled(AppBar)(({ theme }) => ({
  position: "relative",
  width: "85%",
  margin: "auto",
  top: "15px",
  zIndex: 10,
  backgroundColor: themeColors.pureWhite,
  color: themeColors.deepBlack,
  padding: "7px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "20px",
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "8px 0px",
   borderRadius:'0px !important',
  },
  [theme.breakpoints.down("md")]: {
   borderRadius:'10px',
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  "& img": { width: "130px" },
}));

const NavLinks = styled(Box)(({ theme }) => ({
  listStyle: "none",
  display: "flex",
  gap: "40px",
  margin: 0,
  padding: 0,
  [theme.breakpoints.down("md")]: { display: "none" },
}));

const NavLinkItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
  "& a": {
    color: themeColors.deepBlack,
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
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
  width: "115px",
  fontSize: "14px",
  padding: "8px 0px",
  borderRadius: "8px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: themeColors.orangeColor,
    color: themeColors.pureWhite,
    transform: "translateY(-3px) scale(1.01)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  },
  [theme.breakpoints.down("md")]: { display: "none" },
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
  "&:active": {
    backgroundColor: themeColors.orangeColor,
    color: themeColors.pureWhite,
    transform: "scale(0.97)",
  },
  "&.MuiButton-root": {
    color: themeColors.offWhite,
    fontSize: "16px",
    fontWeight: 500,
  },
  "& .MuiButton-startIcon, & .MuiButton-endIcon": {
    color: themeColors.offWhite,
  },
  "&:focus": {
    backgroundColor: themeColors.orangeColor,
    color: themeColors.pureWhite,
  },
  [theme.breakpoints.up("md")]: { display: "none" },
}));

const Hamburger = styled(IconButton)(({ theme }) => ({
  display: "none",
  cursor: "pointer",
  fontSize: "28px",
  color: themeColors.deepBlack,
  zIndex: 1500,
  [theme.breakpoints.down("md")]: { display: "flex" },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: themeColors.pureWhite,
    width: "100%",
    padding: "20px",
    height: "100%",
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
    "&:hover": { color: themeColors.orangeColor },
  },
}));

// Navbar Component
function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  // Auto-close drawer on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileMenu = (
    <Box>
      <Box display="flex" justifyContent="flex-end">
        <IconButton onClick={handleClose}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </Box>
      <MobileNavList>
        <MobileNavItem>
          <Link to="/" onClick={handleClose}>Home</Link>
        </MobileNavItem>
        <MobileNavItem>
          <Link to="/about" onClick={handleClose}>About</Link>
        </MobileNavItem>
        <MobileNavItem>
          <Link to="/services" onClick={handleClose}>Services</Link>
        </MobileNavItem>
        <MobileNavItem>
          <Link to="/education" onClick={handleClose}>Education</Link>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavButton component={Link} to="/contact" onClick={handleClose}>
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
          <NavLinkItem><Link to="/">Home</Link></NavLinkItem>
          <NavLinkItem><Link to="/about">About</Link></NavLinkItem>
          <NavLinkItem><Link to="/services">Services</Link></NavLinkItem>
          <NavLinkItem><Link to="/education">Education</Link></NavLinkItem>
          <NavLinkItem><Link to="/Blogs">Blog</Link></NavLinkItem>
        </NavLinks>

        {/* Desktop Contact Button */}
        <NavButton component={Link} to="/contact">Contact us</NavButton>

        {/* Mobile Hamburger */}
        <Hamburger onClick={() => setOpen(!open)}>
          {open ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </Hamburger>

        {/* Mobile Drawer */}
        <MobileDrawer anchor="right" open={open} onClose={handleClose}>
          {mobileMenu}
        </MobileDrawer>
      </Toolbar>
    </NavbarWrapper>
  );
}

export default Navbar;
