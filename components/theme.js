import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
// Import Fonts
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/600.css";
import "@fontsource/quicksand/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";

export const Colors = {
  primary: "#014E79",
  secondary: "#185b87",
  info: "#3498db",
  success: "#2ecc71",
  warning: "#f1c40f",
  danger: "#e74c3c",
  surface: '#EFF5F4',
  black: '#000000',
}

export default function AppTheme({ children }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: Colors.primary,
      },
      secondary: {
        main: Colors.secondary,
      },
      success: {
        main: Colors.success,
      },
      warning: {
        main: Colors.warning,
      },
      error: {
        main: Colors.danger,
      },
      black: {
        main: Colors.black,
        light: "#555555",
        dark: "#888888",
      },
    },
    typography: {
      fontFamily: [
        '"Poppins"',
        '"Montserrat"',
        '"Inter"',
        '"Quicksand"',
        'sans-serif'
      ].join(','),
    },
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            color: "#999999",
            "&.Mui-selected": {
              color: "#000000",
            },
          }
        }
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: "#000000",
          }
        }
      }
    }
  });
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}