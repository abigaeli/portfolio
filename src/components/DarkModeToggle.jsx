import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
      className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
    </button>
  );
}

export default DarkModeToggle;
