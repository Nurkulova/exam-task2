import { useEffect, useState } from 'react';

function useTheme() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const [theme, setTheme] = useState(prefersDarkMode ? 'dark-mode' : 'light-mode');
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light-mode' ? 'dark-mode'  : 'light-mode';
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
}

export default useTheme;
