 import React from "react";
import { Box, Typography, styled } from "@mui/material";
import Group44 from "../../assets/Images/Group4.png";
import { Height } from "@mui/icons-material";

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
 paddingTop:"90px",
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
  },
   [theme.breakpoints.down('sm')]: {
     alignItems: 'flex-start',
  }
}));

const OrangeSpan = styled(Typography)(({ theme }) => ({
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  padding: '8px 18px',
  borderRadius: '109px',
  fontSize: '14px',
  letterSpacing: '1px',
  fontWeight: '500',
  display: 'inline-block',
  
}));

const HeadingTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: '700',
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
    textAlign:'left',
  }
}));

const AboutText = styled(Typography)(({ theme }) => ({
  width: '70%',
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
    textAlign:'left',

  }
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  padding: '50px 0px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  '& img': {
    width: '100%',
    maxWidth: '100%',
    borderRadius: '20px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
    transition: 'all 0.5s ease',
  },
  '&:hover img': {
    transform: 'scale(1.02)',
    boxShadow: '0 30px 80px rgba(0,0,0,0.15)',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0px 0px',
    '& img': {
      width: '100%',
    }
  }
}));

function InnovativeSolutions() {
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

export default InnovativeSolutions;