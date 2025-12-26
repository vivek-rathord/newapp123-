 import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Card, Grid, styled, useTheme, useMediaQuery } from "@mui/material";
import imager from "../../assets/Images/heroimg.jpg";
import Education from "../../assets/Images/Education.svg";

const themeColors = {
  orangeColor: '#FF5532',
  deepBlack: '#111111',
  darkGray: '#575757',
  pureWhite: '#FFFFFF',
};

const ServicesContainer = styled(Box)(({ theme }) => ({
  padding: '80px 0px',
  width: '100%',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  minHeight: '1130px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    minHeight: '1000px',
    padding: '70px 20px',
  },
  [theme.breakpoints.down('md')]: {
    minHeight: 'auto',
    padding: '60px 20px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '40px 15px',
    minHeight: 'auto',
  }
}));

const SectionHeading = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  marginBottom: '60px',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    marginBottom: '50px',
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: '40px',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '30px',
  }
}));

const SectionImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  maxHeight: "160px",
  objectFit: "contain",
  [theme.breakpoints.down('lg')]: {
    maxHeight: "140px",
  },
  [theme.breakpoints.down('md')]: {
    maxHeight: "120px",
  },
  [theme.breakpoints.down('sm')]: {
    maxHeight: "90px",
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  padding: '20px 0px',
  fontSize: '5rem',
  [theme.breakpoints.down('xl')]: { 
    fontSize: '4.5rem',
  },
  [theme.breakpoints.down('lg')]: { 
    fontSize: '4rem',
    padding: '18px 0px' 
  },
  [theme.breakpoints.down('md')]: { 
    fontSize: '3.5rem',
    padding: '15px 0px' 
  },
  [theme.breakpoints.down('sm')]: { 
    fontSize: '2.5rem',
    padding: '10px 0px',
  },
  '@media (max-width: 480px)': {
    fontSize: '2rem',
  }
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '5px 20px',
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  borderRadius: '25px',
  fontSize: '14px',
  fontWeight: '500',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('lg')]: { 
    fontSize: '13px',
    padding: '4px 18px' 
  },
  [theme.breakpoints.down('md')]: { 
    fontSize: '12.5px',
    padding: '3px 16px' 
  },
  [theme.breakpoints.down('sm')]: { 
    fontSize: '11px',
    padding: '3px 14px',
    whiteSpace: 'normal',
    textAlign: 'center',
    width: '90%',
    maxWidth: '200px',
  }
}));

const ContentTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: '700',
  marginBottom: '40px',
  textAlign: 'center',
  padding: '0 20px',
  [theme.breakpoints.down('xl')]: { 
    fontSize: '2.8rem',
  },
  [theme.breakpoints.down('lg')]: { 
    fontSize: '2.6rem',
    marginBottom: '35px' 
  },
  [theme.breakpoints.down('md')]: { 
    fontSize: '2.3rem',
    marginBottom: '30px',
    padding: '0 15px',
  },
  [theme.breakpoints.down('sm')]: { 
    fontSize: '1.8rem',
    marginBottom: '25px',
    padding: '0 10px',
    lineHeight: 1.3,
  },
  '@media (max-width: 480px)': {
    fontSize: '1.6rem',
  }
}));

// Improved grid layout
const ServicesGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  gap: '50px',
  width: '100%',
  maxWidth: '1300px',
  margin: '0 auto',
  
  [theme.breakpoints.down('lg')]: {
    gap: '40px',
    maxWidth: '1100px',
  },
  
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '35px',
  },
  
  [theme.breakpoints.down('sm')]: {
    gap: '30px',
  }
}));

const ServicesList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  width: '100%',
  
  [theme.breakpoints.up('md')]: {
    flex: '1 1 50%',
    maxWidth: '600px',
  },
  
  [theme.breakpoints.down('md')]: {
    maxWidth: '650px',
  }
}));

const ServiceImage = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  
  [theme.breakpoints.up('md')]: {
    flex: '1 1 50%',
    position: 'sticky',
    top: '120px',
    height: 'fit-content',
  },
  
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '600px',
  },
  
  '& img': {
    width: '100%',
    height: 'auto',
    aspectRatio: '4/3',
    borderRadius: '20px',
    objectFit: 'cover',
    boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
    transition: 'all 0.5s ease',
    
    [theme.breakpoints.down('lg')]: {
      maxWidth: '500px',
    },
    
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      aspectRatio: '16/9',
    },
    
    [theme.breakpoints.down('sm')]: {
      borderRadius: '15px',
      aspectRatio: '4/3',
    }
  },
  
  '&:hover img': {
    transform: 'scale(1.03)',
    boxShadow: '0 25px 70px rgba(0,0,0,0.2)',
  }
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginTop: '50px',
  padding: '0 15px',
  [theme.breakpoints.down('lg')]: {
    marginTop: '45px',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '40px',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '35px',
  }
}));

const BlackButton = styled(Button)(({ theme }) => ({
  backgroundColor: themeColors.deepBlack,
  color: themeColors.pureWhite,
  padding: '12px 50px',
  borderRadius: '10px',
  fontSize: '16px',
  fontWeight: '500',
  textTransform: 'none',
  transition: 'all 0.4s ease',
  '&:hover': {
    backgroundColor: themeColors.orangeColor,
    transform: 'translateY(-3px)',
    boxShadow: '0 15px 35px rgba(255, 85, 50, 0.3)',
  },
  [theme.breakpoints.down('lg')]: { 
    fontSize: "15px",
    padding: '11px 45px' 
  },
  [theme.breakpoints.down('md')]: { 
    fontSize: "15px",
    padding: '11px 40px',
  },
  [theme.breakpoints.down('sm')]: { 
    fontSize: "14px",
    padding: '12px 35px',
    width: '100%',
    maxWidth: '280px',
  }
}));

