'use client';

import { useState } from 'react';

const LanguageSwitcher: React.FC = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('es')}>Español</button>
      <p>Selected language: {language}</p>
    </div>
  );
};

export default LanguageSwitcher;
