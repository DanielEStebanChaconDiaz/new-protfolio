import { useEffect, useRef } from 'react';
import './style/projects.css';
import { useLang } from '../context/LanguageContext';

const projectKeys = [
    {
        key: 'SEO Analyzer',
        techs: ['React', 'Python', 'PostgreSQL', 'Google API', 'JWT', 'Axios', 'MercadoPago', 'Groq', 'Firebase'],
        image: '/seoAnalyzer.png',
        link: 'https://seo-analyzer-frontend-c6vl.onrender.com',
    },
    {
        key: 'onGoing',
        techs: ['React', 'Cloudinary', 'AppScript', 'Google API', 'Node.js', 'Express', 'MongoDB', 'SQL Server', 'JWT'],
        image: '/onGoing.jpg',
        link: '#',
    },
    {
        key: 'CineCampus',
        techs: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Firebase', 'JWT', 'Axios', 'Cloudinary'],
        image: '/cineCampus.png',
        link: 'https://cineapp-1-7vg2.onrender.com/login',
    },
    {
        key: 'Ruraqmaki',
        techs: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Cloudinary', 'Axios'],
        image: '/ruraqmaki.png',
        link: 'https://github.com/DanielEStebanChaconDiaz/expressProject',
    },
    {
        key: 'Spotify API Client',
        techs: ['HTML', 'JavaScript', 'CSS', 'Spotify API', 'Axios', 'Fetch'],
        image: '/spotify.png',
        link: 'https://github.com/DanielEStebanChaconDiaz/proyectoJavaScript',
    },
    {
        key: 'PokeDex Web App',
        techs: ['HTML', 'CSS', 'JavaScript', 'PokeAPI', 'Fetch'],
        image: '/pokeapi.png',
        link: 'https://github.com/DanielEStebanChaconDiaz/pokedex',
    },
];

export default function Projects() {
    const projectRefs = useRef([]);
    const { t } = useLang();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        projectRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            projectRefs.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <section className="projectsSection">
            <div className="glowingOrb orb1"></div>
            <div className="glowingOrb orb2"></div>

            <div className="projectsContainer">
                <h2 className="projectsTitle">
                    {t.projects.title} <span className="highlight">{t.projects.titleHighlight}</span>
                </h2>
                <p className="projectsSubtitle">{t.projects.subtitle}</p>

                <div className="projectsGrid">
                    {projectKeys.map((project, index) => (
                        <div
                            key={index}
                            className="projectCard"
                            ref={el => projectRefs.current[index] = el}
                        >
                            <img src={project.image} alt={project.key} />
                            <div className="projectInfo">
                                <h3>{project.key}</h3>
                                <p>{t.projects.descriptions[project.key]}</p>
                                <div className="techList">
                                    {project.techs.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    {t.projects.viewProject}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
