 import { Box, Typography, Container } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AboutHero = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box 
        data-aos="fade-up" 
        data-aos-delay="150"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          textAlign: 'center',
          textTransform: 'capitalize',
        }}
      >
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
          }}
        >
          ABOUT US
        </Typography>
        
        <Typography 
          sx={{ 
            maxWidth: '800px',
            fontSize: '1.1rem',
            lineHeight: 1.6,
            color: 'text.secondary',
          }}
        >
          <strong>Netcoder Technology</strong> is a digital solutions and
          learning hub based in Dharamshala, offering creative IT services like
          web design, development, and branding — along with hands-on training
          programs for students and professionals. We help businesses build
          smarter and individuals learn faster, all under one roof.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutHero;