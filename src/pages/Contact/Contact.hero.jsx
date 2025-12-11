import React, { useEffect } from "react";
import { Box, Typography, styled, keyframes } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const themeColors = {
  orangeColor: "#FF5532",
  darkGray: "#575757",
  pureWhite: "#FFFFFF",
};


// Main Container
const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '25px',
  textTransform: 'capitalize',
  textAlign: 'center',
  padding: '60px 0px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '40px 0px',
    minHeight: '60vh',
    marginTop: '20px',
    gap: '20px',
  },
   [theme.breakpoints.down('sm')]: {
    minHeight: '50vh',
    marginTop: '20px',
  alignItems: 'flex-start',
    gap: '20px',
  }
}));

// Orange Span 
const OrangeSpan = styled(Typography)(({ theme }) => ({
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  padding: '8px 20px',
  borderRadius: '25px',
  fontSize: '15px',
  letterSpacing: '1.5px',
  fontWeight: '600',
  display: 'inline-block',
  animation: 'pulse 2s infinite ease-in-out',
  '@keyframes pulse': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' },
    '100%': { transform: 'scale(1)' },
  },
    [theme.breakpoints.down('sm')]: {
  fontSize: '13px',

  }
}));

// H1 Title
// H1 Title
const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.9rem',
  fontWeight: 'bold',
  lineHeight: '1.1',
  background: 'linear-gradient(135deg, #111111 0%, #000000ff 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  textAlign: 'center',
  maxWidth: '500px',
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


// Paragraph
const HeroText = styled(Typography)(({ theme }) => ({
  width: '50%',
  color: themeColors.darkGray,
  fontSize: '18px',
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

function ContactHero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <HeroContainer data-aos="fade-up" data-aos-delay="150">
      <OrangeSpan data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800">
        Contact
      </OrangeSpan>

      <HeroTitle>We’d Love To Hear From You</HeroTitle>

      <HeroText>
        Whether you’re looking to kickstart your learning journey or need tailored IT solutions for your business, we’re just a message away. Reach out with your queries, ideas, or collaboration requests. We’ll get back to you as soon as possible.
      </HeroText>
    </HeroContainer>
  );
}

export default ContactHero;
