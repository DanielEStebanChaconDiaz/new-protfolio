import { useEffect } from 'react';
import './style/dashboard.css';
import { Github, Linkedin } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function Dashboard() {
    const { t } = useLang();

    useEffect(() => {
        document.querySelectorAll('img').forEach(img => {
            if (img.complete) img.classList.add('loaded');
            else img.addEventListener('load', () => img.classList.add('loaded'));
        });
    }, []);

    return (
        <div className="firstContent">
            <div className="textContent">
                <span className="eyebrow">Full-Stack Developer</span>
                <h1>
                    Daniel<br />
                    <span className="line-accent">Esteban.</span>
                </h1>
                <h2>{t.home.intro}</h2>
                <div className="icons">
                    <nav>
                        <ul className="navList">
                            <li>
                                <a href="https://github.com/DanielEStebanChaconDiaz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <Github size={22} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/danielestebanchacondiaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Linkedin size={22} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="imageContent">
                <img src="/hoja de vida.jpg" alt="Daniel Esteban Chacon" />
            </div>
        </div>
    );
}
