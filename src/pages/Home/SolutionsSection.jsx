 import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Card, styled, useTheme, useMediaQuery } from "@mui/material";
import imager from "../../assets/Images/heroimg.jpg";
import Solution from "../../assets/Images/SOLUTIONS.svg";
const themeColors = {
  orangeColor: '#FF5532',
  deepBlack: '#111111',
  darkGray: '#575757',
  pureWhite: '#FFFFFF',
};

const outfitFont = "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const interFont = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

const ServicesContainer = styled(Box)(({ theme }) => ({
  width: '80%',
  margin:'auto',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
    minHeight: '100vh',   
  fontFamily: interFont,
  [theme.breakpoints.down('lg')]: {
    minHeight: '850px',
    padding: '50px 15px',
  },
  [theme.breakpoints.down('md')]: {
    minHeight: 'auto',
    padding: '45px 15px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '10px 0px',
    minHeight: 'auto',
  }
}));

const SectionHeading = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  marginBottom: '45px',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    marginBottom: '40px',
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: '35px',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '20px',
  }
}));

const SectionImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  maxHeight: "140px",
  objectFit: "contain",
  [theme.breakpoints.down('lg')]: {
    maxHeight: "120px",
  },
  [theme.breakpoints.down('md')]: {
    maxHeight: "100px",
  },
  [theme.breakpoints.down('sm')]: {
    maxHeight: "80px",
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  padding: '15px 0px',
  fontSize: '4rem',
  letterSpacing: '-0.1px',
  fontFamily: outfitFont,
  fontWeight: 700,
  [theme.breakpoints.down('xl')]: { 
    fontSize: '3.5rem',
    letterSpacing: '-0.08px',
  },
  [theme.breakpoints.down('lg')]: { 
    fontSize: '3rem',
    padding: '12px 0px',
    letterSpacing: '-0.06px',
  },
  [theme.breakpoints.down('md')]: { 
    fontSize: '2.5rem',
    padding: '10px 0px',
    letterSpacing: '-0.05px',
  },
  [theme.breakpoints.down('sm')]: { 
    fontSize: '2rem',
    padding: '8px 0px',
    letterSpacing: '-0.04px',
  },
  '@media (max-width: 480px)': {
    fontSize: '1.6rem',
    letterSpacing: '-0.03px',
  }
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '4px 16px',
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  borderRadius: '20px',
  fontSize: '13px',
  fontWeight: '600',
  whiteSpace: 'nowrap',
  letterSpacing: '0.1px',
  fontFamily: outfitFont,
  [theme.breakpoints.down('lg')]: { 
    fontSize: '12px',
    padding: '3px 14px',
    letterSpacing: '0.08px',
  },
  [theme.breakpoints.down('md')]: { 
    fontSize: '11px',
    padding: '3px 12px',
    letterSpacing: '0.06px',
  },
  [theme.breakpoints.down('sm')]: { 
    fontSize: '10px',
    padding: '2px 10px',
    whiteSpace: 'normal',
    textAlign: 'center',
    maxWidth: '180px',
    letterSpacing: '0.05px',
    lineHeight: 1.2,
  }
}));

const ContentTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '35px',
  textAlign: 'center',
  padding: '20px 5px',
  letterSpacing: '-0.06px',
  lineHeight: 1.1,
  fontFamily: outfitFont,
  [theme.breakpoints.down('xl')]: { 
    fontSize: '2.2rem',
    letterSpacing: '-0.05px',
  },
  [theme.breakpoints.down('lg')]: { 
    fontSize: '2rem',
    marginBottom: '30px',
    letterSpacing: '-0.04px',
  },
  [theme.breakpoints.down('md')]: { 
    fontSize: '1.8rem',
    marginBottom: '25px',
    padding: '0 10px',
    letterSpacing: '-0.03px',
  },
  [theme.breakpoints.down('sm')]: { 
    fontSize: '1.5rem',
    marginBottom: '20px',
    padding: '0 8px',
    lineHeight: 1.1,
    letterSpacing: '-0.02px',
  },
  '@media (max-width: 480px)': {
    fontSize: '1.3rem',
    letterSpacing: '-0.015px',
  }
}));

const ServicesGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  gap: '40px',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row-reverse',
  },
  
  [theme.breakpoints.down('lg')]: {
    gap: '35px',
    maxWidth: '1000px',
  },
  
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
  },
  
  [theme.breakpoints.down('sm')]: {
    gap: '20px',
  }
}));

const ServicesList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  width: '100%',
  
  [theme.breakpoints.up('md')]: {
    flex: '1 1 50%',
    maxWidth: '550px',
  },
  
  [theme.breakpoints.down('md')]: {
    maxWidth: '600px',
    order: 1,
  },
  
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  }
}));

