import React, { useState, useEffect, useRef } from "react";
import {Typography,
    Box,
    useTheme,
    Link as MuiLink,
    Collapse,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/material/styles";
import Photoshop from '../assets/Images/Adobe Photoshop.svg';
import AdobeIndesign from '../assets/Images/Adobe Indesign.png'
import figma from '../assets/images/Figma.svg';
import AdobeXd from '../assets/Images/Adobe Xd.svg';
import Adobeillustrator from '../assets/Images/Adobe Illustrator.svg';
const timelineData = [
    {
        title: "Introduction To Graphic Design",
        content: "The course begins with an introduction to the fundamentals of graphic design, focusing on its role in marketing and communication. Students explore essential principles such as balance, contrast, alignment, repetition, and proximity, alongside core elements like line, shape, texture, color, and space. Additionally, the evolution of graphic design is covered, highlighting key movements and influential designers who have shaped the industry."
    },
    {
        title: "Fundamentals Of Visual Communication",
        content: "This section delves into the basics of visual communication, emphasizing visual hierarchy and the effective use of typography, including typefaces, font families, and pairing techniques. It also introduces students to color theory, covering RGB and CMYK models, harmonies, and the psychological effects of colors in design."
    },
    {
        title: "Tools Of The Trade",
        content: "Students gain hands-on experience with industry-standard software, including Adobe Photoshop for image editing, Adobe Illustrator for vector-based artwork and logo creation, and Canva for quick, template-based designs. The focus is on learning essential tools and features, with practical applications such as working with layers, masks, and special effects to produce visually compelling designs."
    },
    {
        title: "Branding And Identity Design",
        content: "The emphasis shifts to branding, where students learn the principles of logo design, exploring styles like wordmarks, symbols, and combinations. The importance of iconography and its role in crafting meaningful visuals is discussed, alongside techniques for creating a cohesive brand identity. Practical exercises include designing business cards, letterheads, and other branded materials, supplemented with case studies of successful brands."
    },
    {
        title: "Layout And Composition",
        content: "This section focuses on mastering grid systems, alignment, and composition techniques to create balanced and professional layouts. Students work on designing posters, flyers, and brochures while learning to structure content effectively for both print and digital media."
    },
    {
        title: "User Interface (UI) And Web Design",
        content: "The course explores the basics of UI/UX design, teaching students how to create responsive designs that adapt to various screen sizes. They learn to develop mockups and prototypes using tools like Figma or Adobe XD and design visually appealing graphics for social media and online advertisements, ensuring a seamless user experience."
    },
    {
        title: "Portfolio Development",
        content: "The course concludes with a focus on portfolio building, where students curate their best work and create a digital portfolio on platforms like Behance, Dribbble, or personal websites. They receive guidance on crafting industry-standard resumes and cover letters and learn about freelance pricing and design contracts to prepare for professional opportunities."
    }
];
// faq data content here 
const faqData = [
    {
        question: "Will I receive a certificate upon completion?",
        answer: "Yes, if you're exploring your options, you're welcome to attend demos for more than one course."
    },
    {
        question: "Do I need prior experience in graphic design to join?",
        answer: "Yes, if you're exploring your options, you're welcome to attend demos for more than one course."
    },
    {
        question: "How are the classes conducted?",
        answer: "Yes, if you're exploring your options, you're welcome to attend demos for more than one course."
    },
    {
        question: 'Will there be assignments or projects?',
        answer: "Yes, if you're exploring your options, you're welcome to attend demos for more than one course."
    },
    {
        question: 'How long is the course?',
        answer: "Yes, if you're exploring your options, you're welcome to attend demos for more than one course."
    }
];

const INACTIVE_COLOR = '#575757';
const ACTIVE_COLOR = '#FF5532';
const LINE_COLOR = '#CECFCA';
const PRIMARY_COLOR = '#111111';
const BACKGROUND_COLOR = '#F7F7F7';
const WHITE_COLOR = '#FFFFFF';
const HEADER_MAX_WIDTH = '1280px';
const DOT_SIZE = '20px';
const getLineRightPosition = (theme) => ({
    xs: '4px',
    sm: '4px',
    md: '4px',
    lg: '4px',
});

const getDotRightPosition = (theme) => ({
    left: `calc(0px - ${DOT_SIZE} / 2)`,
});


// 2. Hero Section
const HeroBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(4, 0),
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2, 2),
    }
}));

