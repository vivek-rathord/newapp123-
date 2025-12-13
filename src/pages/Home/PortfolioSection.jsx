 import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Card, CardContent, Grid, styled } from "@mui/material";
import imager from "../../assets/Images/heroimg.jpg";
import arrowright from "../../assets/Images/arrow-right.png";

// Add imports at the top and use imager & arrowright in the component 
const themeColors = {
  orangeColor: '#FF5532',
  deepBlack: '#111111',
  darkGray: '#575757',
  pureWhite: '#FFFFFF',
};

const PortfolioContainer = styled(Box)(({ theme }) => ({
  background: themeColors.pureWhite,
  borderRadius: '80px',
  padding: '80px 60px',
  marginTop: '80px',
  width: '100%',
  maxWidth: '1400px',
  boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
  [theme.breakpoints.down('md')]: {
    padding: '40px 20px',
    borderRadius: '40px',
    marginTop: '40px',
  }
}));

const HeadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: '25px',
  marginBottom: '60px',
  textAlign: 'center',
}));

const OrangeSpan = styled(Typography)(({ theme }) => ({
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  padding: '5px 20px',
  borderRadius: '20px',
  fontSize: '14px',
  letterSpacing: '1px',
  fontWeight: '500',
  display: 'inline-block',
  [theme.breakpoints.down('sm')]: { fontSize: '.7rem' },

}));

const PortfolioTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: '700',
   color: themeColors.pureblack,
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}));

const PortfolioGrid = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '30px',
  justifyContent: 'center',
  marginBottom: '50px',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: '35px',
  }
}));

const PortfolioCard = styled(Card)(({ theme }) => ({
  width: '100%',
  padding: '250px 70px 40px',
  background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${imager}) no-repeat center/cover`,
  color: themeColors.pureWhite,
  borderRadius: '35px',
  display: 'flex',
  textAlign: 'left',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  minHeight: '450px',
  transition: 'all 0.5s ease',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-15px) scale(1.02)',
    boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
    '&::before': {
      opacity: 1,
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
background: "linear-gradient(45deg, rgba(0,0,0,0.6), rgba(258,255,255,0.3))",
    opacity: 0,
    transition: 'opacity 0.5s ease',
  },
    [theme.breakpoints.down('md')]: {
    padding: '180px 20px 30px', // reduce padding 
    minHeight: '350px',          
  },
  [theme.breakpoints.down('sm')]: {
    padding: '20px 15px 20px', // reduce padding for small screens
    minHeight: '200px',          // reduce height
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWidth:'500',
  marginBottom: '15px',
  fontWeight: '600',
  position: 'relative',
  zIndex: 2,
   [theme.breakpoints.down('sm')]: {
    fontSize:"20px",
  },
}));

const CardText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  lineHeight: '1.6',
  marginBottom: '20px',
  position: 'relative',
  zIndex: 2,
  opacity: 0.9,
   [theme.breakpoints.down('sm')]: {
    fontSize:"15px",
  },
}));

const CardButtonContainer = styled(Box)(({ theme }) => ({
  padding: '20px 0px 0px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  zIndex: 2,
}));

const CardButton = styled(Button)(({ theme }) => ({
  background: 'none',
  padding: '0px',
  color: themeColors.pureWhite,
  fontWeight: '700',
    fontSize:'12px',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  position: 'relative',
  '&:hover': {
    color: themeColors.orangeColor,
    background: 'none',
    transform: 'translateX(10px)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-5px',
    left: '0',
    width: '0',
    height: '2px',
    backgroundColor: themeColors.orangeColor,
    transition: 'width 0.3s ease',
  },
  '&:hover::after': {
    width: '100%',
  },
   [theme.breakpoints.down('sm')]: {
    fontSize:"12px",
  },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginTop: '40px',
}));

const BlackButton = styled(Button)(({ theme }) => ({
  backgroundColor: themeColors.deepBlack,
  color: themeColors.pureWhite,
  padding: '9px 50px',
  borderRadius: '16px',
  fontSize: '14px',
  fontWeight: '400',
  textTransform: 'none',
  transition: 'all 0.4s ease',
  '&:hover': {
    backgroundColor: themeColors.orangeColor,
    transform: 'translateY(-3px)',
    boxShadow: '0 15px 35px rgba(255, 85, 50, 0.3)',
  },
  [theme.breakpoints.down('sm')]: {fontSize:"13px" },

}));

function PortfolioSection() {
  return (
    <PortfolioContainer data-aos="fade-up">
      <HeadingContainer data-aos="fade-up">
        <OrangeSpan data-aos="zoom-in">Portfolio</OrangeSpan>
        <PortfolioTitle variant="h2" data-aos="fade-up" data-aos-delay="200">
          Ideas We Brought to Life
        </PortfolioTitle>
      </HeadingContainer>

      <PortfolioGrid>
        <PortfolioCard 
          data-aos="fade-right" 
          data-aos-offset="300" 
          data-aos-easing="ease-in-sine" 
          data-aos-delay="200"
        >
          <CardContent>
            <CardTitle>Mudroots Pottery Studio</CardTitle>
            <CardText>
              We designed a responsive, minimal website and complete branding kit for a Pottery Studio, focused on storytelling and user simplicity.
            </CardText>
            <CardButtonContainer>
              <Link to='/Blogs' style={{ textDecoration: 'none' }}>
                <CardButton>View Full Case Study</CardButton>
              </Link>
              <Link to='/Blogs'>
                <img src={arrowright} alt="arrowright" style={{ width: '18px', height: '18px', cursor: 'pointer', filter: 'brightness(0) invert(1)' }} />
              </Link>
            </CardButtonContainer>
          </CardContent>
        </PortfolioCard>

        <PortfolioCard 
          data-aos="fade-left" 
          data-aos-offset="300" 
          data-aos-easing="ease-in-sine" 
          data-aos-delay="200"
        >
          <CardContent>
            <CardTitle>Mudroots Pottery Studio</CardTitle>
            <CardText>
              We designed a responsive, minimal website and complete branding kit for a Pottery Studio, focused on storytelling and user simplicity.
            </CardText>
            <CardButtonContainer>
              <Link to='/Blogs' style={{ textDecoration: 'none' }}>
                <CardButton>View Full Case Study</CardButton>
              </Link>
              <Link to='/Blogs'>
                <img src={arrowright} alt="arrowright" style={{ width: '18px', height: '18px', cursor: 'pointer', filter: 'brightness(0) invert(1)' }} />
              </Link>
            </CardButtonContainer>
          </CardContent>
        </PortfolioCard>
      </PortfolioGrid>

      <ButtonContainer data-aos="fade-up" data-aos-delay="300">
        <Link to="/portfolio" style={{ textDecoration: 'none' }}>
          <BlackButton>
            View Our Portfolio
          </BlackButton>
        </Link>
      </ButtonContainer>
    </PortfolioContainer>
  );
}

export default PortfolioSection;