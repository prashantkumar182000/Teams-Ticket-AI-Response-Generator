import axios from 'axios';

export const fetchAIResponse = async (query: string) => {
  const apiUrl = process.env.REACT_APP_AI_API_URL!;  // Use your AI API URL
  const apiKey = process.env.REACT_APP_API_KEY!;     // Use your API Key

  try {
    const response = await axios.post(
      apiUrl,
      { inputs: query },  // Send the user query as input
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,  // Pass the API key in headers
        },
      }
    );
    return response.data;  // Return the AI response
  } catch (error) {
    console.error('Error fetching AI response:', error);
    throw error;  // Throw error to be handled in the component
  }
};
