import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Settings from './pages/Settings';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#d32f2f',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ minHeight: '100vh', backgroundColor: '#121212' }}>
        <Header />
        <Home />
        <Settings />
      </div>
    </ThemeProvider>
  );
};

export default App;
