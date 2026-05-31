import { jsPDF } from 'jspdf';
import { formatDate } from './formatDate';

export function exportPdf(history) {
  const doc = new jsPDF({
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 48;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  doc.setFillColor('#101010');
  doc.rect(0, 0, pageWidth, pageHeight, 'F');
  doc.setTextColor('#00d992');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('DAILY QUOTE COLLECTION', margin, y);
  y += 28;

  history.forEach((item, index) => {
    const lines = doc.splitTextToSize(`"${item.quote}"`, contentWidth);
    const blockHeight = 52 + lines.length * 17;

    if (y + blockHeight > pageHeight - margin) {
      doc.addPage();
      doc.setFillColor('#101010');
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
      y = margin;
    }

    doc.setDrawColor('#3d3a39');
    doc.line(margin, y, pageWidth - margin, y);
    y += 20;

    doc.setTextColor('#8b949e');
    doc.setFont('courier', 'normal');
    doc.setFontSize(9);
    doc.text(`#${String(index + 1).padStart(2, '0')}  ${formatDate(item.createdAt)}`, margin, y);
    y += 20;

    doc.setTextColor('#f2f2f2');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(lines, margin, y);
    y += lines.length * 17 + 8;

    doc.setTextColor('#00d992');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(item.author.toUpperCase(), margin, y);
    y += 24;
  });

  doc.save('daily-quote-collection.pdf');
}
