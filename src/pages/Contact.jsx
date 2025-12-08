
import { Box } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../Style/Style.css";
import { Link, useNavigate } from "react-router-dom";

import Aos from "aos";
import 'aos/dist/aos.css';

// Import All Sections from components/sections folder
import ContactHero from "./Contact/Contact.hero";
import GetInTouchSection from "./Contact/GetinTouch";
import ContactQuery from "./Contact/FormsContainer";


function Contact() {
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
        <ContactHero />
      </Box>

      {/* Query section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <ContactQuery />
      </Box>

      {/* GeT In Touch Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <GetInTouchSection />
      </Box>


    </Box>
  );
}

export default Contact;