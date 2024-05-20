'use client';
import { Work_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';

const work_sans = Work_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const success = green[500];
const error = red[500];

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#333A73',
    },
    secondary: {
      main: '#FFDA78',
    },
    success: {
      main: success,
    },
    error: {
      main: error,
    },
  },
  typography: {
    fontFamily: work_sans.style.fontFamily,
  },
});

export default theme;
