import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Aos from "aos";
import 'aos/dist/aos.css';

// Import All Sections from components/sections folder
import HeroSection from "../components/sections/HeroSection";
import SolutionsSection from "../components/sections/SolutionsSection";
import AboutSection from "../components/sections/AboutSection";
import EducationSection from "../components/sections/EducationSection";
import ServicesSection from "../components/sections/ServicesSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import BlogsSection from "../components/sections/BlogsSection";
import ContactSection from "../components/sections/ContactSection";

function Home() {
  useEffect(() => {
    Aos.init({ 
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <Box sx={{ 
      overflow: 'hidden',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      
      {/* Hero Section */}
      <Box sx={{ width: '100%', maxWidth: '1400px' }}>
        <HeroSection />
      </Box>

      {/* Solutions Section */}
      <Box sx={{ width: '100%', maxWidth: '1400px' }}>
        <SolutionsSection />
      </Box>

      {/* About Section */}
      <Box sx={{ width: '100%', maxWidth: '1400px' }}>
        <AboutSection />
      </Box>

      {/* Education Section */}
      <Box sx={{ width: '100%', maxWidth: '1400px' }}>
        <EducationSection />
      </Box>

      {/* Services Section */}
      <Box sx={{ width: '100%', maxWidth: '1400px' }}>
        <ServicesSection />
      </Box>

      {/* Portfolio Section */}
      <Box sx={{ width: '100%', maxWidth: '1400px' }}>
        <PortfolioSection />
      </Box>

      {/* Blogs Section */}
      <Box sx={{ width: '100%', maxWidth: '1400px' }}>
        <BlogsSection />
      </Box>

      {/* Contact Section */}
      <Box sx={{ width: '100%', maxWidth: '1400px' }}>
        <ContactSection />
      </Box>

    </Box>
  );
}

export default Home;