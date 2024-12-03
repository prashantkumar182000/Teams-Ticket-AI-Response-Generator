import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FeedbackContextProps {
  feedback: string | null;
  setFeedback: (feedback: string) => void;
  clearFeedback: () => void;
}

const FeedbackContext = createContext<FeedbackContextProps | undefined>(undefined);

export const FeedbackProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [feedback, setFeedbackState] = useState<string | null>(null);

  const setFeedback = (feedback: string) => {
    setFeedbackState(feedback);
  };

  const clearFeedback = () => {
    setFeedbackState(null);
  };

  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback, clearFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = (): FeedbackContextProps => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
};
