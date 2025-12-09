import React, { useEffect } from "react";
import { Box, Typography, styled, keyframes } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Group44 from "../../assets/Images/heroimg.jpg"; // background image

const themeColors = {
  orangeColor: "#FF5532",
  darkGray: "#575757",
  pureWhite: "#FFFFFF",
};

// Pulse animation
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Main Container
const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '25px',
  textTransform: 'capitalize',
  textAlign: 'center',
  padding: '20px 0px',
  minHeight: '70vh',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '40px 0px',
    minHeight: '60vh',
    marginTop: '20px',
    gap: '20px',
  }
}));

// Orange Span with pulse animation
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
const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.9rem',
  fontWeight: 'bold',
  lineHeight: '1.1',
  background: 'linear-gradient(135deg, #111111 0%, #000000ff 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.2rem',
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
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
  }
}));

// Image as background
const ImageContainer = styled(Box)(({ theme }) => ({
  width: "80vw", 
  height: "320px", 
  // minHeight:'200px',
  borderRadius: "40px",
  backgroundImage: `url(${Group44})`,
  backgroundSize: "cover",       // cover entire container
  backgroundPosition: "top center", 
  backgroundRepeat: "no-repeat",
  marginTop: "30px",
}));

function EducationHero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <HeroContainer data-aos="fade-up" data-aos-delay="150">
      <OrangeSpan data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800">
       Education
      </OrangeSpan>

      <HeroTitle>START LEARNING</HeroTitle>

      <HeroText>
     Whether you’re just beginning or looking to upgrade your skills, our courses are designed to help you grow confidently. With hand-on training, real-world projects, and a focus on industry-relevant tools, we ensure you not only learn but apply. 
      </HeroText>

      <ImageContainer data-aos="fade-up" data-aos-delay="400" />
    </HeroContainer>
  );
}

export default EducationHero;