function EducationSection() {
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
    { num: "01", title: "Creative Design Solutions", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { num: "02", title: "Web Development Solutions", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { num: "03", title: "Digital Marketing", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { num: "04", title: "Digital Engagement Solutions", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos." }
  ];

  // Mouse move parallax - sirf desktop ke liye
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

  // Mobile ke liye optimized scroll handling
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
        // Mobile ke liye adjust threshold
        const threshold = isMobile ? 150 : viewportHeight / 3;
        const refCenter = refRect.top + refRect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distance = Math.abs(refCenter - viewportCenter);
        
        // Active card ko thoda upar dikhane ke liye mobile par
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
      setTimeout(() => setIsScrolling(false), isMobile ? 400 : 600);
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
      // Mobile par scroll position adjust karna
      const offset = isMobile ? 80 : 100;
      const scrollTo = refRect.top + window.pageYOffset - offset;
      
      window.scrollTo({ 
        top: scrollTo, 
        behavior: 'smooth' 
      });
    }

    setTimeout(() => setIsScrolling(false), isMobile ? 600 : 800);
  }, [activeIndex, isScrolling, isMobile]);

  const getServiceAnimationStyle = (index) => {
    if (index === activeIndex) return { 
      opacity: 1, 
      transform: 'scale(1.02) translateY(-3px)', 
      transition: 'all 0.4s ease' 
    };
    if (index === prevActiveIndex) return { 
      opacity: 0.7, 
      transform: 'scale(0.98)', 
      transition: 'all 0.3s ease' 
    };
    return { 
      opacity: 0.5, 
      transform: 'scale(0.97)', 
      transition: 'all 0.3s ease' 
    };
  };

  const getDescAnimationStyle = (index) => {
    if (index === activeIndex) return { 
      opacity: 1, 
      transform: 'translateY(0)', 
      maxHeight: '200px', 
      marginTop: '15px', 
      transition: 'all 0.5s ease 0.1s' 
    };
    return { 
      opacity: 0, 
      transform: 'translateY(5px)', 
      maxHeight: '0px', 
      marginTop: '0px', 
      transition: 'all 0.3s ease' 
    };
  };

  return (
    <ServicesContainer ref={containerRef}>
      <SectionHeading>
        <SectionTitle>
          <SectionImage src={Education} alt="Education-Title" />
        </SectionTitle>
        <SectionSubtitle>What We Do</SectionSubtitle>
      </SectionHeading>

      <ContentTitle sx={{ 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? "translateY(0)" : "translateY(30px)", 
        transition: "all 0.6s ease 0.2s" 
      }}>
        Popular Courses We Offers
      </ContentTitle>

      <ServicesGrid>
        <ServiceImage sx={{ 
          opacity: isVisible ? 1 : 0, 
          transform: isVisible ? 'translateX(0)' : 'translateX(-30px)', 
          transition: 'all 0.8s ease' 
        }}>
          <img src={imager} alt="Education" />
        </ServiceImage>

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
                  padding: { xs: '18px', sm: '22px', md: '25px' },
                  width: '100%',
                  borderRadius: '15px',
                  boxShadow: isActive ? 
                    '0 15px 40px rgba(31,41,55,0.15)' : 
                    '0 8px 25px rgba(0,0,0,0.08)',
                  marginBottom: { xs: '15px', md: '20px' },
                  border: isActive ? 
                    `2px solid ${themeColors.orangeColor}20` : 
                    '1px solid transparent',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  ...getServiceAnimationStyle(index),
                  // Mobile touch improvements
                  '@media (hover: hover) and (pointer: fine)': {
                    '&:hover': {
                      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.03)',
                    }
                  }
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: { xs: '12px', md: '15px' } 
                }}>
                  <Box sx={{
                    width: { xs: '40px', sm: '45px', md: '50px' },
                    height: { xs: '40px', sm: '45px', md: '50px' },
                    minWidth: { xs: '40px', sm: '45px', md: '50px' },
                    borderRadius: '10px',
                      display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}>
                    <Typography sx={{ 
                      fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                      fontWeight: 600, 
                     }}>
                      {service.num}
                    </Typography>
                  </Box>

                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography sx={{ 
                      fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                      fontWeight: isActive ? 700 : 600, 
                       lineHeight: 1.3,
                      wordBreak: 'break-word'
                    }}>
                      {service.title}
                    </Typography>
                    <Box sx={getDescAnimationStyle(index)}>
                      <Typography sx={{ 
                         fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem' },
                        lineHeight: 1.6,
                        overflow: 'hidden'
                      }}>
                        {service.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            );
          })}
        </ServicesList>
      </ServicesGrid>

      <ButtonContainer sx={{ 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)', 
        transition: 'all 0.6s ease 0.6s' 
      }}>
        <BlackButton 
          component={Link} 
          to="/services"
          sx={{
            // Mobile touch target
            minHeight: { xs: '48px', md: 'auto' }
          }}
        >
          Explore All Services
        </BlackButton>
      </ButtonContainer>
    </ServicesContainer>
  );
}

export default EducationSection;  