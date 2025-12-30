 import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

const TimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [lineHeight, setLineHeight] = useState('0%');
  const timelineRef = useRef(null);

  const timelineData = [
    {
      align: 'right',
      content: "Founded by Nitin Kapoor in 2016, Netcoder Technology began as a skill-driven IT training institute based in the serene town of Dharamshala, Himachal Pradesh. With a strong emphasis on hands-on learning, we offered practical courses in Web Development, UI/UX Design, Full Stack Development, Graphic Design, Digital Marketing, and more."
    },
    {
      align: 'left',
      content: "Over time, our passion for design and development expanded beyond the classroom. As our in-house capabilities grew, so did our vision — transforming Netcoder into not just a place to learn, but a creative studio delivering real-world IT solutions."
    },
    {
      align: 'right',
      content: "Today, we proudly stand as both an education provider and a digital service partner. From helping students launch tech careers to building brands and websites for clients, we bridge the gap between learning and innovation."
    }
  ];

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const section = timelineRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress
      if (scrollPosition + windowHeight > sectionTop + 100) {
        const scrollProgress = Math.min(
          (scrollPosition - sectionTop + 200) / (sectionHeight * 0.8),
          1
        );
        
        // Set line height based on scroll
        setLineHeight(`${scrollProgress * 100}%`);
        
        // Set active index
        if (scrollProgress < 0.3) setActiveIndex(0);
        else if (scrollProgress < 0.65) setActiveIndex(1);
        else setActiveIndex(2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      
      {/* Heading Section */}
      <Box 
        sx={{ 
          textAlign: 'center',
          mb: { xs: 4, md: 8 },
          px: { xs: 2, md: 0 }
        }}
      >
        {/* Small Top Paragraph with Orange Background */}
        <Typography 
          variant="overline" 
          sx={{ 
            display: 'inline-block',
            backgroundColor: '#FF5532',
            color: '#FFFFFF',
            fontSize:'14px',
            fontWeight: 500,
            letterSpacing: '2%',
            mb: 2,
            padding: "1px 20px",
            borderRadius: '109px',
           }}
        >
          Our Journey
        </Typography>
        
        {/* Main Heading in Black - Responsive */}
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 700,
            color: '#000000',
            fontSize: { xs: '1.7rem', sm: '1rem', md: '3rem', lg: '3rem' },
            mb: 2,
            lineHeight: 1.1,
            px: { xs: 1, sm: 0 }
          }}
        >
          From classroom concepts<br />
          to real-world results
        </Typography>
        
        {/* Subtitle in Black */}
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#000000',
            maxWidth: '600px',
            mx: 'auto',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            opacity: 0.8,
            px: { xs: 2, sm: 0 }
          }}
        >
          Our journey from a training institute to a creative digital studio
        </Typography>
      </Box>

      {/* Timeline */}
      <Box 
        ref={timelineRef}
        sx={{ 
          margin: { xs: '20px auto', md: '40px auto' },
          padding: { xs: '40px 0', md: '80px 0' },
          position: 'relative',
          px: { xs: 2, sm: 0 }
        }}
      >
        {/* Timeline Line - Hidden on mobile, shown on desktop */}
        <Box sx={{ 
          position: 'absolute',
          left: { xs: '30px', md: '50%' },
          top: 0,
          width: '3px',
          height: '100%',
          backgroundColor: '#F0F0F0',
          transform: { md: 'translateX(-50%)' },
          overflow: 'hidden',
          display: { xs: 'none', md: 'block' } // Hidden on mobile, shown on desktop
        }}>
          {/* Orange Progress Fill - Only shows on desktop */}
          <Box 
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: lineHeight,
              backgroundColor: '#FF5532',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        </Box>
        
        {timelineData.map((item, index) => (
          <Box 
            key={index}
            sx={{ 
              display: 'flex',
              position: 'relative',
              margin: { xs: '40px 0', md: '60px 0' },
              justifyContent: { xs: 'flex-start', md: item.align === 'right' ? 'flex-end' : 'flex-start' },
              opacity: index === activeIndex ? 1 : index < activeIndex ? 0.8 : 0.5,
              transform: index === activeIndex ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease',
              transitionDelay: `${index * 0.15}s`,
              filter: index < activeIndex ? 'blur(1px)' : 'blur(0px)',
            }}
          >
            {/* Animated Dot - Hidden on mobile, shown on desktop */}
            <Box 
              sx={{ 
                position: 'absolute',
                left: { xs: '23px', md: '50%' },
                width: index === activeIndex ? '20px' : '14px',
                height: index === activeIndex ? '20px' : '14px',
                backgroundColor: index <= activeIndex ? '#FF5532' : '#E0E0E0',
                borderRadius: '50%',
                transform: { md: 'translateX(-50%)' },
                transition: 'all 0.4s ease',
                boxShadow: index === activeIndex ? '0 0 0 6px rgba(255, 85, 50, 0.2)' : 'none',
                zIndex: 2,
                display: { xs: 'none', md: 'block' } // Hidden on mobile, shown on desktop
              }}
            />
            
            {/* Content Box */}
            <Paper 
              sx={{ 
                width: { xs: '100%', md: '45%' },
                backgroundColor: '#FFFFFF',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                padding: { xs: 3, md: 4 },
                borderRadius: '12px',
                border: 'none',
                marginLeft: { xs: 0, md: item.align === 'right' ? 0 : 'auto' },
                marginRight: { xs: 0, md: item.align === 'right' ? 'auto' : 0 },
                ml: { md: item.align === 'right' ? 0 : 2 },
                mr: { md: item.align === 'right' ? 2 : 0 },
                transform: index === activeIndex ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                }
              }}
            >
              <Typography sx={{ 
                fontSize: { xs: '14px', sm: '15px', md: '16px' },
                lineHeight: 1.7,
                color: '#333333',
                fontFamily: '"Inter", "Roboto", sans-serif'
              }}>
                {item.content}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default TimelineSection;