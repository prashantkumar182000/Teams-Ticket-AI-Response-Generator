import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Grid,
} from '@mui/material';

interface FeedbackFormProps {
  onSubmit: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  return (
    <Card style={{ marginTop: '1rem', backgroundColor: '#1e1e1e' }}>
      <CardContent>
        <Typography variant="h6" style={{ color: '#ffffff', marginBottom: '1rem' }}>
          Feedback Form
        </Typography>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              label="Your Feedback"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              style={{ backgroundColor: '#2c2c2c', color: '#ffffff' }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" fullWidth onClick={onSubmit}>
              Submit Feedback
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FeedbackForm;
