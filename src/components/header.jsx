import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style/header.css';
import { useLang } from '../context/LanguageContext';

export default function Headers() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { lang, t, toggleLang } = useLang();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const navLinks = [
        { label: t.nav.home, to: '/' },
        { label: t.nav.about, to: '/about' },
        { label: t.nav.skills, to: '/skills' },
        { label: t.nav.projects, to: '/projects' },
        { label: t.nav.cv, to: '/cv' },
        { label: t.nav.contact, to: '/contact' },
    ];

    return (
        <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <h1 className="headerLogo">Daniel Chacon</h1>

            {/* Hamburger Menu Button */}
            <div
                className={`hamburger ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navigation */}
            <nav className={isOpen ? 'open' : ''}>
                <ul className="navList">
                    {navLinks.map(({ label, to }) => (
                        <li key={to} className={location.pathname === to ? 'active' : ''}>
                            <Link to={to} onClick={handleLinkClick}>{label}</Link>
                        </li>
                    ))}
                    <li>
                        <button
                            className="langToggle"
                            onClick={() => { toggleLang(); handleLinkClick(); }}
                            aria-label="Toggle language"
                        >
                            {lang === 'es' ? '🇺🇸 EN' : '🇨🇴 ES'}
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Overlay when mobile menu is open */}
            {isOpen && (
                <div
                    className="menuOverlay"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}
