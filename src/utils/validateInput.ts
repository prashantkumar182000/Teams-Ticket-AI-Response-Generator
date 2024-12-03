export const validateQuery = (query: string): boolean => {
    if (!query || query.trim().length === 0) {
      return false; // Empty or whitespace-only query
    }
    if (query.length > 500) {
      return false; // Exceeds maximum character limit
    }
    return true;
  };
  
  export const getValidationMessage = (query: string): string => {
    if (!query || query.trim().length === 0) {
      return 'Query cannot be empty.';
    }
    if (query.length > 500) {
      return 'Query exceeds the maximum character limit of 500.';
    }
    return '';
  };
  