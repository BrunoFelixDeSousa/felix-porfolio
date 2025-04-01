import { Moon, Sun } from 'lucide-react';
import { useTheme } from './theme/theme-provider';

export function Header() {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <header className="flex justify-between items-center p-4 md:p-8 md:mx-10">
      <h1 className="font-sigmar-one text-2xl md:text-3xl font-bold text-[#b5a265] dark:text-[#b5a265]">
        PORTFOLIO
      </h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-[#b5a265] text-white"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button>
    </header>
  );
}