// 3. Who Can Enroll (Frame31)
const Frame31Box = styled(Box)(({ theme }) => ({
    backgroundColor: WHITE_COLOR,
    maxWidth: HEADER_MAX_WIDTH,
    margin: '50px auto 0',
    borderRadius: '80px',
    padding: '50px 0px',
    display: 'flex',
    gap: '30px',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
        gap: '20px',
        padding: '40px',
    },
    [theme.breakpoints.down('md')]: {
        maxWidth: '720px',
        borderRadius: '20px',
        padding: '40px 20px',
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        textAlign: 'center',
        maxWidth: '520px',
    },

    '@media (max-width: 448px)': {
        maxWidth: '400px',
    }
}));

// 4. Timeline Section
const TimelineWrapper = styled(Box)(({ theme }) => ({
    padding: '100px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
        padding: '100px 70px',
        paddingLeft: '30px',
        alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        padding: '50px 20px',
    }
}));

const TimelineContentArea = styled(Box)(({ theme }) => ({
    position: 'relative',
    paddingLeft: '20px',
    maxWidth: '1000px',
    width: '100%',
}));

// 5. FAQ Section
const FaqSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: '50px',
    padding: '100px',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        padding: '50px 20px',
        gap: '30px',
        alignItems: 'center',
    }
}));

const FaqQuestionBox = styled(Box)(({ theme, open }) => ({
    display: 'flex',
    backgroundColor: WHITE_COLOR,
    padding: '30px 50px',
    borderRadius: '20px',
    maxWidth: '700px',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    transition: 'all 0.3s ease',
    boxShadow: open ? '0 5px 15px rgba(0,0,0,0.1)' : 'none',
    border: open ? `1px solid ${ACTIVE_COLOR}` : '1px solid transparent',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
        padding: '20px 30px',
        maxWidth: '600px',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '15px 20px',
    }
}));

// 6. Demo Class Section
const DemoGroupBox = styled(Box)(({ theme }) => ({
    backgroundColor: WHITE_COLOR,
    maxWidth: HEADER_MAX_WIDTH,
    margin: 'auto',
    borderRadius: '80px',
    padding: '70px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        maxWidth: '720px',
        borderRadius: '20px',
        padding: '50px 30px',
    },
    [theme.breakpoints.down('sm')]: {
        maxWidth: '520px',
    },

    '@media (max-width: 432px)': {
        maxWidth: '375px',
    }
}));


