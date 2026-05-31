import { useCallback, useEffect, useState } from 'react';
import { fetchRandomQuote } from '../services/api';

export function useFetchQuote() {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const quote = await fetchRandomQuote();
      setCurrentQuote(quote);
      return quote;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    fetchRandomQuote()
      .then((quote) => {
        if (isMounted) {
          setCurrentQuote(quote);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { currentQuote, isLoading, error, fetchQuote };
}
