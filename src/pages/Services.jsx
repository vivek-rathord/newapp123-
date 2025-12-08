import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Aos from "aos";
import 'aos/dist/aos.css';

// Import All Sections from components/sections folder
import ServicesHero from "./Services/ServicesHero";
import CreativeService from "./Services/CreativeService";
import WebService from "./Services/Webdevelopment";
import DigitalIdentityCard from "./Services/Build";
import PortfolioSection from "./Services/PortfolioSection";
import WhyChooseUs from "./Services/WhyChooseUs";

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
        <ServicesHero />
      </Box>

      {/* hero Section image*/}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        {/* < /> */}
      </Box>

{/* creative solutions */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
         <CreativeService /> 
      </Box>

{/* web development solutions */}
 <Box sx={{ width: '85%', maxWidth: '1400px' }}>
         <WebService /> 
      </Box>

{/* creative solutions */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
         <CreativeService /> 
      </Box>

      {/* IDENTITY */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
         <DigitalIdentityCard /> 
      </Box>



      {/* Portfolio Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <PortfolioSection />
      </Box>

        {/* why us Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <WhyChooseUs />
      </Box>

    </Box>
  );
}

export default Home;