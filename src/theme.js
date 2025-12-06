 // styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Outfit", "Inter", "Roboto", sans-serif',
    
    // Headings - h1
    h1: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
      fontSize: '48px',
      lineHeight: 1.2, // 120%
      letterSpacing: '0%',
      textTransform: 'capitalize',
      textAlign: 'center',
      '@media (max-width: 768px)': {
        fontSize: '36px',
      },
      '@media (max-width: 448px)': {
        fontSize: '30px',
      },
    },
    
    // Headings - h2
    h2: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: 1.2,
      letterSpacing: '0%',
      textTransform: 'capitalize',
      '@media (max-width: 768px)': {
        fontSize: '28px',
      },
      '@media (max-width: 448px)': {
        fontSize: '24px',
      },
    },
    
    // Headings - h3
    h3: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: 1.3,
      letterSpacing: '0%',
    },
    
    // Body Text - Paragraphs
    body1: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: 1.5, // 150%
      letterSpacing: '0%',
      color: '#555555', // dark-gray
    },
    
    // Small Text
    body2: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: 1.5,
      letterSpacing: '0%',
      color: '#555555',
    },
    
    // Span/Subtitle Text
    subtitle1: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: 1.5,
      letterSpacing: '1px',
      color: '#555555',
      textTransform: 'uppercase',
    },
  },
  
  palette: {
    primary: {
      main: '#000000', // deep-black
    },
    secondary: {
      main: '#555555', // dark-gray
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
  },
  
  // Rest of your theme...
});

export default theme;