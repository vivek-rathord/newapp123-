import React, { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, styled } from "@mui/material";

const themeColors = {
    orangeColor: "#FF5532",
    deepBlack: "#111111",
    darkGray: "#575757",
    pureWhite: "#FFFFFF",
};

const FAQContainer = styled(Box)(({ theme }) => ({
    width: "80%",
    margin: '0 auto',
    maxWidth: "1200px",
    mx: "auto",
    py: 6,
    px: 2,
}));

const OrangeTag = styled(Typography)(({ theme }) => ({
    backgroundColor: themeColors.orangeColor,
    color: themeColors.pureWhite,
    padding: '8px 18px',
    borderRadius: '20px',
    fontSize: '14px',
    letterSpacing: '1px',
    fontWeight: '600',
    display: 'inline-block',
  [theme.breakpoints.down('sm')]: { fontSize: '.7rem' },

}));

const FAQTitle = styled(Typography)(({ theme }) => ({
    fontSize: '2.5rem',
    fontWeight: 'bold',
   marginBottom: '40px',
    background: 'linear-gradient(135deg, #111111 0%, #575757 100%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
    }
}));

const ColumnWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: 20,
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

const FAQColumn = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 30,
}));

const CustomAccordion = styled(Accordion)(({ theme }) => ({
    borderRadius: "20px",
    background: themeColors.pureWhite,
    padding: '25px',
    boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
     border: "none", 
      "&:before": {
        display: "none", 
    },
    
}));

const AccordionIcon = styled(Box)(({ expanded }) => ({
    width: 30,
    height: 30,
    borderRadius: "8px",
    display: "flex",
    border: '1px solid gray',
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: expanded ? themeColors.deepBlack : themeColors.pureWhite,
    color: expanded ? themeColors.pureWhite : themeColors.deepBlack,
    transition: "all 0.3s",
}));

const AccordionHeading = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontWeight: 600,
    color: themeColors.deepBlack,
     [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
    }
}));

const AccordionText = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: themeColors.darkGray,
    opacity: 0.9,
    lineHeight: 1.6,
    pr: 4,
    mt: -1,
}));

export default function SimpleFaq() {
    const [expanded, setExpanded] = useState(false);

    const faqsLeft = [
        { id: "p1", question: "Can I attend a demo class for multiple courses?", answer: "Yes, if you're exploring your options, you're welcome to attend demos for more than one course." },
        { id: "p2", question: "Can I attend a demo class for multiple courses?  ", answer: "You can register through our website by selecting the demo option on the course page." },
    ];

    const faqsRight = [
        { id: "p3", question: "Can I attend a demo class for multiple courses?", answer: "Yes, all demo classes are completely free of charge." },
        { id: "p4", question: "Can I attend a demo class for multiple courses?", answer: "Yes, you can attend as many demo classes as you like." },
        { id: "p5", question: "Can I attend a demo class for multiple courses?", answer: "No prior knowledge is required; demos are suitable for beginners." },
    ];

    const handleChange = (id) => (_, isExpanded) => {
        setExpanded(isExpanded ? id : false);
    };

    const renderAccordion = (faq) => (
        <CustomAccordion key={faq.id} expanded={expanded === faq.id} onChange={handleChange(faq.id)}>
            <AccordionSummary
                expandIcon={<AccordionIcon expanded={expanded === faq.id}>{expanded === faq.id ? "–" : "+"}</AccordionIcon>}
            >
                <AccordionHeading>{faq.question}</AccordionHeading>
            </AccordionSummary>
            <AccordionDetails>
                <AccordionText>{faq.answer}</AccordionText>
            </AccordionDetails>
        </CustomAccordion>
    );

    return (
        <FAQContainer>
            <Box textAlign="center" mb={1}>
                <OrangeTag>FAQs</OrangeTag>
            </Box>
            <FAQTitle>What People Usually Ask</FAQTitle>

            <ColumnWrapper>
                <FAQColumn>{faqsLeft.map(renderAccordion)}</FAQColumn>
                <FAQColumn>{faqsRight.map(renderAccordion)}</FAQColumn>
            </ColumnWrapper>
        </FAQContainer>
    );
}
