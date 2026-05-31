import { formatDate } from './formatDate';

function buildTxtContent(history) {
  return [
    'DAILY QUOTE COLLECTION',
    '======================',
    '',
    ...history.flatMap((item, index) => [
      `#${String(index + 1).padStart(2, '0')} | ${formatDate(item.createdAt)}`,
      `"${item.quote}"`,
      `-- ${item.author}`,
      '',
    ]),
  ].join('\n');
}

export function exportTxt(history) {
  const blob = new Blob([buildTxtContent(history)], {
    type: 'text/plain;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = 'daily-quote-collection.txt';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
