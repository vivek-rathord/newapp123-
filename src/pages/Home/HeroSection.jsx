import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, styled } from "@mui/material";
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
  }
}));

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

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  marginTop: '10px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '15px',
  }
}));

// const PrimaryButton = styled(Button)(({ theme }) => ({
//   backgroundColor: themeColors.deepBlack,
//   color: themeColors.pureWhite,
//   padding: '15px 40px',
//   borderRadius: '10px',
//   fontSize: '16px',
//   fontWeight: '600',
//   textTransform: 'none',
//   transition: 'all 0.4s ease',
//  '&:hover': {
//   backgroundColor: themeColors.orangeColor,
//   color: themeColors.pureWhite,
//   transform: 'translateY(-1px)',
//   boxShadow: '0 15px 35px rgba(255, 85, 50, 0.3)',
// },

//  // ensure hover off returns to default
//   '&:not(:hover)': {
//     backgroundColor: themeColors.deepBlack,
//     color: themeColors.pureWhite,
//     transform: 'translateY(0)',
//     boxShadow: 'none',
//   }
// }));
const PrimaryButton = styled(Button)(() => ({
  backgroundColor: themeColors.deepBlack,
  color: themeColors.pureWhite,
  padding: "15px 40px",
  borderRadius: "10px",
  fontSize: "16px",
  fontWeight: "600",
  textTransform: "none",
  transition: "all 0.4s ease",

  "&:hover": {
    backgroundColor: themeColors.darkGray,
    color: themeColors.pureWhite,
    transform: "translateY(-1px)",
    boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
  },
}));



const SecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: themeColors.deepBlack,
  padding: '15px 40px',
  borderRadius: '10px',
  fontSize: '16px',
  fontWeight: '600',
  textTransform: 'none',
  border: `2px solid ${themeColors.deepBlack}`,
  transition: 'all 0.4s ease',
  '&:hover': {
    backgroundColor: themeColors.deepBlack,
    color: themeColors.pureWhite,
    transform: 'translateY(-3px)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
  }
}));

function HeroSection() {
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
      <OrangeSpan
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        Netcoder Technology
      </OrangeSpan>

      <HeroTitle
        variant="h1"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        sx={{ mb: 2 }}
      >
        Solution for brands<br />
        Skills for the learners
      </HeroTitle>

      <HeroText
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        From digital branding and website design to student training, we help businesses scale their online presence and prepare the next generation of skilled IT professionals through practical learning experiences.
      </HeroText>
      {/* 
      <ButtonContainer 
        data-aos="fade-up" 
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <Link to="/services" style={{ textDecoration: 'none' }}>
      
      <PrimaryButton component={Link} to="/services">
  Our Services
</PrimaryButton>

        </Link>
        <Link to="/education" style={{ textDecoration: 'none' }}>
          <SecondaryButton>
            Our Courses
          </SecondaryButton>
        </Link>
      </ButtonContainer> */}
    </HeroContainer>
  );
}

export default HeroSection;