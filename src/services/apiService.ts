import axios from 'axios';

const apiService = {
  /**
   * Fetches an AI-generated response based on the given query.
   * @param {string} query - The input query for the AI model.
   * @returns {Promise<string>} - The generated text from the AI model.
   */
  async getAIResponse(query: string): Promise<string> {
    const apiUrl = process.env.REACT_APP_AI_API_URL;
    const apiKey = process.env.REACT_APP_API_KEY;

    // Log for debugging
    console.debug('Fetching AI Response...');
    console.debug('API URL:', apiUrl);
    console.debug('API Key:', apiKey ? 'Provided' : 'Not Provided');

    // Validate environment variables
    if (!apiUrl || !apiKey) {
      throw new Error('Environment variables REACT_APP_AI_API_URL or REACT_APP_API_KEY are missing.');
    }

    try {
      // Prepare and send the API request
      console.info('Sending request to AI API...');
      const response = await axios.post(
        apiUrl,
        { inputs: query },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Validate the response structure
      const responseData = response.data;
      if (Array.isArray(responseData) && responseData[0]?.generated_text) {
        console.info('AI Response received successfully.');
        return responseData[0].generated_text;
      } else {
        console.warn('Unexpected response structure:', responseData);
        throw new Error('Unexpected response format received from the AI API.');
      }
    } catch (error: any) {
      console.error('Error occurred while fetching AI response:', error);

      // Handle API error responses
      if (error.response) {
        const { status, data } = error.response;
        console.error(`API Error - Status: ${status}, Response: ${JSON.stringify(data)}`);
        throw new Error(`API Error: ${data?.error || 'An unknown error occurred.'}`);
      }

      // Handle other types of errors
      throw new Error(error.message || 'An error occurred while communicating with the AI API.');
    }
  },
};

export default apiService;
