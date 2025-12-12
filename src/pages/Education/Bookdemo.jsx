import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
// import BookDemoClass from "../../components/BookDemoClass";
import BookDemoClass from "../../components/BookDemoClass";
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
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  padding: "5px 20px",
  borderRadius: "25px",
  fontSize: "15px",
  letterSpacing: "1.5px",
  fontWeight: "600",
  display: "inline-block",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

// CTA Button
const BookDemoBtn = styled(Button)(({ theme }) => ({
  paddingTop: "40px ",
}));

function BookDemo() {
  return (
    <IdentityContainer
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="150"
    >
      <Badge>Free Demo Class</Badge>

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
        Still Unsure? Try a free demo class
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
        Experience our teaching approach before making a commitment. Whether you're exploring a new skill or planning your career path, our demo class gives you a glimpse of how we teach, what you’ll learn, and how we can help you grow. No pressure—just real learning, right from the start.
      </Typography>

      {/* Book Demo Btn */}
      <BookDemoBtn>
        <BookDemoClass />
      </BookDemoBtn>
    </IdentityContainer>
  );
}

export default BookDemo;
