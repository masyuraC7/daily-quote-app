import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'daily-quote-history';

function readHistory() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function useQuoteHistory() {
  const [history, setHistory] = useState(() => readHistory());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const addQuote = useCallback((quote) => {
    if (!quote) {
      return;
    }

    setHistory((items) => [
      {
        id: `${Date.now()}-${crypto.randomUUID()}`,
        quote: quote.quote,
        author: quote.author,
        createdAt: new Date().toISOString(),
      },
      ...items,
    ]);
  }, []);

  const deleteQuote = useCallback((id) => {
    setHistory((items) => items.filter((item) => item.id !== id));
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return { history, addQuote, deleteQuote, clearHistory };
}
