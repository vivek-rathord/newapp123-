 import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Card, CardContent, Grid, styled } from "@mui/material";

const themeColors = {
  orangeColor: '#FF5532',
  deepBlack: '#111111',
  darkGray: '#575757',
  pureWhite: '#FFFFFF',
};

const SolutionsContainer = styled(Box)(({ theme }) => ({
  padding: '80px 0px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '40px 0px',
  }
}));

const SolutionsGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  gap: '30px',
  maxWidth: '1200px',
  margin: '0 auto',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
  }
}));

const SolutionCard = styled(Card)(({ theme, variant }) => ({
  backgroundColor: variant === 'dark' ? themeColors.deepBlack : themeColors.pureWhite,
  color: variant === 'dark' ? themeColors.pureWhite : themeColors.deepBlack,
  borderRadius: '20px',
  padding: '50px 40px',
  width: '500px',
  minHeight: '350px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
  transition: 'all 0.4s ease',
  border: variant === 'light' ? '2px solid #f0f0f0' : 'none',
  '&:hover': {
    transform: 'translateY(-15px)',
    boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
  },
  [theme.breakpoints.down('md')]: {
    width: '90%',
    minHeight: '300px',
    padding: '40px 30px',
  }
}));

const SolutionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '20px',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.6rem',
  }
}));

const SolutionText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '1.6',
  textAlign: 'center',
  marginBottom: '30px',
  color: 'inherit',
  opacity: 0.8,
}));

const SolutionButton = styled(Button)(({ theme, variant }) => ({
  backgroundColor: variant === 'dark' ? themeColors.pureWhite : themeColors.deepBlack,
  color: variant === 'dark' ? themeColors.deepBlack : themeColors.pureWhite,
  padding: '15px 40px',
  borderRadius: '10px',
  fontSize: '16px',
  fontWeight: '600',
  textTransform: 'none',
  width: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: themeColors.orangeColor,
    color: themeColors.pureWhite,
    transform: 'translateY(-3px)',
  }
}));

function SolutionsSection() {
  return (
    <SolutionsContainer>
      <SolutionsGrid container>
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <SolutionCard 
            variant="dark" 
             data-aos-delay="200"
          >
            <CardContent sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
              <Box>
                <SolutionTitle>Solutions</SolutionTitle>
                <SolutionText>
                  Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, 
                  dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                </SolutionText>
              </Box>
              <Link to="/services" style={{ textDecoration: 'none' }}>
                <SolutionButton variant="dark">
                  Explore Services
                </SolutionButton>
              </Link>
            </CardContent>
          </SolutionCard>
        </Grid>

        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <SolutionCard 
            variant="light" 
            data-aos="fade-left" 
            data-aos-delay="300"
          >
            <CardContent sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
              <Box>
                <SolutionTitle>Learning</SolutionTitle>
                <SolutionText>
                  Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, 
                  dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                </SolutionText>
              </Box>
              <Link to="/education" style={{ textDecoration: 'none' }}>
                <SolutionButton variant="light">
                  View Training Programs
                </SolutionButton>
              </Link>
            </CardContent>
          </SolutionCard>
        </Grid>
      </SolutionsGrid>
    </SolutionsContainer>
  );
}

export default SolutionsSection;