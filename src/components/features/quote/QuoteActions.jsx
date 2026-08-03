import { RefreshCw } from 'lucide-react';
import { Button } from '../../ui/Button';

export function QuoteActions({ isLoading, onGenerate }) {
  return (
    <div className="quote-actions">
      <Button
        className={isLoading ? 'btn-icon-spin' : ''}
        disabled={isLoading}
        icon={RefreshCw}
        onClick={onGenerate}
      >
        {isLoading ? 'Generating…' : 'Generate New Quote'}
      </Button>
    </div>
  );
}
