import React, { useEffect, useRef, useState } from "react";
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

const OrangeSpan = styled(Typography)(({ theme }) => ({
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  padding: "5px 20px",
  borderRadius: "109px",
  fontSize: "14px",
  letterSpacing: "2%",
  fontWeight: "500",
  display: "inline-block",
  marginBottom: '3px',
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
  }
}));
const SectionContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  margin: "0 auto",
  borderRadius: "80px",
  padding: "80px 60px",
  [theme.breakpoints.down("md")]: {
    padding: "40px 20px",
    borderRadius: "40px",
  },
}));

const Paragraph = styled("p")(({ theme }) => ({
  color: themeColors.darkGray,   
  fontSize: "16px",
  lineHeight: 1.6,
  maxWidth: "700px",
  margin: "0 auto",
}));


const HeadingContainer = styled(Box)(({ theme }) => ({
  marginBottom: "50px",
  textAlign: "center",

  h2: {
    fontSize: "3rem",
    fontWeight: 700,
    paddingBottom:'15px',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.2rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    }
  },
}));


const ServiceCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active }) => ({
  padding: "28px",
  borderRadius: "40px",
  marginBottom: "25px",
  cursor: "pointer",
  position: "relative",

  backgroundColor: active
    ? "white"
    : themeColors.none,

  transform: active ? "translateY(-6px)" : "translateY(0)",
  transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",

  "&:hover": {
    // transform: "translateY(-8px)",
    // boxShadow: "0 25px 70px rgba(0,0,0,0.18)",
  },

  h3: {
    fontSize: active ? "1.7rem" : "1.5rem",
    fontWeight: 500,
    margin: "10px 0",
    color: themeColors.deepBlack,
    transition: "font-size 0.35s ease",
  },

  li: {
    marginBottom: "8px",
    listStyleType: "disc",
    marginLeft: "45px",
    color: themeColors.darkGray,
    fontSize: active ? "16px" : "15px",
    transition: "font-size 0.35s ease",
  },
}));

function WebService() {
  const cardRefs = useRef([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;

        if (Math.abs(cardCenter - centerY) < 120) {
          setActiveCard(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <SectionContainer data-aos="fade-up">
      {/* Heading */}
      <HeadingContainer data-aos="fade-up">
        <OrangeSpan data-aos="zoom-in">What We Offer</OrangeSpan>

        <h2>Web development solutions</h2>
         <Paragraph>
          Our Creative Design Solutions encompass branding, UI/UX, and graphic design, ensuring a cohesive visual identity across all platforms. We craft engaging and intuitive designs hat not only captivate users but also drive conversions. Our Approach combines creativity with strategic insights to elevate your brand in digital landscape.
       </Paragraph>
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
            lg: "flex-start",
          },
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SERVICES */}
        <Box sx={{ flex: 1, minWidth: "350px", }}>

          {/* Branding */}
          <ServiceCard
            ref={(el) => (cardRefs.current[0] = el)}
            active={activeCard === 0}
            data-aos="fade-right"
          >
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
          <ServiceCard
            ref={(el) => (cardRefs.current[1] = el)}
            active={activeCard === 1}
            data-aos="fade-right"
            data-aos-delay="150"
          >
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
          <ServiceCard
            ref={(el) => (cardRefs.current[2] = el)}
            active={activeCard === 2}
            data-aos="fade-right"
            data-aos-delay="300"
          >
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
                lg: "400px",
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

export default WebService;
