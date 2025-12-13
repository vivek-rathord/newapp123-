import React, { useEffect } from "react";
import { Box, Typography, styled } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../assets/Images/one.png";
import img2 from "../../assets/Images/flow-chart.png";
import img3 from "../../assets/Images/collapse-diagonal-line.png";
import img4 from "../../assets/Images/swap-3-line.png";

const themeColors = {
  orangeColor: "#FF5532",
  darkGray: "#575757",
  pureWhite: "#FFFFFF",
};

// Main container
const WhyUsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: themeColors.pureWhite,
  margin: "60px auto",
  borderRadius: "80px",
  padding: "60px 20px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    borderRadius: "40px",
  },
}));


// Orange badge
const OrangeSpan = styled(Typography)({
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  padding: "8px 18px",
  borderRadius: "109px",
  fontSize: "14px",
  letterSpacing: "1px",
  fontWeight: "500",
  display: "inline-block",
});

// Heading with max-width
const Heading = styled(Typography)({
  textTransform:"capitalize",
  fontWeight: 700, 
  maxWidth: "700px",
  margin: "20px auto 40px",
});

// Grid container using CSS Grid
const GridContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "auto auto", // 2 columns
  gap: "20px",
  maxWidth: "1000px",
  margin: "0 auto", 

  // Mobile: 1 column
  "@media (max-width: 600px)": {
    gridTemplateColumns: "1fr",
  },
});

// Box for each feature
const WhyUsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "20px",
  borderRadius: "20px",
  minHeight: "180px",
  transition: "transform 0.3s",
  "&:hover": { transform: "translateY(-5px)" },

  "& img": {
    width: "40px",
    height: "40px",
    marginBottom: "10px",

    [theme.breakpoints.down("md")]: {
      width: "32px",
      height: "32px",
    },

    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  },

  "& h5": {
    fontSize: "24px",
    fontWeight:"500",
    margin: "10px 0",
  },

  "& p": {
    fontSize: "14px",
    lineHeight: 1.5,
    margin: 0,
    color: themeColors.darkGray,
    width: "60%",
    textAlign: "center",
  },
}));

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <WhyUsContainer data-aos="fade-up" data-aos-duration="900">
      <OrangeSpan data-aos="zoom-in" data-aos-delay="100">
        Why Netcoder
      </OrangeSpan>

      <Heading variant="h4" data-aos="fade-up" data-aos-delay="200"   sx={{
    fontSize: {
      xs: "2rem",
      sm: "2rem",
      md: "3rem",
      lg: "3rem", 

    }
  }}>
        What Makes us the right tech partner for you?
      </Heading>

      <GridContainer>
        <WhyUsBox data-aos="fade-up" data-aos-delay="200">
          <img src={img1} alt="Design-Driven Thinking" />
          <Typography variant="h5">Design-Driven Thinking</Typography>
          <Typography>
            Every project begins with a strong design foundation that ensures clarity, usability, and visual impact
          </Typography>
        </WhyUsBox>

        <WhyUsBox data-aos="fade-up" data-aos-delay="300">
          <img src={img2} alt="Custom Solutions, No Templates" />
          <Typography variant="h5">Custom Solutions, No Templates</Typography>
          <Typography>
            Our focus is always on creating thoughtful, tailored solutions that reflect who you are and where you’re headed
          </Typography>
        </WhyUsBox>

        <WhyUsBox data-aos="fade-up" data-aos-delay="400">
          <img src={img3} alt="Collaborative Workflow" />
          <Typography variant="h5">Collaborative Workflow</Typography>
          <Typography>
            We believe best work comes from open communication and continuous client involvement
          </Typography>
        </WhyUsBox>

        <WhyUsBox data-aos="fade-up" data-aos-delay="500">
          <img src={img4} alt="Integrated Services Offering" />
          <Typography variant="h5">Integrated Services Offering</Typography>
          <Typography>
            From design to deployment, we bring all your digital needs under one roof
          </Typography>
        </WhyUsBox>
      </GridContainer>
    </WhyUsContainer>
  );
};

export default WhyChooseUs;
