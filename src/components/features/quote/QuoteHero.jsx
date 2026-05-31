import { AlertCircle, RefreshCw } from 'lucide-react';
import { Card } from '../../ui/Card';

export function QuoteHero({ quote, isLoading, error }) {
  return (
    <Card className="quote-hero">
      {isLoading ? (
        <div className="state-panel">
          <RefreshCw aria-hidden="true" className="spin" size={28} />
          <p>Fetching quote stream...</p>
        </div>
      ) : error ? (
        <div className="state-panel state-panel--error">
          <AlertCircle aria-hidden="true" size={28} />
          <p>{error}</p>
        </div>
      ) : (
        <blockquote>
          <p className="quote-hero__text">"{quote?.quote}"</p>
          <footer className="quote-hero__author">{quote?.author}</footer>
        </blockquote>
      )}
    </Card>
  );
}
