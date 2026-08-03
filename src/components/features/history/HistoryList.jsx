import { Quote } from 'lucide-react';
import { HistoryItem } from './HistoryItem';

export function HistoryList({ history, onDelete }) {
  return (
    <section className="history-container" aria-labelledby="history-title">
      <div className="history-container__header">
        <div>
          <p className="eyebrow">History Log</p>
          <h2 id="history-title">Quote Collection</h2>
        </div>
        <span aria-label={`${history.length} logged quotes`} className="history-container__count">
          {history.length} logged
        </span>
      </div>

      {history.length > 0 ? (
        <ul className="history-list">
          {history.map((item) => (
            <HistoryItem item={item} key={item.id} onDelete={onDelete} />
          ))}
        </ul>
      ) : (
        <div className="empty-state">
          <span aria-hidden="true" className="empty-state__icon">
            <Quote size={20} />
          </span>
          <p className="empty-state__title">Collection is empty</p>
          <p className="empty-state__hint">Generate a quote and it will be logged here automatically.</p>
        </div>
      )}
    </section>
  );
}
