import { RefreshCw } from 'lucide-react';
import { Button } from '../../ui/Button';

export function QuoteActions({ isLoading, onGenerate }) {
  return (
    <div className="quote-actions">
      <Button icon={RefreshCw} onClick={onGenerate} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate New Quote'}
      </Button>
    </div>
  );
}
