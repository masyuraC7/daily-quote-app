const QUOTE_API_URL = 'https://dummyjson.com/quotes/random';

export async function fetchRandomQuote() {
  const response = await fetch(QUOTE_API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch quote data');
  }

  const data = await response.json();

  return {
    quote: data.quote,
    author: data.author,
  };
}
