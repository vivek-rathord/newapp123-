import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

const themeColors = {
  orangeColor: "#FF5532",
  deepBlack: "#111111",
  darkGray: "#575757",
  pureWhite: "#FFFFFF",
};

// Main Container
const IdentityContainer = styled(Box)(({ theme }) => ({
  backgroundColor: themeColors.pureWhite,
  borderRadius: "40px",
  padding: "60px 40px",
  width: "90%",
  maxWidth: "1200px",
  margin: "60px auto",
  textAlign: "center",
  boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
  [theme.breakpoints.down("md")]: {
    padding: "40px 20px",
    margin: "40px auto",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "30px 15px",
    margin: "30px auto",
  },
}));

// Badge
const Badge = styled("span")(({ theme }) => ({
  display: "inline-block",
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  padding: "5px 20px",
  borderRadius: "25px",
  fontWeight: 600,
  fontSize: "14px",
  letterSpacing: "1px",
  marginBottom: "15px",
  [theme.breakpoints.down("sm")]: {
    padding: "4px 15px",
    fontSize: "12px",
  },
}));

// CTA Button
const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: themeColors.deepBlack,
  color: themeColors.pureWhite,
  padding: "12px 30px",
  borderRadius: "30px",
  fontWeight: 600,
  textTransform: "none",
  marginTop: "20px",
  "&:hover": {
    backgroundColor: themeColors.orangeColor,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 25px",
    fontSize: "14px",
  },
}));

function DigitalIdentityCard() {
  return (
    <IdentityContainer
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="150"
    >
      <Badge>Let’s Build Together</Badge>
      <Typography
        component="h2"
        sx={{
          fontSize: { xs: "2rem", sm: "2.2rem", md: "2.5rem" },
          width: { xs: "90%", sm: "80%", md: "60%" },
          margin: "20px auto",
          textAlign: "center",
          fontWeight: 700,
          lineHeight: 1.3,
          color: themeColors.deepBlack,
        }}
      >
        Let’s Build Your Digital Identity Together
      </Typography>
      <Typography
        component="p"
        sx={{
          fontSize: { xs: "13px", sm: "14px", md: "16px" },
          color: themeColors.deepBlack,
          lineHeight: 1.6,
          maxWidth: "850px",
          margin: "0 auto",
          opacity: 0.9,
        }}
      >
        Every business is unique, and its digital presence should be too. By
        blending innovation with strategy, we create customised solutions that
        connect you with your audience and drive meaningful results. Let’s
        partner to turn your ideas into impactful digital experiences.
      </Typography>
      <Link to="/">
        <CTAButton>Start Your Project</CTAButton>
      </Link>
    </IdentityContainer>
  );
}

export default DigitalIdentityCard;
