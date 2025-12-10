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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "20px",
  padding: "30px 0",
  marginTop: "20px",
  textTransform: "capitalize",
}));

// Orange Span with pulse animation
const OrangeSpan = styled(Typography)(({ theme }) => ({
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  padding: "5px 20px",
  borderRadius: "25px",
  fontSize: "15px",
  letterSpacing: "1.5px",
  fontWeight: "600",
  display: "inline-block",
  animation: `${pulse} 2s infinite ease-in-out`,
}));

// H1 Title
const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "700",
  textAlign: "center",
}));

// Paragraph
const HeroText = styled(Typography)(({ theme }) => ({
  width: "40vw",
  color: themeColors.darkGray,
  fontSize: "16px",
  lineHeight: "1.6",
  [theme.breakpoints.down("md")]: {
    width: "85vw",
  },
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
