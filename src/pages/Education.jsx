
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Aos from "aos";
import 'aos/dist/aos.css';

// Import All Sections from components/sections folder
import EducationHero from "./Education/EducationHero";
import BookDemo from "./Education/Bookdemo";
import WhyNetcoder from "./Education/WhyNetcoder";
import CoursesSection from "./Education/Courses";
import StudentSection from "./Education/StudentsSection";


function Education() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>

      {/* Hero Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <EducationHero />
      </Box>

      {/* hero Section image*/}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <CoursesSection />
      </Box>


  

      {/* Book Demo */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
         <BookDemo /> 
      </Box>


 {/*Student Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
         <StudentSection /> 
      </Box>


    
        {/* why us Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <WhyNetcoder />
      </Box>

    </Box>
  );
}

export default Education;