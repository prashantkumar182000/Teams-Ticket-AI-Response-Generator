import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BotContextProps {
response: string;
loading: boolean;
error: string | null;
sendQuery: (query: string) => Promise<void>;
}

const BotContext = createContext<BotContextProps | undefined>(undefined);

export const BotProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
const [response, setResponse] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

const sendQuery = async (query: string) => {
setLoading(true);
setError(null);
setResponse('');

try {
const apiService = await import('../services/apiService');
const result = await apiService.default.getAIResponse(query);
setResponse(result || 'No response received.'); // Directly set the string response
} catch (err: any) {
setError(err.message || 'Something went wrong.');
} finally {
setLoading(false);
}
};

return (
<BotContext.Provider value={{ response, loading, error, sendQuery }}>
{children}
</BotContext.Provider>
);
};

export const useBot = (): BotContextProps => {
const context = useContext(BotContext);
if (!context) {
throw new Error('useBot must be used within a BotProvider');
}
return context;
};