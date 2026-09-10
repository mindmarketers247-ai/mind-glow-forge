import { useCallback, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'mm-theme';

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : 'dark';
};

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.toggle('light', theme === 'light');
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
    window.dispatchEvent(new CustomEvent('mm-theme-change', { detail: theme }));
  }, [theme]);

  useEffect(() => {
    const handler = (e: Event) => {
      const next = (e as CustomEvent<Theme>).detail;
      setTheme((prev) => (prev === next ? prev : next));
    };
    window.addEventListener('mm-theme-change', handler);
    return () => window.removeEventListener('mm-theme-change', handler);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, setTheme, toggleTheme, isLight: theme === 'light' };
};
