import React, { useEffect, useRef, useState, useCallback } from "react";
import { Box, Typography, Container, Paper } from "@mui/material";

const stepsData = [
  { num: "01", title: "Understand The Need", desc: "We begin by listening - whether it’s a clients business goal or a student’s learning objectives. This help us design the right path forward." },
  { num: "02", title: "Plan With Purpose", desc: "We align our strategy with the goals. For the clients, this means tailored digital solutions. For learners, it means practical, job-ready training plans." },
  { num: "03", title: "Execute With Clarity", desc: "Design, code, teach - whether we do, we do with detail, quality, and user-focused thinking. Every deliverable is built to perform." },
  { num: "04", title: "Learn & Improve", desc: "We gather feedback, track, results, and evolve continuously. Because the best outcomes from listening, learning, and refining - together." },
];

const HowWeWork = () => {
  const containerRef = useRef(null);
  const stepRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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
        // py: { xs: 8, md: 2 ,sm:0,},
        position: "relative",
        overflow: "hidden",
        // background:"red",
      }}
    >
      {/* Animated background elements */}


      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" },
          gap: { xs: "30px", md: "70px" },
          padding: { xs: "20px", md: "60px 30px" },
          alignItems: "start",
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
          // backgroundColor: "#FFFFFF",
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
                fontWeight: 700,
                lineHeight: 1.2,
                mb: { xs: "20px", sm: "20px", md: 0 },
              }}
            >
              Collaboration Creativity   Clarity
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
          paddingBottom: "40px 30px",
          // backgroundColor: "#FFFFFF",
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
                  minHeight: { xs: "100px", md: "198px" },
                  display: "flex",
                  alignItems: "flex-start",
                  textAlign: 'left',
                  backgroundColor: "#FFFFFF",
                 borderRadius: { xs: "16px", sm: "20px", md: "24px" },


                  padding: {
                    xs: "20px 0px",
                    // sm:"20px px 0px 0px",
                    md: "40px 40px 40px 0px",
                  },
                  // border: isActive 
                  //   ? "2px solid rgba(255, 85, 50, 0.2)" 
                  //   : "1px solid rgba(0, 0, 0, 0.05)",
                  boxShadow: isActive
                    ? "0 8px 30px rgba(31, 41, 55, 0.08)"
                    : "0 4px 15px rgba(0, 0, 0, 0.02)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    // borderColor: "rgba(255, 85, 50, 0.3)",
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
                  {/* Step Number */}
                  <Typography
                    sx={{
                      // POSITION
                      position: { xs: "static", md: "absolute" },
                      left: { md: "-70px" },
                      top: { md: "30%" },
                      transform: { md: "translateY(-50%)" },

                      // ALIGNMENT
                      alignSelf: { xs: "flex-start", md: "unset" },

                      // SIZE
                      fontSize: isActive
                        ? { xs: "1.4rem", sm: "1.6rem", md: "2.5rem" }
                        : { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" },

                      fontWeight: 400,
                      lineHeight: 1,

                      // SPACING
                      mb: { xs: "8px", md: 0 },

                      // COLOR
                      color: isActive ? "#111" : "#999",

                      // SM STYLE (INSIDE LOOK)
                      backgroundColor: {
                        // xs: "rgba(255,85,50,0.08)",
                        md: "transparent",
                      },
                      padding: {
                        xs: "4px 12px",
                        md: 0,
                      },
                      borderRadius: {
                        xs: "20px",
                        md: 0,
                      },

                      transition: "all 0.4s ease",
                      zIndex: 5,
                    }}
                  >
                    {step.num}
                  </Typography>

                </Box>

                {/* Step Content */}
                <Box sx={{
                  flex: 1,
                  paddingLeft: { xs: "20px", md: "1.5rem" }
                }}>
                  {/* Step Heading - ALWAYS VISIBLE */}
                  <Typography
                    sx={{
                      fontSize: { xs: "1.2rem", md: "1.5rem" },
                      fontWeight: isActive ? 800 : 600,
                      mb: isActive ? "10px" : "0",
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
                        // borderTop: isActive ? "1px solid rgba(255, 85, 50, 0.1)" : "none",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#555",
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          fontWeight: 400,
                          paddingLeft: "1px",
                          // borderLeft: isActive ? "3px solid #FF5532" : "none",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        {step.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Active indicator - Right side */}
                {/* {isActive && (
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
                )} */}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default HowWeWork;

