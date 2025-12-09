import React from "react";
import { Box, Typography, styled } from "@mui/material";

import brand from "../../assets/Images/branding.png";
import Graphics from "../../assets/Images/graphics.png";
import ui from "../../assets/Images/ui.png";
import imager from "../../assets/Images/heroimg.jpg";

const themeColors = {
  orangeColor: "#FF5532",
  deepBlack: "#111111",
  darkGray: "#575757",
  pureWhite: "#FFFFFF",
};

// Outer Container like PortfolioSection
const SectionContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  margin: "0 auto",
  borderRadius: "80px",
  padding: "80px 60px",
  [theme.breakpoints.down("md")]: {
    padding: "40px 20px",
    borderRadius: "40px",
  }
}));

const HeadingContainer = styled(Box)(({ theme }) => ({
  marginBottom: "50px",
  textAlign: "center",

  span: {
    backgroundColor: themeColors.orangeColor,
    color: themeColors.pureWhite,
    padding: "5px 20px",
    borderRadius: "25px",
    fontWeight: 600,
    fontSize: "14px",
    letterSpacing: "1px",
    display: "inline-block",
  },

  h2: {
    fontSize: "2.7rem",
    fontWeight: 700,
    margin: "15px 0",
    background: `linear-gradient(135deg, ${themeColors.deepBlack}, ${themeColors.darkGray})`,
    WebkitBackgroundClip: "text",
    color: "transparent",

    [theme.breakpoints.down('md')]: {
      fontSize: '2.2rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    }
  },

  p: {
    color: themeColors.darkGray,
    fontSize: "16px",
    lineHeight: 1.6,
    maxWidth: "600px",
    margin: "0 auto",
    opacity: 0.9,
  },

}));


// NEW CARD STYLE like PortfolioCard
const ServiceCard = styled(Box)(({ theme }) => ({
  padding: "28px",
  borderRadius: "35px",
  marginBottom: "25px",
  transition: "all 0.4s ease",
  cursor: "pointer",
  position: "relative",

  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 25px 70px rgba(0,0,0,0.18)",
  },
  h3: {
    fontSize: "22px",
    fontWeight: 700,
    margin: "10px 0",
    color: themeColors.deepBlack,
  },

  li: {
    marginBottom: "8px",
    listStyleType: "disc",
    marginLeft: "45px",
    color: themeColors.darkGray,
    fontSize: "15px",
  },

}));

function CreativeService() {
  return (
    <SectionContainer data-aos="fade-up">
      {/* Heading */}
      <HeadingContainer data-aos="fade-up">
        <span>What We Offer</span>
        <h2>Creative Design Solutions</h2>
        <p>
          Our Creative Design Solutions encompass branding, UI/UX, and graphic
          design, ensuring consistency and clarity across digital platforms.
        </p>
      </HeadingContainer>

      {/* FLEX LAYOUT */}
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "space-between",
            lg: "center",
          },
          alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "center",
          },
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SERVICES */}
        <Box sx={{ flex: 1, minWidth: "350px" }}>

          {/* Branding */}
          <ServiceCard data-aos="fade-right" sx={{ backgroundColor: themeColors.pureWhite }}>
            <Box display="flex" alignItems="center" mb={1}  >
              <img
                src={brand}
                alt="Branding"
                style={{ width: "35px", marginRight: "12px" }}
              />
              <h3>Branding</h3>
            </Box>
            <li>Brand Strategy And Positioning</li>
            <li>Logo And Visual Identity Creation</li>
          </ServiceCard>

          {/* Graphic Design */}
          <ServiceCard data-aos="fade-right" data-aos-delay="150">
            <Box display="flex" alignItems="center" mb={1}>
              <img
                src={Graphics}
                alt="Graphic Design"
                style={{ width: "35px", marginRight: "12px" }}
              />
              <h3>Graphic Design</h3>
            </Box>
            <li>Marketing Collateral (Brochures, Flyers)</li>
            <li>Social Media & Advertising Graphics</li>
          </ServiceCard>

          {/* UX/UI */}
          <ServiceCard data-aos="fade-right" data-aos-delay="300">
            <Box display="flex" alignItems="center" mb={1}>
              <img
                src={ui}
                alt="UX/UI Design"
                style={{ width: "35px", marginRight: "12px" }}
              />
              <h3>UX/UI Design</h3>
            </Box>
            <li>User Research</li>
            <li>Wireframing & Prototyping</li>
            <li>Usability Testing</li>
          </ServiceCard>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            flex: 1,
            minWidth: "350px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={imager}
            alt="Creative Design"
            data-aos="fade-left"
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "90%",
              },
              height: {
                xs: "260px",
                sm: "320px",
                md: "400px",
                lg: "500px",
              },
              borderRadius: "30px",
              objectFit: "cover",
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
              transition: "0.4s",
            }}
          />

        </Box>
      </Box>
    </SectionContainer>
  );
}

export default CreativeService;
