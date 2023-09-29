import React from 'react';
import useTheme from './useTheme';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button className="mode-btn" onClick={toggleTheme}>
        {theme === 'light-mode'? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}</button>
    </div>
  );
}

export default App;

