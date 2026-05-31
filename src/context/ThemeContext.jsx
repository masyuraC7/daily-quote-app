import { useEffect, useMemo, useState } from 'react';
import { ThemeContext } from './theme';

const THEME_STORAGE_KEY = 'daily-quote-theme';
const DEFAULT_THEME = 'dark';
const THEMES = ['dark', 'light'];

function getInitialTheme() {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (THEMES.includes(storedTheme)) {
      return storedTheme;
    }
  } catch {
    return DEFAULT_THEME;
  }

  return DEFAULT_THEME;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      isLight: theme === 'light',
      toggleTheme: () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
