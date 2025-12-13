import React, { useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const themeColors = {
  orangeColor: "#FF5532",
  deepBlack: "#111111",
  darkGray: "#575757",
  pureWhite: "#FFFFFF",
};

export default function Courses() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);


  const scrollLeft1 = () => scrollRef1.current.scrollBy({ left: -400, behavior: "smooth" });
  const scrollRight1 = () => scrollRef1.current.scrollBy({ left: 390, behavior: "smooth" });

  const scrollLeft2 = () => scrollRef2.current.scrollBy({ left: -400, behavior: "smooth" });
  const scrollRight2 = () => scrollRef2.current.scrollBy({ left: 390, behavior: "smooth" });

  const scrollLeft3 = () => scrollRef3.current.scrollBy({ left: -400, behavior: "smooth" });
  const scrollRight3 = () => scrollRef3.current.scrollBy({ left: 390, behavior: "smooth" });


  return (
    <>
      {/* Switch Buttons */}
      <Box sx={{
        bgcolor: themeColors.deepBlack,
        borderRadius: "8px",
        width: { xs: "95%", sm: 360, md: 363 },
        p: "12px 12px",
        m: "auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
      }}>
        <Link to="/education">
          <Button sx={{
            bgcolor: themeColors.deepBlack,
            color: themeColors.pureWhite,
            "&:hover": { bgcolor: themeColors.pureWhite, color: themeColors.deepBlack }
          }}>Regular Courses</Button>
        </Link>

        <Link to="/">
          <Button sx={{
            bgcolor: themeColors.deepBlack,
            color: themeColors.pureWhite,
            fontSize: "14px",
            fontWeight: "400",
            "&:hover": { bgcolor: themeColors.pureWhite, color: themeColors.deepBlack }
          }}>Industrial Training</Button>
        </Link>
      </Box>

      {/* Main wrapper */}
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        // background: "red",
        gap: 4,
        alignItems: "flex-start",
        width: "100%",
        margin: "70px auto",
      }}>

        {/* LEFT */}
        <Box sx={{ width: { xs: "100%", md: "460px" } }}>
          <Box sx={{
            display: "inline-block",
            background: themeColors.orangeColor,
            px: 1.5,
            py: 0.6,
            borderRadius: "109px",
            color: themeColors.pureWhite,
            fontSize: 14,
            fontWeight: 500,
          }}>
            Regular Courses
          </Box>

          <Typography sx={{
            mt: 2,
            fontSize: {
              xs: "2rem",
              sm: "2rem",
              md: "2vw",
              lg: "3rem",

            },
            fontWeight: 700,
            lineHeight: 1.3
          }}>
            Design & Multimedia Courses
          </Typography>
        </Box>

        {/* CARDS */}
        <Box sx={{
          width: {
            xs: "100%",
            sm: "420px",   
            md: "772px",   
          },

        }}>
          <Box
            ref={scrollRef1}
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 1.5,
              scrollSnapType: "x mandatory",
              paddingBottom: 1,
              "&::-webkit-scrollbar": { display: "none" },

            }}
          >

            {/* Card 1 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },
              minHeight: 200,
              flexShrink: 0,
              borderRadius: 4,
              padding: "20px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >
                Graphic Design
              </Typography>

              <Typography sx={{ mt: 1, color: themeColors.deepBlack }}>
                Foundation in graphic design entails learning the core principles and techniques essential for creating visually appealing and effective designs. This includes understanding concepts like typography, color theory, layout composition, and visual hierarchy, which serve as the building blocks for creating impactful graphic designs across various mediums.
              </Typography>
            </Box>

            {/* Card 2 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },

              minHeight: 270,
              flexShrink: 0,
              borderRadius: 4,
              padding: "25px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >UX/UI Design</Typography>
              <Typography sx={{ mt: 1, color: themeColors.deepBlack }}>
                UI (User Interface) refers to the visual elements and layout of a digital product, focusing on how users interact with it. UX (User Experience) encompasses the overall feel of the product, including ease of use, accessibility, and satisfaction. In short, UI is about design, while UX is about the overall user journey and satisfaction.
              </Typography>
            </Box>

            {/* Card 3 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },

              minHeight: 270,
              flexShrink: 0,
              borderRadius: 4,
              padding: "25px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >Web Development</Typography>
              <Typography sx={{ mt: 1, color: themeColors.deepBlack }}>
                The foundations of web development, such as HTML, CSS, and JavaScript, as well as more complex subjects like front-end frameworks and back-end development, are covered in this syllabus. Through projects and portfolio creation, students receive practical experience that equips them for careers in web development.
              </Typography>
            </Box>

            {/* Card 4 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },

              minHeight: 270,
              flexShrink: 0,
              borderRadius: 4,
              padding: "25px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >WordPress</Typography>
              <Typography sx={{ mt: 1, color: themeColors.deepBlack }}>
                Over 40% of all websites on the internet are powered by WordPress, a free and open-source content management system (CMS) that makes it simple for users to create and manage blogs and websites. Based on PHP and MySQL, WordPress provides a highly customizable platform with an extensive library of themes and plugins.
              </Typography>
            </Box>

            {/* Card 5 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },

              minHeight: 270,
              flexShrink: 0,
              borderRadius: 4,
              padding: "25px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >Digital Marketing</Typography>
              <Typography sx={{ mt: 1, color: themeColors.deepBlack }}>
                Join us to turn your passion for digital marketing into a successful career! Our 12-month Digital Marketing course covers key topics like SEO, social media marketing, content marketing, paid advertising, email marketing, and analytics. You'll gain practical experience and industry insights, learning to develop and optimize effective marketing strategies.
              </Typography>
            </Box>

            {/* Card 6 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },

              minHeight: "200px",
              flexShrink: 0,
              borderRadius: 4,
              padding: "25px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >Social Media Marketing</Typography>
              <Typography sx={{
                mt: 1,
                color: themeColors.deepBlack,
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}>
                With this extensive course, you will learn the fundamentals of social media marketing. Discover how to build focused advertising campaigns, manage online communities on Facebook, Instagram, Twitter, and LinkedIn, and produce interesting content. Acquire practical experience in real-life projects.
              </Typography>
            </Box>

          </Box>

          {/* SCROLL BUTTONS BELOW CARDS */}
          <Box sx={{
            display: "flex",
            gap: 2,
            mt: 3
          }}>

            <Button sx={{
              background: themeColors.deepBlack,
              color: themeColors.pureWhite,
              borderRadius: "8px",
              width: "32px",
              height: "32px",
              "&:hover": { background: themeColors.darkGray, color: themeColors.deepBlack }
            }}
              onClick={scrollLeft1}>
              <i className="fa-solid fa-arrow-left"></i>
            </Button>

            <Button sx={{
              background: themeColors.deepBlack,
              color: themeColors.pureWhite,
              borderRadius: "8px",
              width: "32px",
              height: "32px",
              "&:hover": { background: themeColors.darkGray, color: themeColors.deepBlack }
            }}
              onClick={scrollRight1}>
              <i className="fa-solid fa-arrow-right"></i>
            </Button>

          </Box>

        </Box>
      </Box>

      {/* Main wrapper 2 */}
        <Box sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        // background: "red",
        gap: 4,
        alignItems: "flex-start",
        width: "100%",
        margin: "70px auto",
      }}>

        {/* LEFT */}
        <Box sx={{ width: { xs: "100%", md: "460px" } }}>
          <Box sx={{
            display: "inline-block",
            background: themeColors.orangeColor,
            px: 1.5,
            py: 0.6,
            borderRadius: "109px",
            color: themeColors.pureWhite,
            fontSize: 14,
            fontWeight: 500,
          }}>
            Regular Courses
          </Box>

          <Typography sx={{
            mt: 2,
            fontSize: {
              xs: "2rem",
              sm: "2rem",
              md: "2vw",
              lg: "3rem",

            },
            fontWeight: 700,
            lineHeight: 1.3
          }}>
          CMS & Web Technologies Courses
          </Typography>
        </Box>

        {/* CARDS */}
        <Box sx={{
          width: {
            xs: "100%",
            sm: "420px",   
            md: "772px",   
          },

        }}>
          <Box
            ref={scrollRef2}
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 1.5,
              scrollSnapType: "x mandatory",
              paddingBottom: 1,
              "&::-webkit-scrollbar": { display: "none" },

            }}
          >

            {/* Card 1 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },
              minHeight: 200,
              flexShrink: 0,
              borderRadius: 4,
              padding: "20px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >
                Graphic Design
              </Typography>

              <Typography sx={{ mt: 1, color: themeColors.deepBlack }}>
                Foundation in graphic design entails learning the core principles and techniques essential for creating visually appealing and effective designs. This includes understanding concepts like typography, color theory, layout composition, and visual hierarchy, which serve as the building blocks for creating impactful graphic designs across various mediums.
              </Typography>
            </Box>

            {/* Card 2 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },

              minHeight: 270,
              flexShrink: 0,
              borderRadius: 4,
              padding: "25px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >UX/UI Design</Typography>
              <Typography sx={{ mt: 1, color: themeColors.deepBlack }}>
                UI (User Interface) refers to the visual elements and layout of a digital product, focusing on how users interact with it. UX (User Experience) encompasses the overall feel of the product, including ease of use, accessibility, and satisfaction. In short, UI is about design, while UX is about the overall user journey and satisfaction.
              </Typography>
            </Box>

            {/* Card 3 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },

              minHeight: 270,
              flexShrink: 0,
              borderRadius: 4,
              padding: "25px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >Web Development</Typography>
              <Typography sx={{ mt: 1, color: themeColors.deepBlack }}>
                The foundations of web development, such as HTML, CSS, and JavaScript, as well as more complex subjects like front-end frameworks and back-end development, are covered in this syllabus. Through projects and portfolio creation, students receive practical experience that equips them for careers in web development.
              </Typography>
            </Box>

            {/* Card 4 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },

              minHeight: 270,
              flexShrink: 0,
              borderRadius: 4,
              padding: "25px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >WordPress</Typography>
              <Typography sx={{ mt: 1, color: themeColors.deepBlack }}>
                Over 40% of all websites on the internet are powered by WordPress, a free and open-source content management system (CMS) that makes it simple for users to create and manage blogs and websites. Based on PHP and MySQL, WordPress provides a highly customizable platform with an extensive library of themes and plugins.
              </Typography>
            </Box>

            {/* Card 5 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },

              minHeight: 270,
              flexShrink: 0,
              borderRadius: 4,
              padding: "25px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >Digital Marketing</Typography>
              <Typography sx={{ mt: 1, color: themeColors.deepBlack }}>
                Join us to turn your passion for digital marketing into a successful career! Our 12-month Digital Marketing course covers key topics like SEO, social media marketing, content marketing, paid advertising, email marketing, and analytics. You'll gain practical experience and industry insights, learning to develop and optimize effective marketing strategies.
              </Typography>
            </Box>

            {/* Card 6 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },

              minHeight: "200px",
              flexShrink: 0,
              borderRadius: 4,
              padding: "25px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >Social Media Marketing</Typography>
              <Typography sx={{
                mt: 1,
                color: themeColors.deepBlack,
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}>
                With this extensive course, you will learn the fundamentals of social media marketing. Discover how to build focused advertising campaigns, manage online communities on Facebook, Instagram, Twitter, and LinkedIn, and produce interesting content. Acquire practical experience in real-life projects.
              </Typography>
            </Box>

          </Box>

          {/* SCROLL BUTTONS BELOW CARDS */}
          <Box sx={{
            display: "flex",
            gap: 2,
            mt: 3
          }}>

            <Button sx={{
              background: themeColors.deepBlack,
              color: themeColors.pureWhite,
              borderRadius: "8px",
              width: "32px",
              height: "32px",
              "&:hover": { background: themeColors.darkGray, color: themeColors.deepBlack }
            }}
              onClick={scrollLeft2}>
              <i className="fa-solid fa-arrow-left"></i>
            </Button>

            <Button sx={{
              background: themeColors.deepBlack,
              color: themeColors.pureWhite,
              borderRadius: "8px",
              width: "32px",
              height: "32px",
              "&:hover": { background: themeColors.darkGray, color: themeColors.deepBlack }
            }}
              onClick={scrollRight2}>
              <i className="fa-solid fa-arrow-right"></i>
            </Button>

          </Box>

        </Box>
      </Box>

      {/* Main wrapper 3 */}
        <Box sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        // background: "red",
        gap: 4,
        alignItems: "flex-start",
        width: "100%",
        margin: "70px auto",
      }}>

        {/* LEFT */}
        <Box sx={{ width: { xs: "100%", md: "460px" } }}>
          <Box sx={{
            display: "inline-block",
            background: themeColors.orangeColor,
            px: 1.5,
            py: 0.6,
            borderRadius: "109px",
            color: themeColors.pureWhite,
            fontSize: 14,
            fontWeight: 500,
          }}>
            Regular Courses
          </Box>

          <Typography sx={{
            mt: 2,
            fontSize: {
              xs: "2rem",
              sm: "2rem",
              md: "2vw",
              lg: "3rem",

            },
            fontWeight: 700,
            lineHeight: 1.3
          }}>
        Digital Marketing Courses
          </Typography>
        </Box>

        {/* CARDS */}
        <Box sx={{
          width: {
            xs: "100%",
            sm: "420px",   
            md: "772px",   
          },

        }}>
          <Box
            ref={scrollRef3}
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 1.5,
              scrollSnapType: "x mandatory",
              paddingBottom: 1,
              "&::-webkit-scrollbar": { display: "none" },

            }}
          >

            {/* Card 1 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },
              minHeight: 200,
              flexShrink: 0,
              borderRadius: 4,
              padding: "20px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >
                Graphic Design
              </Typography>

              <Typography sx={{ mt: 1, color: themeColors.deepBlack }}>
                Foundation in graphic design entails learning the core principles and techniques essential for creating visually appealing and effective designs. This includes understanding concepts like typography, color theory, layout composition, and visual hierarchy, which serve as the building blocks for creating impactful graphic designs across various mediums.
              </Typography>
            </Box>

            {/* Card 2 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },

              minHeight: 270,
              flexShrink: 0,
              borderRadius: 4,
              padding: "25px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >UX/UI Design</Typography>
              <Typography sx={{ mt: 1, color: themeColors.deepBlack }}>
                UI (User Interface) refers to the visual elements and layout of a digital product, focusing on how users interact with it. UX (User Experience) encompasses the overall feel of the product, including ease of use, accessibility, and satisfaction. In short, UI is about design, while UX is about the overall user journey and satisfaction.
              </Typography>
            </Box>

            {/* Card 3 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },

              minHeight: 270,
              flexShrink: 0,
              borderRadius: 4,
              padding: "25px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >Web Development</Typography>
              <Typography sx={{ mt: 1, color: themeColors.deepBlack }}>
                The foundations of web development, such as HTML, CSS, and JavaScript, as well as more complex subjects like front-end frameworks and back-end development, are covered in this syllabus. Through projects and portfolio creation, students receive practical experience that equips them for careers in web development.
              </Typography>
            </Box>

            {/* Card 4 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },

              minHeight: 270,
              flexShrink: 0,
              borderRadius: 4,
              padding: "25px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >WordPress</Typography>
              <Typography sx={{ mt: 1, color: themeColors.deepBlack }}>
                Over 40% of all websites on the internet are powered by WordPress, a free and open-source content management system (CMS) that makes it simple for users to create and manage blogs and websites. Based on PHP and MySQL, WordPress provides a highly customizable platform with an extensive library of themes and plugins.
              </Typography>
            </Box>

            {/* Card 5 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },

              minHeight: 270,
              flexShrink: 0,
              borderRadius: 4,
              padding: "25px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >Digital Marketing</Typography>
              <Typography sx={{ mt: 1, color: themeColors.deepBlack }}>
                Join us to turn your passion for digital marketing into a successful career! Our 12-month Digital Marketing course covers key topics like SEO, social media marketing, content marketing, paid advertising, email marketing, and analytics. You'll gain practical experience and industry insights, learning to develop and optimize effective marketing strategies.
              </Typography>
            </Box>

            {/* Card 6 */}
            <Box sx={{
              width: { xs: "100%", sm: "100%", md: "380px" },

              minHeight: "200px",
              flexShrink: 0,
              borderRadius: 4,
              padding: "25px 30px",
              backgroundColor: themeColors.pureWhite,
              scrollSnapAlign: "start",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.15)",
            }}>
              <Typography sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.5rem", },
                fontWeight: 600,
                color: themeColors.deepBlack,
              }}
              >Social Media Marketing</Typography>
              <Typography sx={{
                mt: 1,
                color: themeColors.deepBlack,
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}>
                With this extensive course, you will learn the fundamentals of social media marketing. Discover how to build focused advertising campaigns, manage online communities on Facebook, Instagram, Twitter, and LinkedIn, and produce interesting content. Acquire practical experience in real-life projects.
              </Typography>
            </Box>

          </Box>

          {/* SCROLL BUTTONS BELOW CARDS */}
          <Box sx={{
            display: "flex",
            gap: 2,
            mt: 3
          }}>

            <Button sx={{
              background: themeColors.deepBlack,
              color: themeColors.pureWhite,
              borderRadius: "8px",
              width: "32px",
              height: "32px",
              "&:hover": { background: themeColors.darkGray, color: themeColors.deepBlack }
            }}
              onClick={scrollLeft3}>
              <i className="fa-solid fa-arrow-left"></i>
            </Button>

            <Button sx={{
              background: themeColors.deepBlack,
              color: themeColors.pureWhite,
              borderRadius: "8px",
              width: "32px",
              height: "32px",
              "&:hover": { background: themeColors.darkGray, color: themeColors.deepBlack }
            }}
              onClick={scrollRight3}>
              <i className="fa-solid fa-arrow-right"></i>
            </Button>

          </Box>

        </Box>
      </Box>
    </>
  );
}
