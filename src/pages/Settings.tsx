import React from 'react';
import AdminSettings from '../components/AdminSettings';
import { Container } from '@mui/material';

const Settings: React.FC = () => {
  return (
    <Container maxWidth="sm" style={{ padding: '2rem' }}>
      <AdminSettings />
    </Container>
  );
};

export default Settings;
