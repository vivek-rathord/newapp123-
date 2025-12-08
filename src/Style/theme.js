// styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Outfit", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      textTransform: 'capitalize',
      '@media (max-width: 448px)': {
        fontSize: '30px',
        textAlign: 'left',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
      textTransform: 'capitalize',
      '@media (max-width: 768px)': {
        fontSize: '22px',
      },
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#555555', // dark-gray
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#555555',
    },
  },
  palette: {
    primary: {
      main: '#000000', // deep-black
    },
    secondary: {
      main: '#555555', // dark-gray
    },
    background: {
      default: '#FFFFFF', // pure-white
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Outfit", sans-serif',
          textTransform: 'capitalize',
          borderRadius: '8px',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          '@media (min-width: 600px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
        },
      },
    },
  },
});