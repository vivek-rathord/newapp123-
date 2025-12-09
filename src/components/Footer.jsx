 import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  styled
} from "@mui/material";
import {
  Facebook,
  Instagram,
  YouTube,
  LinkedIn
} from "@mui/icons-material";

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

// Footer Container - aapke CSS ke exact according
const FooterWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "30px",
  padding: "40px 100px",
  textTransform: "capitalize",
  width: "80%",
  margin: "auto",
  backgroundColor: themeColors.offWhite,
     [theme.breakpoints.down('sm')]: {
      justifyContent:"flex-start",
      padding:"0px",
    }
}));

const FooterBox = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: "200px",
}));

const FooterLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: themeColors.darkGray,
  textDecoration: "none",
  fontSize: "16px",
  transition: "all 0.3s ease",
  "&:hover": {
    textUnderlineOffset: "10px",
    color: themeColors.orangeColor,
    transition: "all 0.2s ease",
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: "19px",
  fontWeight: "bolder",
  marginBottom: "25px",
  color: themeColors.deepBlack,
}));

const SocialMedia = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "15px",
  marginTop: "10px",
}));

// Simple anchor tag use karta hoon IconButton ki jagah
const SocialIconLink = styled('a')(({ theme }) => ({
  color: themeColors.darkGray,
  backgroundColor: "transparent",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  borderRadius: "50%",
  transition: "all 0.3s ease",
  "&:hover": {
    color: themeColors.orangeColor,
    backgroundColor: "transparent",
    transform: "translateY(-2px)",
  },
}));

// Custom styled icons
const StyledFacebook = styled(Facebook)(({ theme }) => ({
  fontSize: "20px",
  color: "inherit",
}));

const StyledInstagram = styled(Instagram)(({ theme }) => ({
  fontSize: "20px",
  color: "inherit",
}));

const StyledYouTube = styled(YouTube)(({ theme }) => ({
  fontSize: "20px", 
  color: "inherit",
}));

const StyledLinkedIn = styled(LinkedIn)(({ theme }) => ({
  fontSize: "20px",
  color: "inherit",
}));

const Copyright = styled(Box)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  padding: "20px 30px",
  marginTop: "80px",
  fontSize: "16px",
  color: themeColors.deepBlack,
}));

function Footer() {
  return (
    <FooterWrapper component="footer">
      {/* Box 1: Quick links */}
      <FooterBox>
        <FooterTitle variant="h6">
          Quick Links
        </FooterTitle>
        <FooterLinks>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About us</FooterLink>
          <FooterLink to="/Blogs">Blog</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterLinks>
      </FooterBox>

      {/* Box 2: Features */}
      <FooterBox>
        <FooterTitle variant="h6">
          Features
        </FooterTitle>
        <FooterLinks>
          <FooterLink to="/Singlecourse">Courses</FooterLink>
          <FooterLink to="/">Industrial Training</FooterLink>
          <FooterLink to="/">Insights</FooterLink>
          <FooterLink to="/">IT Solutions</FooterLink>
        </FooterLinks>
      </FooterBox>

      {/* Box 3: Legal Info */}
      <FooterBox>
        <FooterTitle variant="h6">
          Legal Links
        </FooterTitle>
        <FooterLinks>
          <FooterLink to="/">Terms & Conditions</FooterLink>
          <FooterLink to="/">Privacy Policy</FooterLink>
        </FooterLinks>
      </FooterBox>

      {/* Box 4: Stay connected */}
      <FooterBox>
        <FooterTitle variant="h6">
          Stay Connected
        </FooterTitle>
        <FooterLinks>
          <SocialMedia>
            <SocialIconLink 
              href="https://www.facebook.com/netcodertechnology" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <StyledFacebook />
            </SocialIconLink>
            
            <SocialIconLink 
              href="https://www.instagram.com/netcodertechnology" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <StyledInstagram />
            </SocialIconLink>
            
            <SocialIconLink 
              href="https://www.youtube.com/@netcodertechnology" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <StyledYouTube />
            </SocialIconLink>
            
            <SocialIconLink 
              href="https://www.linkedin.com/in/netcodertechnology" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <StyledLinkedIn />
            </SocialIconLink>
          </SocialMedia>
        </FooterLinks>
      </FooterBox>

      {/* Copyright */}
      <Copyright>
        <Typography variant="body1">
          *All the rights are reserved by <strong>Netcoder Technology</strong>
        </Typography>
      </Copyright>
    </FooterWrapper>
  );
}

export default Footer;