const ServiceImage = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  [theme.breakpoints.up('md')]: {
    flex: '1 1 50%',
    position: 'sticky',
    top: '100px',
    height: 'fit-content',
  },
  
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '550px',
    order: 2,
  },
  
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
  
  '& img': {
    width: '100%',
    height: '300px',
    aspectRatio: '4/3',
    borderRadius: '40px',
    objectFit: 'cover',
    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
    transition: 'all 0.4s ease',
    
    [theme.breakpoints.down('lg')]: {
      maxWidth: '450px',
    },
    
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      aspectRatio: '16/9',
      
    },
    
    [theme.breakpoints.down('sm')]: {
      borderRadius: '12px',
      aspectRatio: '4/3',
      maxWidth: '100%',
    }
  },
  
  '&:hover img': {
    transform: 'scale(1.02)',
    boxShadow: '0 15px 50px rgba(0,0,0,0.15)',
  }
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginTop: '90px',
  padding: '0 10px',
  [theme.breakpoints.down('lg')]: {
    marginTop: '35px',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '25px',
  }
}));

const BlackButton = styled(Button)(({ theme }) => ({
  backgroundColor: themeColors.deepBlack,
  color: themeColors.pureWhite,
  padding: '10px 40px',
  borderRadius: '8px',
  fontSize: '15px',
  fontWeight: '500',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  letterSpacing: '0.05px',
  fontFamily: interFont,
  '&:hover': {
    backgroundColor: themeColors.orangeColor,
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 25px rgba(255, 85, 50, 0.25)',
  },
  [theme.breakpoints.down('lg')]: { 
    fontSize: "14px",
    padding: '9px 35px',
    letterSpacing: '0.04px',
  },
  [theme.breakpoints.down('md')]: { 
    fontSize: "14px",
    padding: '9px 30px',
    letterSpacing: '0.03px',
  },
  [theme.breakpoints.down('sm')]: { 
    fontSize: "13px",
    padding: '8px 25px',
    width: '100%',
    maxWidth: '250px',
    letterSpacing: '0.02px',
  }
}));

const ServiceNumber = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 500,
  letterSpacing: '-0.04px',
  fontFamily: outfitFont,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
    letterSpacing: '-0.03px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    letterSpacing: '-0.02px',
  }
}));

const ServiceTitle = styled(Typography)(({ theme, isActive }) => ({
  fontSize: '1.5rem',
  fontWeight: isActive ? 500 : 600,
  lineHeight: 1.1,
  wordBreak: 'break-word',
  letterSpacing: isActive ? '-0.03px' : '-0.02px',
  fontFamily: outfitFont,
  marginBottom: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
    letterSpacing: isActive ? '-0.02px' : '-0.015px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.95rem',
    letterSpacing: isActive ? '-0.015px' : '-0.01px',
    lineHeight: 1.1,
  }
}));

const ServiceDescription = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  lineHeight: 1.4,
  letterSpacing: '0.01px',
  fontFamily: interFont,
  marginTop: '6px',
  marginLeft:'10px',
  marginBottom: '0',
  padding: '0',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
    letterSpacing: '0.008px',
    marginTop: '5px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
    letterSpacing: '0.006px',
    lineHeight: 1.35,
    marginTop: '4px',
  }
}));

