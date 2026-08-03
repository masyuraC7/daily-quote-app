import { Trash2 } from 'lucide-react';
import { IconButton } from '../../ui/IconButton';
import { formatDate } from '../../../utils/formatDate';

export function HistoryItem({ item, onDelete }) {
  return (
    <li className="history-item">
      <div className="history-item__content">
        <time className="history-item__time" dateTime={item.createdAt}>
          {formatDate(item.createdAt)}
        </time>
        <p className="history-item__quote">{item.quote}</p>
        <p className="history-item__author">{item.author}</p>
      </div>
      <IconButton icon={Trash2} label={`Delete quote by ${item.author}`} onClick={() => onDelete(item.id)} />
    </li>
  );
}
