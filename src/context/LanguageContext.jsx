import { createContext, useContext, useEffect, useState } from 'react';
import { ui } from '../data/ui';

const STORAGE_KEY = 'portfolio-lang';

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
    // localStorage no disponible (modo privado, etc.)
  }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);
  const t = ui[lang];
  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignorar
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  return useContext(LanguageContext);
}
