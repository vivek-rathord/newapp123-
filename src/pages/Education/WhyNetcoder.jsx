import React, { useEffect } from "react";
import { Box, Typography, styled } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// import img1 from "../../assets/Images/PracticalHands.svg";
import img1 from "../../assets/Images/PracticaHands.svg";
import img2 from "../../assets/Images/user-star-line (3).svg";
import img3 from "../../assets/Images/earth-line (2).svg";
import img4 from "../../assets/Images/donut-chart-line (2).svg";

const themeColors = {
  orangeColor: "#FF5532",
  darkGray: "#575757",
  pureWhite: "#FFFFFF",
};

// Main container
const WhyNetcoderContainer = styled(Box)({
  backgroundColor: themeColors.pureWhite,
  margin: "60px auto",
  borderRadius: "80px",
  padding: "60px 20px",
  textAlign: "center",
});

// Orange badge
const OrangeSpan = styled(Typography)({
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  padding: "8px 18px",
  borderRadius: "20px",
  fontSize: "14px",
  letterSpacing: "1px",
  fontWeight: 600,
  display: "inline-block",
});

// Heading
const Heading = styled(Typography)({
  fontWeight: 700,
  maxWidth: "500px",
  margin: "20px auto 40px",
});

// Grid container
const GridContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px",
  maxWidth: "1000px",
  margin: "0 auto",

  "@media (max-width: 600px)": {
    gridTemplateColumns: "1fr",
  },
});

// Feature box
const WhyUsBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "20px",
  borderRadius: "20px",
  minHeight: "180px",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
  },
  "& img": {
    width: "40px",
    height: "40px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  "& h5": {
    fontSize: "22px",
    margin: "10px 0",
    fontWeight: 600,
  },
  "& p": {
    fontSize: "14px",
    lineHeight: 1.5,
    margin: 0,
    color: themeColors.darkGray,
    width: "60%",
    textAlign: "center",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
});

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <WhyNetcoderContainer data-aos="fade-up" data-aos-duration="900">
      <OrangeSpan data-aos="zoom-in" data-aos-delay="100">
        Why Learn With Us
      </OrangeSpan>

      <Heading variant="h4" data-aos="fade-up" data-aos-delay="200">
        Why Choose Netcoder for your learning journey?
      </Heading>

      <GridContainer>
        <WhyUsBox data-aos="fade-up" data-aos-delay="200">
          <img src={img1} alt="Practical learning" />
          <Typography variant="h5">Practical, hands-on learning</Typography>
          <Typography>
            We emphasise doing over memorising - every concept is reinforced with live projects and real world applications.
          </Typography>
        </WhyUsBox>

        <WhyUsBox data-aos="fade-up" data-aos-delay="300">
          <img src={img2} alt="Industry mentors" />
          <Typography variant="h5">Industry-experienced mentors</Typography>
          <Typography>
            Learn directly from professionals who’ve worked in the field and understand what companies actually expect.
          </Typography>
        </WhyUsBox>

        <WhyUsBox data-aos="fade-up" data-aos-delay="400">
          <img src={img3} alt="Real projects" />
          <Typography variant="h5">Real-world projects</Typography>
          <Typography>
            Our curriculum includes portfolio-worthy projects that help you build confidence and stand out to employers.
          </Typography>
        </WhyUsBox>

        <WhyUsBox data-aos="fade-up" data-aos-delay="500">
          <img src={img4} alt="Flexible courses" />
          <Typography variant="h5">Flexible duration and formats</Typography>
          <Typography>
            Pick a pace and style that suits you. Short-term training or in-depth courses.
          </Typography>
        </WhyUsBox>
      </GridContainer>
    </WhyNetcoderContainer>
  );
};

export default WhyChooseUs;
