
 import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, styled, badgeClasses } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';

const themeColors = {
  orangeColor: '#FF5532',
  deepBlack: '#111111',
  darkGray: '#575757',
  pureWhite: '#FFFFFF',
};

const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '25px',
  textTransform: 'capitalize',
  textAlign: 'center',
  padding: '60px 0px',
  // minHeight: '70vh',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '60px 0px',
    minHeight: '60vh',
    marginTop: '20px',
    gap: '20px',
  },
   [theme.breakpoints.down('sm')]: {
    padding: '0px 30px',
    marginTop: '20px',
  }
}));



const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '4rem',
  fontWeight: '700',
  lineHeight: '1.1',
   color: themeColors.deepBlack,
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.2rem',
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  textAlign: 'left',
  }
}));

const HeroText = styled(Typography)(({ theme }) => ({
  width: '45%',
  color: themeColors.darkGray,
  fontSize: '16px',
  lineHeight: '1.7',
  textAlign: 'center',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    width: '90%',
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    fontSize: '15px',
  textAlign: 'left',
  }
}));


function AboutHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <HeroContainer>
    
      
      <HeroTitle 
        variant="h1" 
        data-aos="fade-up" 
        data-aos-delay="300"
        data-aos-duration="1000"
        sx={{ mb: 2 }}
      >
         ABOUT US
      </HeroTitle>
      
      <HeroText 
        data-aos="fade-up" 
        data-aos-delay="400"
        data-aos-duration="1000"
      >
    <strong>Netcoder Technology</strong> is a digital solutions and
          learning hub based in Dharamshala, offering creative IT services like
          web design, development, and branding — along with hands-on training
         programs for students and professionals. We help businesses build
         smarter and individuals learn faster, all under one roof.
      </HeroText>

    </HeroContainer>
  );
}

export default AboutHero;