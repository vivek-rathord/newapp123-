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
    <Container maxWidth="lg" sx={{ py: 8 }}>
     

      {/* Timeline */}
      <Box 
        ref={timelineRef}
        sx={{ 
          margin: '40px auto',
          padding: '80px 0',
          position: 'relative'
        }}
      >
        {/* Animated Timeline Line */}
        <Box sx={{ 
          position: 'absolute',
          left: { xs: '30px', md: '50%' },
          top: 0,
          width: '3px',
          height: '100%',
          backgroundColor: '#F0F0F0',
          transform: { md: 'translateX(-50%)' },
          overflow: 'hidden',
        }}>
          {/* Progress Fill - Now Single Color */}
          <Box 
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: lineHeight,
              backgroundColor: '#FF5532', // Single color for all
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
              margin: '50px 0',
              justifyContent: { xs: 'flex-start', md: item.align === 'right' ? 'flex-end' : 'flex-start' },
              opacity: index === activeIndex ? 1 : index < activeIndex ? 0.6 : 0.4,
              transform: index === activeIndex ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease',
              transitionDelay: `${index * 0.15}s`,
              filter: index < activeIndex ? 'blur(1px)' : 'blur(0px)',
            }}
          >
            {/* Animated Dot - Now Single Color */}
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
              }}
            />
            
            {/* Content Box with Color Border */}
            <Paper 
              sx={{ 
                width: { xs: 'calc(100% - 60px)', md: '40%' },
                backgroundColor: index === activeIndex ? 'white' : (item.align === 'right' ? 'background.paper' : 'transparent'),
                boxShadow: item.align === 'right' ? 
                  index === activeIndex ? 
                    '0 8px 25px rgba(255, 85, 50, 0.1)' 
                    : '0 4px 15px rgba(0, 0, 0, 0.06)' 
                  : 'none',
                padding: 3,
                borderRadius: 2,
                   '4px solid #FF5532' : 'none',
                marginLeft: { xs: '60px', md: item.align === 'right' ? 0 : 'auto' },
                marginRight: { xs: 0, md: item.align === 'right' ? 'auto' : 0 },
                ml: { md: item.align === 'right' ? 0 : 2 },
                mr: { md: item.align === 'right' ? 2 : 0 },
                transform: index === activeIndex ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.3s ease',
              }}
            >
              <Typography sx={{ 
                fontSize: '14px',
                lineHeight: 1.5,
                color: index === activeIndex ? '#333333' : '#555555'
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