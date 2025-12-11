import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, styled } from "@mui/material";

const themeColors = {
  orangeColor: '#FF5532',
  deepBlack: '#111111',
  darkGray: '#575757',
  pureWhite: '#FFFFFF',
};

const ContactContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${themeColors.deepBlack} 0%, #333 100%)`,
  height: '350px',
  color: themeColors.pureWhite,
  borderRadius: '50px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0px 60px',
  margin: '80px 0px',
  width: '100%',
  maxWidth: '1400px',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
    transform: 'rotate(45deg)',
    transition: 'all 0.6s ease',
  },
  '&:hover::before': {
    transform: 'rotate(45deg) translate(50%, 50%)',
  },
  [theme.breakpoints.down('md')]: {
    height: '400px',
    padding: '0px 30px',
    margin: '60px 0px',
    borderRadius: '30px',
  }
  ,
  [theme.breakpoints.down('sm')]: {
    height: '300px',
    padding: '0px 30px',
    margin: '60px 0px',
    borderRadius: '30px',
  },
}));

const OrangeSpan = styled(Typography)(({ theme }) => ({
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  padding: '8px 18px',
  borderRadius: '20px',
  fontSize: '14px',
  letterSpacing: '1px',
  fontWeight: '600',
  display: 'inline-block',
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.down('sm')]: { fontSize: '.7rem' },

}));

const ContactTitle = styled(Typography)(({ theme }) => ({
  fontWeight: '300',
  fontSize: '2.2rem',
  textAlign: 'center',
  width: '60%',
  lineHeight: '1.4',
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.down('lg')]: {
    width: '80%',
    fontSize: '2rem',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    fontSize: '1.6rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize:"15px",
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  width: '220px',
  borderRadius: '10px',
  padding: '15px 0px',
  marginTop: '20px',
  backgroundColor: themeColors.pureWhite,
  color: themeColors.deepBlack,
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: '600',
  position: 'relative',
  zIndex: 2,
  overflow: 'hidden',
  transition: 'all 0.4s ease',
  '&:hover': {
    backgroundColor: themeColors.orangeColor,
    color: themeColors.pureWhite,
    transform: 'translateY(-3px)',
    boxShadow: '0 15px 35px rgba(255, 85, 50, 0.4)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
    transition: 'left 0.5s',
  },
  '&:hover::before': {
    left: '100%',
  },
  [theme.breakpoints.down('sm' ,'md')]: {
  width: '180px',      
  fontSize: '14px',     
  padding: '12px 0px',   
  borderRadius: '8px',   
}


}));

function ContactSection() {
  return (
    <ContactContainer data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
      <OrangeSpan data-aos="zoom-in">Contact us</OrangeSpan>
      <ContactTitle data-aos="fade-up" data-aos-delay="300">
        Whether you're building a brand or building your skills, we're ready to help you move forward
      </ContactTitle>
      <Link to="/contact" style={{ textDecoration: 'none', position: 'relative', zIndex: 2 }}>
        <ContactButton data-aos="zoom-in" data-aos-delay="400">
          Contact us now
        </ContactButton>
      </Link>
    </ContactContainer>
  );
}

export default ContactSection;