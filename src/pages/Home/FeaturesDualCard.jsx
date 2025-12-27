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
  padding: '60px 0',
  
  [theme.breakpoints.down('lg')]: {
    padding: '50px 0',
  },
  
  [theme.breakpoints.down('md')]: {
    padding: '40px 0',
  },
  
  [theme.breakpoints.down('sm')]: {
    padding: '30px 0',
  }
}));

const SolutionsGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  gap: '50px',
  width: '100%',
  maxWidth: '1600px',
  margin: '0 auto',
  padding: '0 20px',

  [theme.breakpoints.down('lg')]: {
    gap: '40px',
    padding: '0 15px',
  },
  
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '35px',
    padding: '0 15px',
  },
  
  [theme.breakpoints.down('sm')]: {
    gap: '25px',
    padding: '0 10px',
  }
}));

const SolutionCard = styled(Card)(({ theme, variant }) => ({
  backgroundColor: variant === 'dark' ? themeColors.deepBlack : themeColors.pureWhite,
  color: variant === 'dark' ? themeColors.pureWhite : themeColors.deepBlack,
  borderRadius: '40px',
  padding: '35px 50px',
  width: '100%',
  maxWidth: '620px',
  minHeight: '280px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
  transition: 'all 0.4s ease',
  border: variant === 'light' ? '2px solid #f0f0f0' : 'none',

  [theme.breakpoints.down('lg')]: {
    padding: '30px 40px',
    minHeight: '260px',
  },
  
  [theme.breakpoints.down('md')]: {
    maxWidth: '700px',
    minHeight: '240px',
    padding: '30px 35px',
  },
  
  [theme.breakpoints.down('sm')]: {
    minHeight: '220px',
    padding: '25px 20px',
    borderRadius: '30px',
  }
}));

const SolutionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: '700',
  marginBottom: '20px',
  textAlign: 'left',
  
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.7rem',
    marginBottom: '18px',
  },
  
  [theme.breakpoints.down('md')]: {
    fontSize: '1.6rem',
    marginBottom: '16px',
  },
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.4rem',
    marginBottom: '15px',
  }
}));

const SolutionText = styled(Typography)(({ theme }) => ({
  fontSize: '15px',
  lineHeight: '1.7',
  textAlign: 'left',
  textTransform: 'capitalize',
  marginBottom: '25px',
  color: 'inherit',
  opacity: 0.8,
  width: '100%',
  maxWidth: '430px',

  [theme.breakpoints.down('lg')]: {
    fontSize: '14.5px',
    lineHeight: '1.65',
    maxWidth: '100%',
  },
  
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    lineHeight: '1.6',
    marginBottom: '22px',
  },
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '13.5px',
    lineHeight: '1.6',
    marginBottom: '20px',
  }
}));

const SolutionButton = styled(Button)(({ theme, variant }) => ({
  backgroundColor: variant === 'dark' ? themeColors.pureWhite : themeColors.deepBlack,
  color: variant === 'dark' ? themeColors.deepBlack : themeColors.pureWhite,
  padding: '10px 45px',
  borderRadius: '10px',
  fontSize: '15px',
  fontWeight: '600',
  textTransform: 'none',
  width: 'auto',
  minWidth: '200px',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    backgroundColor: themeColors.orangeColor,
    color: themeColors.pureWhite,
    transform: 'translateY(-3px)',
  },

  [theme.breakpoints.down('lg')]: {
    minWidth: '180px',
    padding: '9px 40px',
    fontSize: '14.5px',
  },
  
  [theme.breakpoints.down('md')]: {
    minWidth: '170px',
    padding: '8px 35px',
    fontSize: '14px',
  },
  
  [theme.breakpoints.down('sm')]: {
    minWidth: '160px',
    padding: '8px 30px',
    fontSize: '13.5px',
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
            <CardContent sx={{ 
              textAlign: 'left', 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%', 
              justifyContent: 'space-between',
              padding: '0',
              '&:last-child': {
                paddingBottom: 0
              }
            }}>
              <Box>
                <SolutionTitle>Solutions</SolutionTitle>
                <SolutionText>
                  Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, 
                  dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                </SolutionText>
              </Box>
              <Link to="/services" style={{ textDecoration: 'none', alignSelf: 'flex-start' }}>
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
            <CardContent sx={{ 
              textAlign: 'left', 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%', 
              justifyContent: 'space-between',
              padding: '0',
              '&:last-child': {
                paddingBottom: 0
              }
            }}>
              <Box>
                <SolutionTitle>Learning</SolutionTitle>
                <SolutionText>
                  Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, 
                  dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                </SolutionText>
              </Box>
              <Link to="/education" style={{ textDecoration: 'none', alignSelf: 'flex-start' }}>
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