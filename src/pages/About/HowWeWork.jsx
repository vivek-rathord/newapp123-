 import React, { useEffect, useRef, useState, useCallback } from "react";
import { Box, Typography, Container, Paper } from "@mui/material";

const stepsData = [
  { num: "01", title: "Understand The Need", desc: "We begin by listening and understanding your goals." },
  { num: "02", title: "Plan With Purpose", desc: "We align our strategy and map measurable outcomes." },
  { num: "03", title: "Execute With Clarity", desc: "Design, build and iterate with clear milestones." },
  { num: "04", title: "Learn & Improve", desc: "We gather feedback and refine the solution." },
];

const HowWeWork = () => {
  const containerRef = useRef(null);
  const stepRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prevActiveIndex, setPrevActiveIndex] = useState(0);
  const [direction, setDirection] = useState('down');
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle mouse move for parallax effect
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

  // Intersection observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll handler for smooth step transitions
  const handleScroll = useCallback(() => {
    if (isScrolling || !containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const containerTop = containerRect.top;
    const containerBottom = containerRect.bottom;

    // Check if container is in viewport
    if (containerTop > viewportHeight || containerBottom < 0) return;

    let newActiveIndex = activeIndex;
    let minDistance = Infinity;

    // Find the step closest to center of viewport
    stepRefs.current.forEach((step, index) => {
      if (step) {
        const stepRect = step.getBoundingClientRect();
        const stepCenter = stepRect.top + stepRect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distance = Math.abs(stepCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          newActiveIndex = index;
        }
      }
    });

    // Determine scroll direction
    const newDirection = newActiveIndex > activeIndex ? 'down' : 'up';
    setDirection(newDirection);

    // Only update if index changed
    if (newActiveIndex !== activeIndex) {
      setIsScrolling(true);
      setPrevActiveIndex(activeIndex);
      setActiveIndex(newActiveIndex);

      // Reset scrolling flag after animation
      setTimeout(() => {
        setIsScrolling(false);
      }, 600);
    }
  }, [activeIndex, isScrolling]);

  // Add scroll event listener
  useEffect(() => {
    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Auto-smooth scroll to active step when clicked
  const handleStepClick = useCallback((index) => {
    if (isScrolling || index === activeIndex) return;

    setIsScrolling(true);
    const newDirection = index > activeIndex ? 'down' : 'up';
    setDirection(newDirection);
    setPrevActiveIndex(activeIndex);
    setActiveIndex(index);

    if (stepRefs.current[index]) {
      // Calculate scroll position for perfect centering
      const stepRect = stepRefs.current[index].getBoundingClientRect();
      const stepTop = stepRect.top + window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const scrollTo = stepTop - (viewportHeight / 2) + (stepRect.height / 2);

      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      });
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  }, [activeIndex, isScrolling]);

  // Get animation style based on step state and direction
  const getStepAnimationStyle = (index) => {
    const isActive = index === activeIndex;
    const wasActive = index === prevActiveIndex;
    const isUpcoming = index > activeIndex;
    
    if (isActive) {
      return {
        opacity: 1,
        transform: 'translateY(0)',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      };
    }
    
    if (wasActive) {
      return {
        opacity: 0.3,
        transform: direction === 'down' ? 'translateY(-10px)' : 'translateY(10px)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
      };
    }
    
    if (isUpcoming) {
      return {
        opacity: direction === 'down' ? 0.4 : 0.2,
        transform: 'translateY(5px)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
      };
    }
    
    return {
      opacity: 0.2,
      transform: 'translateY(0)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  // Get description animation style
  const getDescAnimationStyle = (index) => {
    const isActive = index === activeIndex;
    
    if (isActive) {
      return {
        opacity: 1,
        transform: 'translateY(0)',
        maxHeight: '200px',
        marginTop: '12px',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
      };
    }
    
    return {
      opacity: 0,
      transform: 'translateY(5px)',
      maxHeight: '0px',
      marginTop: '0px',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  return (
    <Container
      ref={containerRef}
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.8) 0%, transparent 50%)`,
        transition: "background 0.3s ease-out",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 85, 50, 0.05) 0%, transparent 70%)",
          border: "1px dashed rgba(255, 85, 50, 0.1)",
          animation: "rotate 20s linear infinite",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1s ease",
          "@keyframes rotate": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" },
          gap: { xs: "30px", md: "60px" },
          padding: { xs: "20px", md: "60px 30px" },
          alignItems: "start",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Left Column - Fixed */}
        <Box sx={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "25px",
          position: "sticky",
          top: "80px",
          height: "fit-content",
          backgroundColor: "#FFFFFF",
        }}>
          {/* Badge */}
          <Box
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "1.2px",
                backgroundColor: "#FF5532",
                color: "#ffffff",
                textTransform: "uppercase",
                display: "inline-flex",
                padding: "5px 20px",
                borderRadius: "109px",
                width: "fit-content",
              }
            }
            >
              How We Work
            </Typography>
          </Box>

          {/* Title - SHOWING (NOT HIDDEN) */}
          <Box
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.2rem", md: "3rem" },
                fontWeight: 800,
                lineHeight: 1.1,
                background: "linear-gradient(135deg, #111 0%, #333 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: '"Outfit", sans-serif',
              }}
            >
              Collaboration
              <br />
              <Box component="span" sx={{ color: "#FF5532" }}>
                Creativity
              </Box>
              &nbsp;&& Clarity
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "#666",
                fontSize: "1rem",
                lineHeight: 1.6,
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 400,
              }}
            >
              A structured approach to delivering exceptional results through
              transparent collaboration and innovative thinking.
            </Typography>
          </Box>
        </Box>

        {/* Right Column - Steps in white background grid */}
        <Box sx={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: { xs: "40px", md: "60px" },
          position: "relative",
          paddingTop: "20px",
          paddingBottom: "40px",
          backgroundColor: "#FFFFFF",
        }}>
          {/* Removed vertical line - Simple layout */}

          {stepsData.map((step, index) => {
            const stepAnimation = getStepAnimationStyle(index);
            const descAnimation = getDescAnimationStyle(index);
            const isActive = index === activeIndex;

            return (
              <Box
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                onClick={() => handleStepClick(index)}
                sx={{
                  position: "relative",
                  zIndex: 1,
                  cursor: "pointer",
                  minHeight: { xs: "100px", md: "120px" },
                  display: "flex",
                  alignItems: "flex-start",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  padding: "20px",
                  border: isActive 
                    ? "2px solid rgba(255, 85, 50, 0.2)" 
                    : "1px solid rgba(0, 0, 0, 0.05)",
                  boxShadow: isActive 
                    ? "0 8px 30px rgba(31, 41, 55, 0.08)" 
                    : "0 4px 15px rgba(0, 0, 0, 0.02)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    borderColor: "rgba(255, 85, 50, 0.3)",
                    boxShadow: "0 10px 35px rgba(31, 41, 55, 0.1)",
                    transform: "translateY(-2px)",
                  },
                  ...stepAnimation,
                }}
              >
                {/* Number INSIDE THE BOX - Left side */}
                <Box
                  sx={{
                    width: { xs: "50px", md: "60px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                      fontWeight: 800,
                      fontFamily: '"Outfit", sans-serif',
                      color: isActive ? "#FF5532" : 
                             index < activeIndex ? "#FF9A3D" : "#999",
                      backgroundColor: isActive 
                        ? "rgba(255, 85, 50, 0.08)" 
                        : index < activeIndex 
                        ? "rgba(255, 154, 61, 0.05)" 
                        : "rgba(0, 0, 0, 0.02)",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {step.num}
                  </Typography>
                </Box>

                {/* Step Content */}
                <Box sx={{ 
                  flex: 1,
                  paddingLeft: { xs: "20px", md: "25px" }
                }}>
                  {/* Step Heading - ALWAYS VISIBLE */}
                  <Typography
                    sx={{
                      fontSize: { xs: "1.2rem", md: "1.5rem" },
                      fontWeight: isActive ? 800 : 600,
                      mb: isActive ? "10px" : "0",
                      fontFamily: '"Outfit", sans-serif',
                      color: isActive 
                        ? "#111" 
                        : index < activeIndex
                        ? "#666"
                        : "#999",
                      lineHeight: 1.2,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {step.title}
                  </Typography>

                  {/* Step Description - Only shows when active */}
                  <Box sx={{ ...descAnimation }}>
                    <Box
                      sx={{
                        paddingTop: "12px",
                        borderTop: isActive ? "1px solid rgba(255, 85, 50, 0.1)" : "none",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#555",
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          fontFamily: '"Outfit", sans-serif',
                          fontWeight: 400,
                          paddingLeft: "8px",
                          borderLeft: isActive ? "3px solid #FF5532" : "none",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        {step.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Active indicator - Right side */}
                {isActive && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#FF5532",
                      animation: "pulseActive 1.5s ease-in-out infinite",
                      "@keyframes pulseActive": {
                        "0%, 100%": { transform: "scale(1)", opacity: 1 },
                        "50%": { transform: "scale(1.5)", opacity: 0.7 },
                      },
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default HowWeWork;