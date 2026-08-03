import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { HistoryActions } from './components/features/history/HistoryActions';
import { HistoryList } from './components/features/history/HistoryList';
import { QuoteActions } from './components/features/quote/QuoteActions';
import { QuoteHero } from './components/features/quote/QuoteHero';
import { MainLayout } from './components/layout/MainLayout';
import { useFetchQuote } from './hooks/useFetchQuote';
import { useQuoteHistory } from './hooks/useQuoteHistory';
import { exportPdf } from './utils/exportPdf';
import { exportTxt } from './utils/exportTxt';

function App() {
  const [format, setFormat] = useState('txt');
  const { currentQuote, isLoading, error, fetchQuote } = useFetchQuote();
  const { history, addQuote, deleteQuote, clearHistory } = useQuoteHistory();

  const handleGenerateQuote = async () => {
    const quote = await fetchQuote();
    addQuote(quote);
  };

  const handleDownload = () => {
    if (format === 'pdf') {
      exportPdf(history);
      return;
    }

    exportTxt(history);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <MainLayout>
      <div className="hero-stack">
        <div className="page-heading">
          <p className="eyebrow">Daily Quote Runtime</p>
          <h1>Generate, log, and export quotes.</h1>
        </div>
        <QuoteHero error={error} isLoading={isLoading} quote={currentQuote} />
        <QuoteActions isLoading={isLoading} onGenerate={handleGenerateQuote} />
      </div>

      <div className="history-stack">
        <HistoryActions
          format={format}
          history={history}
          onClear={clearHistory}
          onDownload={handleDownload}
          onFormatChange={setFormat}
        />
        <HistoryList history={history} onDelete={deleteQuote} />
      </div>
      <Analytics />
      <SpeedInsights />
    </MainLayout>
    </>
  );
}

export default App;
