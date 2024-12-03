import { useState } from 'react';
import apiService from '../services/apiService';

const useAPI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAIResponse = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiService.getAIResponse(query);
      setLoading(false);
      return response;
    } catch (err: any) {
      setLoading(false);
      setError(err.message || 'Something went wrong');
      throw err;
    }
  };

  return { fetchAIResponse, loading, error };
};

export default useAPI;
