import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BotProvider } from './contexts/BotContext';
import { FeedbackProvider } from './contexts/FeedbackContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BotProvider>
      <FeedbackProvider>
        <App />
      </FeedbackProvider>
    </BotProvider>
  </React.StrictMode>
);

console.log('Environment variables loaded:');
console.log('REACT_APP_AI_API_URL:', process.env.REACT_APP_AI_API_URL);
console.log('REACT_APP_MICROSOFT_APP_ID:', process.env.REACT_APP_MICROSOFT_APP_ID);
