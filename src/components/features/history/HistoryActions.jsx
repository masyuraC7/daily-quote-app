import { Download, Trash2 } from 'lucide-react';
import { Button } from '../../ui/Button';
import { TogglePill } from '../../ui/TogglePill';

const FORMAT_OPTIONS = [
  { label: 'TXT', value: 'txt' },
  { label: 'PDF', value: 'pdf' },
];

export function HistoryActions({ history, format, onFormatChange, onDownload, onClear }) {
  const hasHistory = history.length > 0;

  return (
    <div className="action-bar">
      <TogglePill options={FORMAT_OPTIONS} value={format} onChange={onFormatChange} />
      <div className="action-bar__buttons">
        <Button icon={Download} onClick={onDownload} disabled={!hasHistory}>
          Download Collection
        </Button>
        <Button icon={Trash2} onClick={onClear} disabled={!hasHistory} variant="danger">
          Clear History
        </Button>
      </div>
    </div>
  );
}
