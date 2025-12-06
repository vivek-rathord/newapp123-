import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Aos from "aos";
import 'aos/dist/aos.css';

// Import All Sections from components/sections folder
import HeroSection from "./Home/HeroSection";
import SolutionsSection from "./Home/SolutionsSection";
import AboutSection from "./Home/AboutSection";
import EducationSection from "./Home/EducationSection";
import ServicesSection from "./Home/ServicesSection";
import PortfolioSection from "./Home/PortfolioSection";
import SimpleFaq from "./Home/FaqAccordion";
import BlogsSection from "./Home/BlogsSection";
import ContactSection from "./Home/ContactSection";
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
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <HeroSection />
      </Box>

      {/* Solutions Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <SolutionsSection />
      </Box>

      {/* About Section */}
      <Box sx={{ width: '95%', maxWidth: '1400px' }}>
        <AboutSection />
      </Box>

      {/* Education Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <EducationSection />
      </Box>

      {/* Services Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <ServicesSection />
      </Box>

      {/* Portfolio Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <PortfolioSection />
      </Box>

      {/* Blogs Section */}
      <Box sx={{ width: '100%', maxWidth: '1400px' }}>
        <BlogsSection />
      </Box>

       {/* Faq Section */}
      <Box sx={{ width: '100%', maxWidth: '1400px' }}>
        <SimpleFaq />
      </Box>

      {/* Contact Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <ContactSection />
      </Box>

    </Box>
  );
}

export default Home;