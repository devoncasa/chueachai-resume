
import React from 'react';

interface LanguageToggleProps {
  currentLanguage: 'en' | 'th';
  toggleLanguage: () => void;
  labels: { en: string; th: string };
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage, toggleLanguage, labels }) => {
  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-earth-dark text-white rounded-full shadow-lg hover:bg-earth-text transition-colors focus:outline-none focus:ring-2 focus:ring-earth-main focus:ring-opacity-75 text-sm font-semibold"
    >
      {currentLanguage === 'en' ? labels.th : labels.en}
    </button>
  );
};

export default LanguageToggle;
