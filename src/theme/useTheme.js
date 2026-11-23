import { useCallback, useEffect, useState } from "react"

export const THEMES = ['system', 'light', 'dark'];

const STORAGE_KEY = 'calc-theme';

const readStoredTheme = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return THEMES.includes(stored) ? stored : 'system';
  } catch {
    return 'system';
  }
};

// Reflects the theme on <html data-theme>; "system" defers to prefers-color-scheme.
export const applyTheme = (theme) => {
  const root = document.documentElement;
  if (theme === 'system') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', theme);
  }
};

export const applyStoredTheme = () => applyTheme(readStoredTheme());

const useTheme = () => {
  const [theme, setThemeState] = useState(readStoredTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = useCallback((next) => {
    setThemeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the choice still applies for this session.
    }
  }, []);

  return [theme, setTheme];
};

export default useTheme
