 import { Box, Typography, Container, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const BuildTeam = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Paper
        sx={{
          backgroundColor: '#FFFFFF',
          borderRadius: { xs: '40px', md: '80px' },
          padding: { xs: '40px 20px', md: '90px 0px' },
          margin: { xs: '20px auto', md: '60px auto' },
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
            textTransform: 'capitalize',
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
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '1px',
              color: '#ffffffff',
              textTransform: 'uppercase',
              fontFamily: '"Outfit", sans-serif', backgroundColor: '#FF5532 ',
            padding: '8px 18px',
            borderRadius: '20px',
            }}
          >
            Connect
          </Typography>
          
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              fontWeight: 700,
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
              marginBottom: '20px',
              fontSize: '1.1rem',
              fontFamily: '"Outfit", sans-serif',
              '@media (max-width: 448px)': {
                width: '100%',
              },
            }}
          >
            We empower individuals through education and businesses through technology.
          </Typography>
          
          <Typography
            sx={{
              width: { xs: '100%', md: '55vw' },
              maxWidth: '900px',
              fontSize: '17px',
              color: '#000000',
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 400,
              '@media (max-width: 448px)': {
                width: '100%',
              },
            }}
          >
            Choose your path or walk both with us.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              mt: 3,
            }}
          >
            <Button
              component={Link}
              to="/courses"
              sx={{
                backgroundColor: '#000000',
                color: '#FFFFFF',
                borderRadius: '8px',
                padding: '10px 30px',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: '"Outfit", sans-serif',
                '&:hover': {
                  backgroundColor: '#333333',
                },
              }}
            >
              View Course
            </Button>
            
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              sx={{
                borderColor: '#c3c3c3ff',
                color: '#000000',
                borderRadius: '8px',
                padding: '10px 30px',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: '"Outfit", sans-serif',
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