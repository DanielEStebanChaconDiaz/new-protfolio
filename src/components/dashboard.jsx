import { useEffect } from 'react';
import './style/dashboard.css';
import { Github, Linkedin } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function Dashboard() {
    const { t } = useLang();

    useEffect(() => {
        const handleScroll = () => {};
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="firstContent">
            <div className="textContent">
                <h1>{t.home.welcome}</h1>
                <h2>{t.home.intro}</h2>
                <div className="icons">
                    <nav>
                        <ul className="navList">
                            <li>
                                <a href="https://github.com/DanielEStebanChaconDiaz" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                                    <Github size={50} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/danielestebanchacondiaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                                    <Linkedin size={50} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="imageContent">
                <img src="/hoja de vida.jpg" alt="Daniel Chacon" />
            </div>
        </div>
    );
}
