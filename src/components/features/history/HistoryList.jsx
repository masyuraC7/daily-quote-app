import { HistoryItem } from './HistoryItem';

export function HistoryList({ history, onDelete }) {
  return (
    <section className="history-container" aria-labelledby="history-title">
      <div className="history-container__header">
        <p className="eyebrow">History Log</p>
        <h2 id="history-title">Quote Collection</h2>
      </div>

      {history.length > 0 ? (
        <ul className="history-list">
          {history.map((item) => (
            <HistoryItem item={item} key={item.id} onDelete={onDelete} />
          ))}
        </ul>
      ) : (
        <p className="empty-state">No quote logs yet. Generate a quote to start the collection.</p>
      )}
    </section>
  );
}
