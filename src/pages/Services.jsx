import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";

// Import All Sections from components/Services folder
import ServicesHero from "../components/Services/ServicesHero";
import CreativeService from "../components/Services/CreativeService";
import WebService from "../components/Services/Webdevelopment";
import DigitalIdentityCard from "../components/Services/Build";
import PortfolioSection from "../components/Services/PortfolioSection";
import WhyChooseUs from "../components/Services/WhyChooseUs";

function Services() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Hero Section */}
      <Box sx={{ width: "85%", maxWidth: "1400px" }}>
        <ServicesHero />
      </Box>

      {/* Creative Solutions */}
      <Box sx={{ width: "85%", maxWidth: "1400px" }}>
        <CreativeService />
      </Box>

      {/* Web Development Solutions */}
      <Box sx={{ width: "85%", maxWidth: "1400px" }}>
        <WebService />
      </Box>

      {/* Digital Identity Section */}
      <Box sx={{ width: "85%", maxWidth: "1400px" }}>
        <DigitalIdentityCard />
      </Box>

      {/* Portfolio Section */}
      <Box sx={{ width: "85%", maxWidth: "1400px" }}>
        <PortfolioSection />
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ width: "85%", maxWidth: "1400px" }}>
        <WhyChooseUs />
      </Box>
    </Box>
  );
}

export default Services;
