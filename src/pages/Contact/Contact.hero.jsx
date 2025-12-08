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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "20px",
  padding: "30px 20px",
  marginTop: "20px",
  textTransform: "capitalize",
  [theme.breakpoints.up("sm")]: {
    padding: "50px 30px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "70px 0",
  },
}));

// Orange Span 
const OrangeSpan = styled(Typography)(({ theme }) => ({
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  padding: "5px 20px",
  borderRadius: "25px",
  fontSize: "14px",
  letterSpacing: "1.5px",
  fontWeight: "600",
  display: "inline-block",
  [theme.breakpoints.up("sm")]: {
    fontSize: "15px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
}));

// H1 Title
// H1 Title
const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  textAlign: "center",
  lineHeight: "1.2",
  width: "90%",         // full width on small screens
  fontSize: "1.5rem",   // base font size for very small screens
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.6rem",
    width: "90%",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
    width: "80%",        
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
    width: "70%",       
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3rem",
    width: "60%",     
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "2.5rem",
    width: "30%", 
  },
}));


// Paragraph
const HeroText = styled(Typography)(({ theme }) => ({
  width: "90%",
  maxWidth: "600px",
  color: themeColors.darkGray,
  fontSize: "14px",
  lineHeight: "1.4",
  [theme.breakpoints.up("sm")]: {
    fontSize: "15px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
    lineHeight: "1.5",
  },
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
