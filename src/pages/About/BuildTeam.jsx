import { Box, Typography, Container, Button, Paper, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const themeColors = {
  orangeColor: '#FF5532',
  deepBlack: '#111111',
  darkGray: '#575757',
  pureWhite: '#FFFFFF',
};

const OrangeSpan = styled(Typography)(({ theme }) => ({
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  padding: "5px 20px",
  borderRadius: "109px",
  fontSize: "14px",
  letterSpacing: "2%",
  fontWeight: "500",
  display: "inline-block",
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
  }
}));
const BuildTeam = () => {
  return (
    <Container sx={{ py: 1 }}>
      <Paper
        sx={{
          backgroundColor: themeColors.pureWhite,
          borderRadius: { xs: '40px', md: '80px' },
          padding: { xs: '40px 20px', md: '90px 0px' },
          margin: { xs: '20px auto', md: '0px auto' },
          boxShadow:'none',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '80%',
            gap: '20px',
            marginTop: '20px',
            textAlign: 'center',
            margin: '0 auto',
            '@media (max-width: 448px)': {
              width: '100%',
              padding: '20px 0px',
              alignItems: 'center',
              textAlign: 'center',
            },
          }}
        >
        <OrangeSpan data-aos="zoom-in">Connect</OrangeSpan>
         
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '3.5rem' },
              fontWeight: 700,
              textTransform: 'capitalize',
              maxWidth: '800px'

            }}
          >
            work with the team that teaches and builds
          </Typography>

          <Typography
            sx={{
              width: { xs: '100%', md: '49vw' },
              maxWidth: '800px',
              fontWeight: 400,
              padding: '10px 0px',
              marginBottom: '5px',
              fontSize: '1.2rem',
              '@media (max-width: 448px)': {
                width: '100%',
              },
            }}
          >
            We empower individuals through education and businesses through technology. Choose your path or walk both with us.
          </Typography>


          <Box
            sx={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              mt: 3,
            }}
          >
            <Button
              component={Link}
              to="/courses"
              sx={{
                width: { xs: '100%', sm: '200px', md: '260px', },
                backgroundColor: '#000000',
                color: '#FFFFFF',
                borderRadius: '16px',
                padding: '8px 20px',
                textTransform: 'capitalize',
                fontSize: '14px',
                fontWeight: 400,
                '&:hover': {
                  backgroundColor: '#333333',
                },
              }}
            >
              View Course
            </Button>

                <Button
              component={Link}
              to="/courses"
              sx={{
                width: { xs: '100%', sm: '200px', md: '260px', },
                backgroundColor: 'none',
                color: 'black',
                borderRadius: '16px',
                border:'1px solid #0000001A',
                padding: '8px 20px',
                textTransform: 'capitalize',
                fontSize: '14px',
                fontWeight: 400,
               '&:hover': {
                  borderColor: '#333333',
                  color: '#333333',
                },
              }}
            >
            
              Start a Project
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default BuildTeam;