 import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  IconButton, 
  Card, 
  CardContent, 
  CardMedia
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import images - ये path adjust करें अपने project structure के according
import img1 from "../../assets/Images/team1.png";
import img2 from "../../assets/Images/team1.png";
import img3 from "../../assets/Images/team1.png";
import img4 from "../../assets/Images/team1.png";
import img5 from "../../assets/Images/team1.png";
import img6 from "../../assets/Images/team1.png";

const TeamSection = () => {
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(320);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    Aos.init();
    
    const handleResize = () => {
      // Set slide width based on screen size
      if (window.innerWidth < 448) {
        setSlideWidth(300);
        setVisibleCards(1);
      } else if (window.innerWidth < 768) {
        setSlideWidth(320);
        setVisibleCards(2);
      } else if (window.innerWidth < 992) {
        setSlideWidth(320);
        setVisibleCards(2);
      } else {
        setSlideWidth(320);
        setVisibleCards(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(autoSlide);
    };
  }, []);

  const members = [
    { img: img1, name: "Nitin Kapoor", role: "Managing Director" },
    { img: img2, name: "Nitin Kapoor", role: "Managing Director" },
    { img: img3, name: "Nitin Kapoor", role: "Managing Director" },
    { img: img4, name: "Nitin Kapoor", role: "Managing Director" },
    { img: img5, name: "Nitin Kapoor", role: "Managing Director" },
    { img: img6, name: "Nitin Kapoor", role: "Managing Director" },
  ];

  const nextSlide = () => {
    const maxIndex = members.length - visibleCards;
    setIndex((prev) => (prev + 1) % (maxIndex + 1));
  };

  const prevSlide = () => {
    const maxIndex = members.length - visibleCards;
    setIndex((prev) => (prev - 1 + maxIndex + 1) % (maxIndex + 1));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box 
        data-aos="fade-left" 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          mb: 6,
          textTransform: 'capitalize',
          textAlign: 'center',
          width: '100%'
        }}
      >
        <Typography 
          sx={{ 
            fontSize: '0.9rem',
            color: 'white',
            letterSpacing: 1,
            backgroundColor: '#FF5532 ',
            padding: '8px 18px',
            borderRadius: '20px',
          }}
        >
          our team
        </Typography>
        <Typography 
          variant="h2"
          sx={{ 
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            fontWeight: 600,
            width: { xs: '100%', md: '30vw' },
            maxWidth: '500px'
          }}
        >
          the professionals behind netcoder
        </Typography>
      </Box>

      {/* Carousel - CSS के exact same layout में */}
      <Box sx={{ 
        position: 'relative',
        width: { xs: '100%', sm: '90%', md: '960px' },
        maxWidth: '100%',
        margin: '40px auto',
        overflow: 'hidden'
      }}>
        {/* Cards Wrapper */}
        <Box sx={{ 
          display: 'flex',
          transition: 'transform 0.5s ease',
          transform: `translateX(-${index * (slideWidth)}px)`,
          gap: 0
        }}>
          {members.map((member, i) => (
            <Box key={i} sx={{ 
              width: { xs: '300px', sm: '320px' },
              flexShrink: 0,
              textAlign: 'center',
              px: { xs: 1, sm: 2 }
            }}>
              <Box sx={{ 
                width: '285px',
                height: '285px',
                borderRadius: '20px',
                overflow: 'hidden',
                margin: 'auto',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <CardMedia
                  component="img"
                  image={member.img}
                  alt={member.name}
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 600 }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '14px', color: 'gray' }}>
                  {member.role}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Left Arrow */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            top: '45%',
            left: { xs: '5px', sm: '1px' },
            transform: 'translateY(-60%)',
            backgroundColor: 'white',
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            display: { xs: index === 0 ? 'none' : 'flex', sm: 'flex' },
            '&:hover': { backgroundColor: 'grey.50' }
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: '18px', color: '#FF5532' }} />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            top: '45%',
            right: { xs: '5px', sm: '1px' },
            transform: 'translateY(-60%)',
            backgroundColor: 'white',
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            display: { 
              xs: index >= members.length - visibleCards ? 'none' : 'flex', 
              sm: 'flex' 
            },
            '&:hover': { backgroundColor: 'grey.50' }
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: '18px', color: '#FF5532' }} />
        </IconButton>
      </Box>
    </Container>
  );
};

export default TeamSection;