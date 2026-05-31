import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/useTheme';

export function NavBar() {
  const { isLight, toggleTheme } = useTheme();
  const ThemeIcon = isLight ? Moon : Sun;
  const themeLabel = isLight ? 'Switch to dark theme' : 'Switch to light theme';

  return (
    <header className="nav-bar">
      <a className="nav-bar__brand" href="/">
        Daily Quote App
      </a>
      <div className="nav-bar__actions">
        <span className="nav-bar__meta">DUMMYJSON / QUOTE LOG</span>
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel}>
          <ThemeIcon aria-hidden="true" size={18} />
        </button>
      </div>
    </header>
  );
}
