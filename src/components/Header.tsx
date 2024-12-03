import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1e1e1e' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          AI Response App
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
