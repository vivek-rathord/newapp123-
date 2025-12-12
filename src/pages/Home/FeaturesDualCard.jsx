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
  gap: '50px',
  width:'100%',
  maxWidth: '1600px',
  margin: '0 auto',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '35px',
  },
  [theme.breakpoints.down('sm')]: {
    gap: '25px',
  }
}));

const SolutionCard = styled(Card)(({ theme, variant }) => ({
  backgroundColor: variant === 'dark' ? themeColors.deepBlack : themeColors.pureWhite,
  color: variant === 'dark' ? themeColors.pureWhite : themeColors.deepBlack,
  borderRadius: '40px',
  padding: '20px 50px',
  width: '620px',
  minHeight: '250px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
  transition: 'all 0.4s ease',
  border: variant === 'light' ? '2px solid #f0f0f0' : 'none',

  [theme.breakpoints.down('md')]: {
    width: '85%',
    minHeight: '280px',
    padding: '35px 30px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    minHeight: '250px',
    padding: '30px 25px',
  }
}));

const SolutionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: '700',
  marginBottom: '20px',
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  }
}));

const SolutionText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  width:"430px",
  lineHeight: '1.6',
  textAlign: 'left',
  textTransform:'capitalize',
  marginBottom: '20px',
  color: 'inherit',
  opacity: 0.8,

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    fontSize: '13px',
  }
}));

const SolutionButton = styled(Button)(({ theme, variant }) => ({
  backgroundColor: variant === 'dark' ? themeColors.pureWhite : themeColors.deepBlack,
  color: variant === 'dark' ? themeColors.deepBlack : themeColors.pureWhite,
  padding: '8px 40px',
  borderRadius: '10px',
  fontSize: '14px',
  fontWeight: '600',
  textTransform: 'none',
  width: 'content-fit',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: themeColors.orangeColor,
    color: themeColors.pureWhite,
    transform: 'translateY(-3px)',
  }
}));

function FeaturesDualCard() {
  return (
    <SolutionsContainer>
      <SolutionsGrid>

        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <SolutionCard 
            variant="dark" 
            data-aos="fade-right" 
            data-aos-delay="300"
          >
            <CardContent sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
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
            <CardContent sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
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

export default FeaturesDualCard;
