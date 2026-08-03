import { AlertCircle } from 'lucide-react';
import { Card } from '../../ui/Card';

export function QuoteHero({ quote, isLoading, error }) {
  return (
    <Card className="quote-hero" aria-busy={isLoading}>
      {isLoading ? (
        <div className="quote-skeleton" aria-hidden="true">
          <span className="quote-skeleton__line quote-skeleton__line--lg" />
          <span className="quote-skeleton__line quote-skeleton__line--lg" />
          <span className="quote-skeleton__line quote-skeleton__line--md" />
          <span className="quote-skeleton__author" />
        </div>
      ) : error ? (
        <div className="state-panel state-panel--error" role="alert">
          <AlertCircle aria-hidden="true" size={26} />
          <p>{error}</p>
        </div>
      ) : (
        <blockquote aria-live="polite">
          <p className="quote-hero__text">{quote?.quote}</p>
          <footer className="quote-hero__author">{quote?.author}</footer>
        </blockquote>
      )}
    </Card>
  );
}
