import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const { isLight, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to night theme' : 'Switch to day theme'}
      title={isLight ? 'Night theme' : 'Day theme'}
      className={`relative w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-accent hover:glow-secondary transition-all duration-300 ${className}`}
    >
      <Sun
        className={`w-5 h-5 absolute transition-all duration-300 ${
          isLight ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
        }`}
      />
      <Moon
        className={`w-5 h-5 absolute transition-all duration-300 ${
          isLight ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