function SolutionSection() {
  const containerRef = useRef(null);
  const serviceRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prevActiveIndex, setPrevActiveIndex] = useState(0);
  const [direction, setDirection] = useState('down');
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Media queries
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const services = [
    { num: "01.", title: "Creative Design Solutions", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { num: "02.", title: "Web Development Solutions", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { num: "03.", title: "Digital Engagement Solutions", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
  ];

   useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  // Section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setIsVisible(true);
      }),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Optimized scroll handling for mobile
  const handleScroll = useCallback(() => {
    if (isScrolling || !containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const containerTop = containerRect.top;
    const containerBottom = containerRect.bottom;

    if (containerTop > viewportHeight || containerBottom < 0) return;

    let newActiveIndex = activeIndex;
    let minDistance = Infinity;

    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        const refRect = ref.getBoundingClientRect();
        const threshold = isMobile ? 100 : viewportHeight / 3;
        const refCenter = refRect.top + refRect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distance = Math.abs(refCenter - viewportCenter);
        
        const adjustedDistance = isMobile ? 
          Math.abs(refRect.top - threshold) : distance;
          
        if (adjustedDistance < minDistance) {
          minDistance = adjustedDistance;
          newActiveIndex = index;
        }
      }
    });

    const newDirection = newActiveIndex > activeIndex ? 'down' : 'up';
    setDirection(newDirection);

    if (newActiveIndex !== activeIndex) {
      setIsScrolling(true);
      setPrevActiveIndex(activeIndex);
      setActiveIndex(newActiveIndex);
      setTimeout(() => setIsScrolling(false), isMobile ? 300 : 400);
    }
  }, [activeIndex, isScrolling, isMobile]);

  useEffect(() => {
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { handleScroll(); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  const handleServiceClick = useCallback((index) => {
    if (isScrolling || index === activeIndex) return;
    setIsScrolling(true);
    setDirection(index > activeIndex ? 'down' : 'up');
    setPrevActiveIndex(activeIndex);
    setActiveIndex(index);

    if (serviceRefs.current[index]) {
      const refRect = serviceRefs.current[index].getBoundingClientRect();
      const offset = isMobile ? 50 : 70;
      const scrollTo = refRect.top + window.pageYOffset - offset;
      
      window.scrollTo({ 
        top: scrollTo, 
        behavior: 'smooth' 
      });
    }

    setTimeout(() => setIsScrolling(false), isMobile ? 400 : 500);
  }, [activeIndex, isScrolling, isMobile]);

  // Updated animation styles
  const getServiceAnimationStyle = (index) => {
    if (index === activeIndex) return { 
      opacity: 1, 
      transform: 'scale(1.005) translateY(-1px)',
      transition: 'all 0.25s ease'
    };
    if (index === prevActiveIndex) return { 
      opacity: 0.7, 
      transform: 'scale(0.995)',
      transition: 'all 0.2s ease'
    };
    return { 
      opacity: 0.5, 
      transform: 'scale(0.99)',
      transition: 'all 0.2s ease'
    };
  };

   const getDescAnimationStyle = (index) => {
    if (index === activeIndex) return { 
      opacity: 1, 
      transform: 'translateY(0)', 
      maxHeight: 'auto',
      overflow: 'hidden',
      marginTop: '6px',
      transition: 'all 0.25s ease 0.05s'
    };
    return { 
      opacity: 0, 
      transform: 'translateY(3px)', 
      maxHeight: '0px', 
      overflow: 'hidden',
      marginTop: '0px',
      transition: 'all 0.2s ease'
    };
  };

  return (
    <ServicesContainer ref={containerRef}>
      <SectionHeading>
        <SectionTitle variant="h1">
          <SectionImage src={Solution} alt="Solution-Title" />
        </SectionTitle>
        <SectionSubtitle variant="subtitle1">What We Do</SectionSubtitle>
      </SectionHeading>

      <ContentTitle variant="h2" sx={{ 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? "translateY(0)" : "translateY(25px)", 
        transition: "all 0.4s ease 0.1s"
      }}>
        Popular Courses We Offers
      </ContentTitle>

      <ServicesGrid>
        <ServicesList>
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            return (
              <Card
                key={index}
                ref={el => serviceRefs.current[index] = el}
                onClick={() => handleServiceClick(index)}
                sx={{
                  background: themeColors.pureWhite,
                  padding: { xs: '10px', sm: '14px', md: '18px' },
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: isActive ? 
                    '0 6px 20px rgba(31,41,55,0.08)' : 
                    '0 3px 10px rgba(0,0,0,0.04)',
                  marginBottom: { xs: '6px', md: '10px' },
                  border: isActive ? 
                    `1.5px solid ${themeColors.orangeColor}20` : 
                    '1px solid transparent',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  ...getServiceAnimationStyle(index),
                  '@media (hover: hover) and (pointer: fine)': {
                    '&:hover': {
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.015)',
                    }
                  }
                }}
              >
                 <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: { xs: '6px', md: '10px' },
                  marginBottom: isActive ? '6px' : '0'
                }}>
                   <Box sx={{
                    width: { xs: '32px', sm: '36px', md: '40px' },
                    height: { xs: '32px', sm: '36px', md: '40px' },
                    minWidth: { xs: '32px', sm: '36px', md: '40px' },
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                     transition: 'all 0.15s ease',
                    flexShrink: 0,
                  }}>
                    <ServiceNumber variant="h3">
                      {service.num}
                    </ServiceNumber>
                  </Box>

                   <ServiceTitle variant="h4" isActive={isActive} sx={{ 
                    flex: 1,
                    marginBottom: 0,
                    lineHeight: 1.1
                  }}>
                    {service.title}
                  </ServiceTitle>
                </Box>
                
                 <Box sx={getDescAnimationStyle(index)}>
                  <ServiceDescription variant="body1">
                    {service.desc}
                  </ServiceDescription>
                </Box>
              </Card>
            );
          })}
        </ServicesList>

        <ServiceImage sx={{ 
          opacity: isVisible ? 1 : 0, 
          transform: isVisible ? 'translateX(0)' : (isDesktop ? 'translateX(25px)' : 'translateY(15px)'),
          transition: `all 0.5s ease ${isDesktop ? '0s' : '0.25s'}`
        }}>
          <img src={imager} alt="Education" />
        </ServiceImage>
      </ServicesGrid>

      <ButtonContainer sx={{ 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
        transition: 'all 0.4s ease 0.3s'
      }}>
        <BlackButton 
          component={Link} 
          to="/services"
          sx={{
            minHeight: { xs: '40px', md: 'auto' },
            fontSize: { xs: '13px', md: '14px' },
            padding: { xs: '8px 25px', md: '10px 35px' }
          }}
        >
          Explore All Services
        </BlackButton>
      </ButtonContainer>
    </ServicesContainer>
  );
}

export default SolutionSection;