// --- Main App Component ---
function GraphicDesign() {
    const [activeDotIndex, setActiveDotIndex] = useState(timelineData.length - 1);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [activeLineHeight, setActiveLineHeight] = useState(0);

    const contentRefs = useRef([]);
    const observerRef = useRef(null);

    const theme = useTheme();

    const handleFaqToggle = (index) => {
        setOpenFaqIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const calculateLineHeight = (index) => {
        const timelineArea = document.querySelector('.timeline-container-two-col');

        if (index >= 0 && contentRefs.current[index] && timelineArea) {
            const activeContentRef = contentRefs.current[index];
            const dot = activeContentRef.parentNode.querySelector('.timeline-dot-visible');

            if (dot) {
                const containerTop = timelineArea.getBoundingClientRect().top + window.scrollY;
                const dotTop = dot.getBoundingClientRect().top + window.scrollY;
                const newHeight = dotTop - containerTop + (dot.offsetHeight / 2);

                setActiveLineHeight(newHeight);
            }
        } else if (index === -1) {
            setActiveLineHeight(0);
        }
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-150px 0px -85% 0px',
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                const index = parseInt(entry.target.dataset.index, 10);

                if (entry.isIntersecting) {
                    setActiveDotIndex(index);
                }
            });
        };

        observerRef.current = new IntersectionObserver(observerCallback, observerOptions);
        const currentRefs = contentRefs.current.filter(ref => ref !== null);
        currentRefs.forEach(ref => {
            observerRef.current.observe(ref);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            calculateLineHeight(activeDotIndex);
        }, 100);

        const handleResize = () => {
            clearTimeout(timeout);
            calculateLineHeight(activeDotIndex);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('resize', handleResize);
        };
    }, [activeDotIndex]);


    return (
        <Box sx={{ backgroundColor: BACKGROUND_COLOR, fontFamily: 'Outfit, sans-serif' }}>

            {/* --- Hero Section --- */}
            <HeroBox component="section" className="hero">
                <Box className="flex" sx={{ display: 'flex', justifyContent: 'center', gap: { xs: '100px', sm: '170px' }, mt: '60px', mb: 0 }}>
                    <Box component="img" src={Photoshop} alt="Adobe Photoshop" sx={{ height: '64.54px', maxWidth: '65.28px' }} />
                    <Box component="img" src={AdobeIndesign} alt="Adobe Indesign" sx={{
                        height: '65.28px', maxWidth: '65.28px',
                        position: 'relative', left: { xs: '20px', sm: '30px' }
                    }} />
                </Box>

                <Box className="figma" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
                    <Box component="img" src={figma} alt="Figma" sx={{ height: '65.28px', maxWidth: '65.28px', mr: 2 }} />
                    <Typography variant="h1" sx={{
                        textAlign: 'center',
                        fontSize: { xs: '30px', sm: '50px', md: '64px' },
                        fontWeight: 700,
                        lineHeight: '120%',
                        textTransform: 'capitalize',
                        fontFamily: 'Outfit, sans-serif',
                    }}>
                        GRAPHIC DESIGN
                    </Typography>
                </Box>

                <Typography className="Foundation" sx={{
                    color: INACTIVE_COLOR,
                    maxWidth: { xs: '320px', sm: '514px', md: '800px' },
                    fontWeight: 400,
                    margin: 'auto',
                    textAlign: 'center',
                    fontSize: { xs: '13px', sm: '14px', md: '16px' },
                    lineHeight: '150%',
                    mb: '40px'
                }}>
                    Foundation in graphic design entails learning the core principles and techniques essential for creating visually appealing and effective designs. This includes understanding concepts like typography, color theory, layout composition, and visual hierarchy, which serve as the building blocks for creating impactful graphic designs across various mediums.
                </Typography>

                <Box className="svg-container" sx={{ display: 'flex', justifyContent: 'center', gap: '80px' }}>

                    <Box component="img" src={AdobeXd} alt="Adobe XD" sx={{
                        height: '64.54px', maxWidth: '65.28px', position: 'relative',
                        bottom: { xs: '0px', md: '20px' }, right: '30px'
                    }} />
                    <Box component="img" src={Adobeillustrator} alt="Adobe Illustrator" sx={{
                        height: '65.28px', maxWidth: '65.28px', position: 'relative',
                        left: { xs: '10px', sm: '20px' }, bottom: { xs: '5px', md: '30px' }
                    }} />
                </Box>
            </HeroBox>

            {/* --- Who Can Enroll Section (Frame31) --- */}
            <Frame31Box className="Frame31">
                <Box className="Group403" sx={{ maxWidth: { xs: '100%', sm: '400px' } }}>
                    <Typography component="p" sx={{
                        backgroundColor: ACTIVE_COLOR, color: WHITE_COLOR,
                        maxWidth: '150px', textAlign: 'center', borderRadius: '20px',
                        fontSize: '14px', padding: '5px 10px',
                        margin: { xs: '0 auto 20px', sm: '0 0 20px' }
                    }}>
                        Who Can Enroll
                    </Typography>
                    <Typography variant="h2" sx={{
                        fontWeight: 700,
                        fontSize: { xs: '25px', sm: '30px', md: '40px', lg: '48px' },
                        fontFamily: 'Outfit, sans-serif',
                        maxWidth: { xs: '100%', sm: '400px' },
                        margin: { xs: '0 auto', sm: '0' }
                    }}>
                        Who Should Join This Course?
                    </Typography>
                </Box>

                <Box className="Group571" sx={{ maxWidth: { xs: '100%', sm: '600px' } }}>
                    <Typography component="p" sx={{
                        maxWidth: { xs: '330px', sm: '600px' }, color: INACTIVE_COLOR,
                        lineHeight: '25px', marginBottom: '30px', fontSize: '14px',
                        margin: { xs: 'auto', sm: '0 0 30px' }
                    }}>
                        Whether you're a student from fields like BCA, BTech, or Polytechnic aiming to build creative expertise, a beginner eager to dive into the world of design, or a working professional looking to strengthen your visual communication skills—this course is designed for you. It also suits entrepreneurs, marketers, and freelancers who want to independently craft impactful brand visuals or those preparing a strong portfolio to pursue higher opportunities in the creative industry.
                    </Typography>
                    <MuiLink href="#" underline="none" sx={{
                        backgroundColor: PRIMARY_COLOR, color: WHITE_COLOR,
                        padding: '15px 110px', borderRadius: '13px',
                        fontSize: '14px', letterSpacing: '0.8px', fontWeight: 400,
                        display: 'inline-block',
                    }}>
                        Enroll Now
                    </MuiLink>
                </Box>
            </Frame31Box>

            {/* --- Timeline Section --- */}
            <TimelineWrapper className="timeline-section-main-wrapper" sx={{ margin: 'auto', display: 'flex', justifyContent: 'center',displayPrint: 'none' }}>

                <Box className="Group574" sx={{
                    marginBottom: '40px',
                    maxWidth: { xs: '100%', sm: '300px', lg: '400px' },
                    textAlign: { xs: 'center', sm: 'left' }
                }}>
                    <Typography component="p" className="course-tag" sx={{
                        color: WHITE_COLOR, fontWeight: 400, marginBottom: '5px',
                        backgroundColor: ACTIVE_COLOR, maxWidth: '200px',
                        textAlign: 'center', padding: '10px', borderRadius: '20px',
                        letterSpacing: '0.8px',
                        margin: { xs: 'auto', sm: '0' }
                    }}>
                        Course Overview
                    </Typography>
                    <Typography variant="h2" className="heading" sx={{
                        fontWeight: 700, fontFamily: 'Outfit', color: PRIMARY_COLOR,
                        fontSize: { xs: '25px', sm: '30px', md: '48px' },
                        maxWidth: { xs: '1000px', sm: '1200px', lg: '1000px' },
                        mt: { xs: '10px', sm: '0' },
                    }}>
                        Breaking Down The Learning Journey
                    </Typography>
                </Box>

                <TimelineContentArea className="timeline-content-area" sx={{
                    ml: { xs: 0, sm: '50px' },
                }}>

                    <Box className="timeline-container-two-col" sx={{ maxWidth: '1000px', position: 'relative' }}>
                        <Box className="full-length-line" sx={{
                            position: 'absolute', width: '3px', height: '100%', backgroundColor: LINE_COLOR, zIndex: 1,
                            top: 0,
                        }} />
                        <Box className="active-line" sx={{
                            position: 'absolute', width: '3px', backgroundColor: ACTIVE_COLOR, zIndex: 2, top: 0,
                            left: 0,
                            height: `${activeLineHeight}px`, transition: 'height 0.3s ease',
                        }} />

                        {timelineData.map((item, index) => (
                            <Box className="timeline-item-two-col" key={index} sx={{
                                display: 'flex', marginBottom: '70px', position: 'relative', justifyContent: 'center'
                            }}>

                                <Box className="dot-column" sx={{
                                    position: 'absolute', top: { xs: '15px', md: '49px' },
                                    ...getDotRightPosition(theme),
                                    zIndex: 3,
                                }}>
                                    <Box
                                        className="timeline-dot timeline-dot-visible"
                                        sx={{
                                            width: DOT_SIZE, height: DOT_SIZE, borderRadius: '50%',
                                            backgroundColor: index <= activeDotIndex ? ACTIVE_COLOR : INACTIVE_COLOR,
                                            border: '3px solid #FFFFFF',
                                            transition: 'background-color 0.1s linear',
                                        }}
                                    />
                                </Box>

                                <Box
                                    className="timeline-content-two-col"
                                    ref={el => contentRefs.current[index] = el}
                                    data-index={index}
                                    sx={{
                                        maxWidth: '1200px',
                                        marginTop: '-10px',
                                        position: 'relative',
                                        ml: '50px',
                                        backgroundColor: index === activeDotIndex ? WHITE_COLOR : 'transparent',
                                        padding: index === activeDotIndex ? '50px' : '0',
                                        borderRadius: '40px',
                                        transition: 'background-color 0.3s ease, padding 0.3s ease',
                                        boxShadow: index === activeDotIndex ? '0 10px 30px rgba(0,0,0,0.1)' : 'none',
                                    }}
                                >
                                    <Typography component="h3" sx={{
                                        color: index === activeDotIndex ? ACTIVE_COLOR : PRIMARY_COLOR,
                                        fontSize: { xs: '18px', md: '20px', lg: '24px' },
                                        fontFamily: 'Outfit, sans-serif', fontWeight: 600,
                                    }}>
                                        {item.title}
                                    </Typography>
                                    <Typography component="p" sx={{
                                        color: INACTIVE_COLOR, lineHeight: 1.6, marginTop: '10px',
                                        fontSize: { xs: '13px', md: '14px' },
                                        maxWidth: { xs: '100%', md: '510px' }
                                    }}>
                                        {item.content}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </TimelineContentArea>
            </TimelineWrapper>
            <FaqSection className="Group591">
                <Box className="Group399" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography component="p" sx={{
                        backgroundColor: ACTIVE_COLOR, color: WHITE_COLOR,
                        padding: '8px 10px', maxWidth: '100px', textAlign: 'center',
                        borderRadius: '20px', letterSpacing: '0.5px',
                        margin: { xs: '0 auto 10px', md: '0 0 10px' }
                    }}>
                        FAQs
                    </Typography>
                    <Typography variant="h2" sx={{
                        fontSize: { xs: '25px', md: '48px' }, color: PRIMARY_COLOR,
                        fontWeight: 700, fontFamily: 'Outfit', lineHeight: '120%',
                        maxWidth: { xs: '340px', md: '500px' },
                        margin: { xs: 'auto', md: '0' }
                    }}>
                        Common Questions About This Course
                    </Typography>
                </Box>

                <Box className="faq-list" sx={{
                    display: 'flex', flexDirection: 'column', gap: '20px',
                    maxWidth: { xs: '90%', sm: '600px', md: '700px' },
                    width: '100%'
                }}>
                    {faqData.map((faq, index) => (
                        <Box key={index}>
                            <FaqQuestionBox
                                open={openFaqIndex === index}
                                onClick={() => handleFaqToggle(index)}
                                className="Rectangle4269"
                            >
                                <Typography sx={{
                                    fontWeight: 500,
                                    fontSize: { xs: '14px', md: '16px' },
                                    color: PRIMARY_COLOR,
                                    maxWidth: '90%'
                                }}>
                                    {faq.question}
                                </Typography>
                                {openFaqIndex === index ? (
                                    <ArrowDropUpIcon sx={{ color: ACTIVE_COLOR, fontSize: 30 }} />
                                ) : (
                                    <ArrowDropDownIcon sx={{ color: PRIMARY_COLOR, fontSize: 30 }} />
                                )}
                            </FaqQuestionBox>

                            <Collapse in={openFaqIndex === index} timeout="auto" unmountOnExit>
                                <Box sx={{
                                    padding: { xs: '10px 20px 20px', md: '20px 50px 30px' },
                                    backgroundColor: WHITE_COLOR,
                                    borderRadius: '0 0 20px 20px',
                                    marginTop: '-1px',
                                    border: openFaqIndex === index ? `1px solid ${ACTIVE_COLOR}` : '1px solid transparent',
                                    borderTop: 'none',
                                }}>
                                    <Typography sx={{
                                        color: INACTIVE_COLOR,
                                        fontSize: { xs: '13px', md: '14px' },
                                        lineHeight: 1.6
                                    }}>
                                        {faq.answer}
                                    </Typography>
                                </Box>
                            </Collapse>
                        </Box>
                    ))}
                </Box>
            </FaqSection>

            {/* --- Demo Class Section --- */}
            <DemoGroupBox className="Group561">
                <Typography variant="h2" sx={{
                    color: PRIMARY_COLOR, fontWeight: 700,
                    fontSize: { xs: '30px', md: '48px' },
                    fontFamily: 'Outfit', lineHeight: '120%',
                    marginBottom: '15px'
                }}>
                    Book A Demo Class Today!
                </Typography>
                <Typography component="p" sx={{
                    maxWidth: { xs: '330px', sm: '450px', md: '550px' },
                    color: INACTIVE_COLOR, lineHeight: '25px',
                    fontSize: { xs: '13px', md: '14px' },
                    margin: 'auto auto 30px'
                }}>
                    Still have questions about our graphic design course? Book a free demo class to get a hands-on experience and clarify all your doubts before enrolling.
                </Typography>
                <MuiLink href="#" underline="none" sx={{
                    backgroundColor: PRIMARY_COLOR, color: WHITE_COLOR,
                    padding: '15px 110px', borderRadius: '13px',
                    fontSize: '14px', letterSpacing: '0.8px', fontWeight: 400,
                    display: 'inline-block',
                }}>
                    Book Now
                </MuiLink>
            </DemoGroupBox>

        </Box>
    );
}

export default GraphicDesign;