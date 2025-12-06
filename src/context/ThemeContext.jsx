import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    try {
      return localStorage.getItem('mode') === 'dark-mode';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('mode', isDark ? 'dark-mode' : 'light-mode');
    } catch (error) {
      console.warn('LocalStorage not available:', error);
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
