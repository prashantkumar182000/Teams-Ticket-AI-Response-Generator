import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

interface QueryInputProps {
  onSubmit: (query: string) => void;
}

const QueryInput: React.FC<QueryInputProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (query.trim()) {
      onSubmit(query);
      setQuery('');
    }
  };

  return (
    <Grid container spacing={2} style={{ marginBottom: '2rem' }}>
      <Grid item xs={9}>
        <TextField
          label="Enter your query"
          variant="outlined"
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ backgroundColor: '#2c2c2c', color: '#ffffff' }}
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default QueryInput;
