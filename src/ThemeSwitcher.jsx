import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon'; 
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex justify-end m-2">
      <button
        onClick={toggleDarkMode}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        className={`text-sm flex items-center gap-1 px-4 py-2 rounded-full transition-colors duration-200 ${
          darkMode ? 'bg-zinc-100 text-gray-900' : 'bg-zinc-800 text-white'
        }`}
      >
        {darkMode ? (
          <>
            <FontAwesomeIcon icon={faSun} />
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faMoon} />
          </>
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;