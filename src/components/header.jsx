import { useEffect, useState } from 'react';
import { Languages } from 'lucide-react';
import './style/header.css';
import { useLang } from '../context/LanguageContext';
import { useActiveSection } from '../hooks/useActiveSection';

const sectionIds = ['about', 'experience', 'skills', 'projects', 'terminal', 'contact'];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const { t, toggleLang } = useLang();
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(window.scrollY > 10);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll y cerrar con Escape mientras el menú móvil está abierto
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="headerLogo" onClick={close}>
        <span className="logoBracket">&lt;</span>DanielChacon<span className="logoBracket"> /&gt;</span>
      </a>

      <nav id="mainNav" className={isOpen ? 'open' : ''} aria-label="Principal">
        <ul className="navList">
          {sectionIds.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'active' : ''} onClick={close}>
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="headerActions">
        <button type="button" className="langToggle" onClick={toggleLang} aria-label={t.header.langAria}>
          <Languages size={16} aria-hidden="true" />
          {t.header.lang}
        </button>
        <button
          type="button"
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? t.header.closeMenu : t.header.openMenu}
          aria-expanded={isOpen}
          aria-controls="mainNav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isOpen && <div className="menuOverlay" onClick={close} />}
      <div className="scrollProgress" style={{ transform: `scaleX(${progress})` }} />
    </header>
  );
}
