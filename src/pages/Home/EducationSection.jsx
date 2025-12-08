import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Card, Grid, styled } from "@mui/material";
import imager from "../../assets/Images/heroimg.jpg";

const themeColors = {
  orangeColor: '#FF5532',
  deepBlack: '#111111',
  darkGray: '#575757',
  pureWhite: '#FFFFFF',
};

const ServicesContainer = styled(Box)(({ theme }) => ({
  padding: '100px 0px',
  width: '100%',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  minHeight: '1200px',
  [theme.breakpoints.down('md')]: {
    padding: '60px 0px',
    minHeight: '1000px',
  }
}));

const SectionHeading = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  marginBottom: '60px',
  overflow: 'hidden',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '6rem',
  fontWeight: '700',
  letterSpacing: '8px',
  padding: '20px 0px',
  background: 'rgba(206, 207, 202, 1)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  [theme.breakpoints.down('md')]: { fontSize: '4rem' },
  [theme.breakpoints.down('sm')]: { fontSize: '3rem' },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '4px 20px',
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  borderRadius: '25px',
  fontSize: '16px',
  fontWeight: '600',
  whiteSpace: 'nowrap',
}));

const ContentTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '40px',
  background: 'linear-gradient(135deg, #111111 0%, #575757 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  [theme.breakpoints.down('md')]: { fontSize: '2rem' },
}));

const ServicesGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '50px',
  maxWidth: '1300px',
  margin: '0 auto',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
  }
}));

const ServicesList = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  padding: '0px 40px',
  [theme.breakpoints.down('md')]: {
    padding: '0px',
    width: '100%',
    minWidth: 'auto',
  }
}));

const ServiceImage = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  '& img': {
    width: '100%',
    maxWidth: '400px',
    height: '350px',
    borderRadius: '20px',
    objectFit: 'cover',
    boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
    transition: 'all 0.5s ease',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
    boxShadow: '0 25px 70px rgba(0,0,0,0.2)',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: 'auto',
    width: '90%',
    '& img': { height: '300px' },
  }
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginTop: '50px',
}));

const BlackButton = styled(Button)(({ theme }) => ({
  backgroundColor: themeColors.deepBlack,
  color: themeColors.pureWhite,
  padding: '15px 50px',
  borderRadius: '10px',
  fontSize: '16px',
  fontWeight: '600',
  textTransform: 'none',
  transition: 'all 0.4s ease',
  '&:hover': {
    backgroundColor: themeColors.orangeColor,
    transform: 'translateY(-3px)',
    boxShadow: '0 15px 35px rgba(255, 85, 50, 0.3)',
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
  const [scrollProgress, setScrollProgress] = useState(0);

  const services = [
    { num: "01", title: "Creative Design Solutions", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { num: "02", title: "Web Development Solutions", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { num: "03", title: "Digital Marketing", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { num: "04", title: "Digital Engagement Solutions", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos." }
  ];

  // Mouse move parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  // Scroll handling
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
        const refCenter = refRect.top + refRect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distance = Math.abs(refCenter - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
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
      setTimeout(() => setIsScrolling(false), 600);
    }
  }, [activeIndex, isScrolling]);

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
      const scrollTo = refRect.top + window.pageYOffset - (window.innerHeight / 2) + (refRect.height / 2);
      window.scrollTo({ top: scrollTo, behavior: 'smooth' });
    }

    setTimeout(() => setIsScrolling(false), 800);
  }, [activeIndex, isScrolling]);

  const getServiceAnimationStyle = (index) => {
    if (index === activeIndex) return { opacity: 1, transform: 'scale(1.02) translateY(-3px)', transition: 'all 0.6s ease' };
    if (index === prevActiveIndex) return { opacity: 0.5, transform: 'scale(0.98)', transition: 'all 0.5s ease' };
    if (index > activeIndex) return { opacity: 0.7, transform: 'scale(0.99)', transition: 'all 0.5s ease' };
    return { opacity: 0.4, transform: 'scale(0.97)', transition: 'all 0.5s ease' };
  };

  const getDescAnimationStyle = (index) => index === activeIndex
    ? { opacity: 1, transform: 'translateY(0)', maxHeight: '200px', marginTop: '15px', transition: 'all 0.7s ease 0.1s' }
    : { opacity: 0, transform: 'translateY(5px)', maxHeight: '0px', marginTop: '0px', transition: 'all 0.5s ease' };

  return (
    <ServicesContainer 
      ref={containerRef}
      sx={{
        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 85, 50, 0.05) 0%, transparent 50%)`,
        transition: "background 0.4s ease-out",
      }}
    >
      <SectionHeading sx={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}>
        <SectionTitle>EDUCATION</SectionTitle>
        <SectionSubtitle>What We Do</SectionSubtitle>
      </SectionHeading>

      <ContentTitle sx={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease 0.2s" }}>
        Popular Services We Offers
      </ContentTitle>

      <ServicesGrid container>
        <Grid item xs={12} lg={6} display="flex" justifyContent="center">
          <ServiceImage sx={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-30px)', transition: 'all 1.2s ease' }}>
            <img src={imager} alt="Education" />
          </ServiceImage>
        </Grid>

        <Grid item xs={12} lg={6} display="flex" justifyContent="center">
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
                    padding: '25px',
                    width: '100%',
                    maxWidth: '600px',
                    borderRadius: '15px',
                    boxShadow: isActive ? '0 25px 70px rgba(31,41,55,0.2)' : '0 10px 35px rgba(0,0,0,0.1)',
                    marginBottom: '20px',
                    border: isActive ? '2px solid rgba(255,85,50,0.15)' : '1px solid transparent',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    ...getServiceAnimationStyle(index),
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <Box sx={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: isActive ? 'rgba(255,85,50,0.12)' : 'rgba(0,0,0,0.03)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: isActive ? themeColors.orangeColor : '#999' }}>
                        {service.num}
                      </Typography>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ fontSize: '1.25rem', fontWeight: isActive ? 700 : 600, color: isActive ? themeColors.deepBlack : '#777' }}>
                        {service.title}
                      </Typography>
                      <Box sx={getDescAnimationStyle(index)}>
                        <Typography sx={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.7 }}>
                          {service.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              );
            })}
          </ServicesList>
        </Grid>
      </ServicesGrid>

      <ButtonContainer sx={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease 0.8s' }}>
        <Link to="/services" style={{ textDecoration: 'none' }}>
          <BlackButton>Explore All Services</BlackButton>
        </Link>
      </ButtonContainer>
    </ServicesContainer>
  );
}

export default EducationSection;
