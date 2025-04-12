import { useState, useEffect } from 'react';
import './style/header.css';

export default function Headers() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scrolling effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close menu when clicking a link (for mobile)
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <h1 className="headerLogo">Daniel Chacon</h1>
            
            {/* Hamburger Menu Button (visible only on mobile) */}
            <div 
                className={`hamburger ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            {/* Navigation */}
            <nav className={isOpen ? 'open' : ''}>
                <ul className='navList'>
                    <li><a href="#" onClick={handleLinkClick}>Home</a></li>
                    <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                    <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                    <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                    <li><a href="#CV" onClick={handleLinkClick}>CV</a></li>
                    <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}