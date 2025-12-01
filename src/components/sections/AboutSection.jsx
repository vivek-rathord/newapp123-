 import React from "react";
import { Box, Typography, styled } from "@mui/material";
import Group44 from "../../assets/Images/Group4.png";

const themeColors = {
  orangeColor: '#FF5532',
  deepBlack: '#111111',
  darkGray: '#575757',
  pureWhite: '#FFFFFF',
};

const AboutContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '80px 0px',
  [theme.breakpoints.down('md')]: {
    padding: '40px 0px',
  }
}));

const HeadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80%',
  gap: '25px',
  marginBottom: '50px',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    gap: '20px',
  }
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
}));

const HeadingTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  background: 'linear-gradient(135deg, #111111 0%, #575757 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',
  }
}));

const AboutText = styled(Typography)(({ theme }) => ({
  width: '70%',
  color: themeColors.darkGray,
  fontSize: '17px',
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

const ImageContainer = styled(Box)(({ theme }) => ({
  padding: '50px 0px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  '& img': {
    width: '80%',
    maxWidth: '900px',
    borderRadius: '20px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
    transition: 'all 0.5s ease',
  },
  '&:hover img': {
    transform: 'scale(1.02)',
    boxShadow: '0 30px 80px rgba(0,0,0,0.15)',
  },
  [theme.breakpoints.down('md')]: {
    padding: '30px 0px',
    '& img': {
      width: '95%',
    }
  }
}));

function AboutSection() {
  return (
    <AboutContainer>
      <HeadingContainer data-aos="fade-up">
        <OrangeSpan data-aos="zoom-in">Who We Are</OrangeSpan>
        <HeadingTitle variant="h2" data-aos="fade-up" data-aos-delay="200">
          Innovating IT Solutions
        </HeadingTitle>
        <AboutText data-aos="fade-up" data-aos-delay="300">
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
        </AboutText>
      </HeadingContainer>

      <ImageContainer data-aos="fade-up" data-aos-delay="400">
        <img src={Group44} alt="About Netcoder Technology" />
      </ImageContainer>
    </AboutContainer>
  );
}

export default AboutSection;