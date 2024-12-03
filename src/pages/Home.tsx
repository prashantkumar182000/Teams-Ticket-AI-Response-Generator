import React, { useState } from 'react';
import QueryInput from '../components/QueryInput';
import AIResponseCard from '../components/AIResponseCard';
import FeedbackForm from '../components/FeedbackForm';
import useAPI from '../hooks/useAPI';
import { Container, CircularProgress, Typography, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';

const Home: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [editableResponse, setEditableResponse] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { fetchAIResponse, loading, error } = useAPI();

  const handleQuerySubmit = async (query: string) => {
    try {
      const aiResponse = await fetchAIResponse(query);
      setResponse(aiResponse);
      setEditableResponse(aiResponse);
      setAccepted(false);
      setShowFeedback(true);
    } catch (err) {
      console.error('Error fetching AI response:', err);
    }
  };

  const handleAccept = () => {
    if (editableResponse !== null) {
      setResponse(editableResponse);
      setEditableResponse(null);
      setAccepted(true);
      setOpenSnackbar(true);
    }
  };

  const handleEdit = (updatedResponse: string) => {
    if (!accepted) {
      setEditableResponse(updatedResponse);
    }
  };

  const handleRefine = async () => {
    if (response) {
      try {
        const refinedResponse = await fetchAIResponse(response);
        setEditableResponse(refinedResponse);
        setOpenSnackbar(true);
      } catch (err) {
        console.error('Error refining AI response:', err);
      }
    }
  };

  const handleFeedbackSubmission = () => {
    setShowFeedback(false);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const generateAdaptiveCardPayload = (responseText: string) => {
    return {
      type: 'AdaptiveCard',
      body: [
        {
          type: 'TextBlock',
          text: 'AI Response',
          weight: 'Bolder',
          size: 'Large',
        },
        {
          type: 'TextBlock',
          text: responseText,
          wrap: true,
          size: 'Medium',
        },
        {
          type: 'ActionSet',
          actions: [
            {
              type: 'Action.Submit',
              title: 'Accept',
              data: { action: 'accept' },
            },
            {
              type: 'Action.Submit',
              title: 'Edit',
              data: { action: 'edit' },
            },
            {
              type: 'Action.Submit',
              title: 'Refine',
              data: { action: 'refine' },
            },
          ],
        },
      ],
      $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
      version: '1.3',
    };
  };

  return (
    <Container maxWidth="md" style={{ padding: '2rem' }}>
      <QueryInput onSubmit={handleQuerySubmit} />
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {response && (
        <AIResponseCard
          cardPayload={generateAdaptiveCardPayload(editableResponse || response)}
          onAccept={handleAccept}
          onEdit={handleEdit}
          onRefine={handleRefine}
        />
      )}
      {showFeedback && <FeedbackForm onSubmit={handleFeedbackSubmission} />}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Action completed successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Home;
