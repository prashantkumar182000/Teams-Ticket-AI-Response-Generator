import React, { useEffect, useRef, useState } from 'react';
import * as AdaptiveCards from 'adaptivecards';
import { Card, CardContent } from '@mui/material';

interface AIResponseCardProps {
  cardPayload: object; // Adaptive Card JSON schema
  onAccept: () => void;
  onEdit: (updatedResponse: string) => void;
  onRefine: () => void;
}

// Type guard to check if the action has a property `action`
function hasActionData(action: any): action is { data: { action: string } } {
  return action && action.data && typeof action.data.action === 'string';
}

const AIResponseCard: React.FC<AIResponseCardProps> = ({
  cardPayload,
  onAccept,
  onEdit,
  onRefine,
}) => {
  const cardContainer = useRef<HTMLDivElement>(null);
  const [renderedCard, setRenderedCard] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (cardContainer.current) {
      const adaptiveCard = new AdaptiveCards.AdaptiveCard();
      adaptiveCard.parse(cardPayload);

      adaptiveCard.onExecuteAction = (action: any) => {
        if (hasActionData(action)) {
          switch (action.data.action) {
            case 'accept':
              onAccept();
              break;
            case 'edit':
              const updatedResponse = prompt('Edit response:', '');
              if (updatedResponse !== null) {
                onEdit(updatedResponse);
              }
              break;
            case 'refine':
              onRefine();
              break;
            default:
              console.log('Unknown action:', action.data.action);
          }
        } else {
          console.error('Invalid action data', action);
        }
      };

      const renderedCardElement = adaptiveCard.render();
      setRenderedCard(renderedCardElement);
      cardContainer.current.appendChild(renderedCardElement);
    }
  }, [cardPayload, onAccept, onEdit, onRefine]);

  useEffect(() => {
    return () => {
      if (renderedCard) {
        cardContainer.current?.removeChild(renderedCard);
      }
    };
  }, [renderedCard]);

  return (
    <Card style={{ marginBottom: '1rem', backgroundColor: '#1e1e1e' }}>
      <CardContent ref={cardContainer}></CardContent>
    </Card>
  );
};

export default AIResponseCard;