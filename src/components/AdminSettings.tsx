import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Box,
  Typography,
  Paper,
} from '@mui/material';

const AdminSettings: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [apiEndpoint, setApiEndpoint] = useState('');
  const [enabledFeatures, setEnabledFeatures] = useState({
    feedback: true,
    refine: true,
  });
  const [showSettings, setShowSettings] = useState(false);
  const [error, setError] = useState('');

  const handleToggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate API key and endpoint
    if (!apiKey.trim() || !apiEndpoint.trim()) {
      setError('API Key and Endpoint are required');
      return;
    }

    setError('');
    console.log('Settings Saved:', { apiKey, apiEndpoint, enabledFeatures });
    alert('Settings saved successfully!');
    // Here you can also save the settings to localStorage, context, or make an API call to persist settings
  };

  return (
    <Box p={3}>
      {/* Admin Settings Button */}
      <Button
        variant="contained"
        color={showSettings ? 'secondary' : 'primary'}
        onClick={handleToggleSettings}
        sx={{ marginBottom: 2 }}
      >
        {showSettings ? 'Hide Admin Settings' : 'Admin Settings'}
      </Button>

      {showSettings && (
        <Paper elevation={3} sx={{ padding: 3, maxWidth: 400, margin: '0 auto' }}>
          <Typography variant="h6" gutterBottom>
            Admin Settings
          </Typography>
          <form onSubmit={handleSubmit}>
            {/* API Key Input */}
            <Box mb={3}>
              <TextField
                id="apiKey"
                label="API Key"
                variant="outlined"
                fullWidth
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your API Key"
                required
              />
            </Box>

            {/* API Endpoint URL Input */}
            <Box mb={3}>
              <TextField
                id="apiEndpoint"
                label="API Endpoint URL"
                variant="outlined"
                fullWidth
                value={apiEndpoint}
                onChange={(e) => setApiEndpoint(e.target.value)}
                placeholder="Enter API Endpoint URL"
                required
              />
            </Box>

            {/* Enable Feedback Toggle */}
            <FormControlLabel
              control={
                <Checkbox
                  id="enableFeedback"
                  checked={enabledFeatures.feedback}
                  onChange={(e) =>
                    setEnabledFeatures({
                      ...enabledFeatures,
                      feedback: e.target.checked,
                    })
                  }
                />
              }
              label="Enable Feedback"
            />

            {/* Enable Refinement Toggle */}
            <FormControlLabel
              control={
                <Checkbox
                  id="enableRefine"
                  checked={enabledFeatures.refine}
                  onChange={(e) =>
                    setEnabledFeatures({
                      ...enabledFeatures,
                      refine: e.target.checked,
                    })
                  }
                />
              }
              label="Enable Refinement"
            />

            {/* Save Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Save Settings
            </Button>
            {error && (
              <Typography color="error" variant="body2" sx={{ marginTop: 2 }}>
                {error}
              </Typography>
            )}
          </form>
        </Paper>
      )}
    </Box>
  );
};

export default AdminSettings;
