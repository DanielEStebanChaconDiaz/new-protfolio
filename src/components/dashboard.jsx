import { useEffect } from 'react';
import './style/dashboard.css';
import { Github, Linkedin } from 'lucide-react';

export default function Dashboard() {
    // Optional: Add animation on scroll if needed
    useEffect(() => {
        const handleScroll = () => {
            // You can add scroll animations here if needed
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="firstContent">
            <div className="textContent">
                <h1>Welcome to my portfolio</h1>
                <h2>
                    I'm Daniel, a software developer with a passion for creating engaging and user-friendly experiences.
                </h2>
                <div className="icons">
                    <nav>
                        <ul className='navList'>
                            <li>
                                <a href="https://github.com/DanielEStebanChaconDiaz" aria-label="GitHub Profile">
                                    <Github size={50}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/danielestebanchacondiaz/" aria-label="LinkedIn Profile">
                                    <Linkedin size={50}/> 
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