import React, { useState, useEffect } from 'react';
import './style/skills.css';

export default function Skills() {
    const [animatedSkills, setAnimatedSkills] = useState([]);

    // Skills con sus iconos y niveles de dominio (0-100)
    const skills = [
        { name: 'JavaScript', icon: '⚡', level: 100 },
        { name: 'React', icon: '⚛️', level: 85 },
        { name: 'Node.js', icon: '🟢', level: 100 },
        { name: 'Express', icon: '🚀', level: 100 },
        { name: 'MongoDB', icon: '🍃', level: 100 },
        { name: 'SQL Server', icon: '📊', level: 60 },
        { name: 'HTML', icon: '📝', level: 100 },
        { name: 'CSS', icon: '🎨', level: 95 },
        { name: 'Git', icon: '📂', level: 100 },
        { name: 'REST APIs', icon: '🔌', level: 95 },
        { name: 'Vite', icon: '⚡', level: 75 },
        { name: 'JWT', icon: '🔑', level: 90 }
    ];

    // Efecto para animar la aparición de las habilidades de forma escalonada
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const timer = setTimeout(() => {
                    setAnimatedSkills(skills);
                }, 300);
                return () => clearTimeout(timer);
            }
        }, { threshold: 0.2 });

        const skillsSection = document.querySelector('.skillsSection');
        if (skillsSection) observer.observe(skillsSection);

        return () => {
            if (skillsSection) observer.unobserve(skillsSection);
        };
    }, []);

    return (
        <section className="skillsSection" id="skills">
            <div className="skillsContainer">
                <h2 className="skillsTitle">
                    Technical <span className="highlight">Skills</span>
                </h2>
                <p className="skillsSubtitle">
                    Technologies I've been working with recently
                </p>

                <div className="skillsGrid">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`skillCard ${animatedSkills.length > index ? 'animate' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="skillIcon">{skill.icon}</div>
                            <h3 className="skillName">{skill.name}</h3>
                            <div className="skillBarContainer">
                                <div
                                    className="skillBar"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Elementos decorativos */}
            <div className="glowingOrb orb1"></div>
            <div className="glowingOrb orb2"></div>
            <div className="glowingOrb orb3"></div>
        </section>
    );
}