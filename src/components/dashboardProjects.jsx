import { useEffect, useRef } from 'react';
import './style/projects.css';

const projects = [
    {
        title: 'onGoing',
        description: 'Advanced task management tool with features including custom repetition, notifications, and automatic assignment to multiple users. Built with modern frontend and backend technologies.',
        techs: ['React', 'Cloudinary', 'AppScript', 'Google API', 'Node.js', 'Express', 'MongoDB', 'SQL Server', 'JWT'],
        image: '/onGoing.jpg',
        link: '#'
    },
    {
        title: 'CineCampus',
        description: 'Backend API for CineCampus, a platform that allows users to select movies, purchase tickets, assign seats, and apply VIP discounts. Built with MongoDB, it includes secure authentication, role-based access control (user, VIP, admin), and online payment processing. Designed to be scalable, efficient, and fully documented for easy integration.',
        techs: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Firebase', 'JWT', 'Axios', 'Cloudinary'],
        image: '/cineCampus.png',
        link: 'https://github.com/DanielEStebanChaconDiaz/proyectoMongoII'
    },
    {
        title: 'Ruraqmaki',
        description: 'E-commerce platform developed for Campuslands, connecting artisans from Bucaramanga with buyers passionate about authentic products. It features advanced user management, a dynamic catalog, interactive workshops, and real-time chat.',
        techs: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Cloudinary', 'Axios',],
        image: '/ruraqmaki.png',
        link: 'https://github.com/DanielEStebanChaconDiaz/expressProject'
    },
    {
        title: 'Spotify API Client',
        description: 'Music player application that leverages the Spotify API to explore artists, albums, and songs through a clean and intuitive interface. It allows users to search, discover, and play their favorite tracks seamlessly, offering an engaging and dynamic listening experience.',
        techs: ['HTML', 'JavaScript', 'CSS', 'Spotify API', 'Axios', 'Fetch',],
        image: '/spotify.png',
        link: 'https://github.com/DanielEStebanChaconDiaz/proyectoJavaScript'
    },
    {
        title: 'PokeDex Web App',
        description: 'Web-based Pokédex app using the PokeAPI. Allows filtering Pokémon by type and displays details like name, image, weight, abilities, and base stats. Built with a responsive layout and design inspired by the classic Pokédex.',
        techs: ['HTML', 'CSS', 'JavaScript', 'PokeAPI', 'Fetch',],
        image: '/pokeapi.png',
        link: 'https://github.com/DanielEStebanChaconDiaz/pokedex'
    },
];

export default function Projects() {
    const projectRefs = useRef([]);

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
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            projectRefs.current.forEach((card) => {
                if (card) {
                    observer.unobserve(card);
                }
            });
        };
    }, []);

    return (
        <section className="projectsSection">
            {/* Decorative elements */}
            <div className="glowingOrb orb1"></div>
            <div className="glowingOrb orb2"></div>
            
            <div className="projectsContainer">
                <h2 className="projectsTitle">My <span className="highlight">Projects</span></h2>
                <p className="projectsSubtitle">Explore some of my latest work and accomplishments</p>
                
                <div className="projectsGrid">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="projectCard"
                            ref={el => projectRefs.current[index] = el}
                        >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                            />
                            <div className="projectInfo">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="techList">
                                    {project.techs.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}