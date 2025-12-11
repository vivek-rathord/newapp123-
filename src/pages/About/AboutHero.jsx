//  import { Box, Typography, Container } from '@mui/material';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

// const AboutHero = () => {
//   useEffect(() => {
//     Aos.init();
//   }, []);

//   return (
//     <Container maxWidth="lg" sx={{ py: 8 }}>
//       <Box 
//         data-aos="fade-up" 
//         data-aos-delay="150"
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: 3,
//           textAlign: 'center',
//           textTransform: 'capitalize',
//         }}
//       >
//         <Typography 
//           variant="h1" 
//           sx={{ 
//             fontSize: { xs: '2rem', md: '3rem' },
//             fontWeight: 700,
//           }}
//         >
//           ABOUT US
//         </Typography>
        
//         <Typography 
//           sx={{ 
//             maxWidth: '800px',
//             fontSize: '1.1rem',
//             lineHeight: 1.6,
//             color: 'text.secondary',
//           }}
//         >
//           <strong>Netcoder Technology</strong> is a digital solutions and
//           learning hub based in Dharamshala, offering creative IT services like
//           web design, development, and branding — along with hands-on training
//           programs for students and professionals. We help businesses build
//           smarter and individuals learn faster, all under one roof.
//         </Typography>
//       </Box>
//     </Container>
//   );
// };

// export default AboutHero;
 import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, styled, badgeClasses } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';

const themeColors = {
  orangeColor: '#FF5532',
  deepBlack: '#111111',
  darkGray: '#575757',
  pureWhite: '#FFFFFF',
};

const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '25px',
  textTransform: 'capitalize',
  textAlign: 'center',
  padding: '20px 0px',
  // minHeight: '70vh',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '40px 0px',
    minHeight: '60vh',
    marginTop: '20px',
    gap: '20px',
  },
   [theme.breakpoints.down('sm')]: {
    padding: '0px 30px',
    marginTop: '20px',
  }
}));



const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.9rem',
  fontWeight: 'bold',
  lineHeight: '1.1',
  background: 'linear-gradient(135deg, #111111 0%, #000000ff 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.2rem',
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  textAlign: 'left',
  }
}));

const HeroText = styled(Typography)(({ theme }) => ({
  width: '50%',
  color: themeColors.darkGray,
  fontSize: '18px',
  lineHeight: '1.7',
  textAlign: 'center',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    width: '90%',
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    fontSize: '15px',
  textAlign: 'left',
  }
}));


function AboutHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <HeroContainer>
    
      
      <HeroTitle 
        variant="h1" 
        data-aos="fade-up" 
        data-aos-delay="300"
        data-aos-duration="1000"
        sx={{ mb: 2 }}
      >
         ABOUT US
      </HeroTitle>
      
      <HeroText 
        data-aos="fade-up" 
        data-aos-delay="400"
        data-aos-duration="1000"
      >
    <strong>Netcoder Technology</strong> is a digital solutions and
//           learning hub based in Dharamshala, offering creative IT services like
//           web design, development, and branding — along with hands-on training
//           programs for students and professionals. We help businesses build
//           smarter and individuals learn faster, all under one roof.
      </HeroText>
{/* 
      <ButtonContainer 
        data-aos="fade-up" 
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <Link to="/services" style={{ textDecoration: 'none' }}>
      
      <PrimaryButton component={Link} to="/services">
  Our Services
</PrimaryButton>

        </Link>
        <Link to="/education" style={{ textDecoration: 'none' }}>
          <SecondaryButton>
            Our Courses
          </SecondaryButton>
        </Link>
      </ButtonContainer> */}
    </HeroContainer>
  );
}

export default AboutHero;