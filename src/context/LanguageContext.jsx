import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Header
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      cv: 'CV',
      contact: 'Contact',
    },
    // Dashboard / Home
    home: {
      welcome: 'Welcome to my portfolio',
      intro: "I'm Daniel, a software developer with a passion for creating engaging and user-friendly experiences.",
    },
    // About
    about: {
      title: 'About Me',
      p1: "Hi, my name is Daniel Esteban. I'm 18 years old and a full-stack developer with experience in building web solutions, both on the frontend and backend. For over a year, I've been working on projects that combine personal and professional development, using technologies such as React, Node.js, Express, MongoDB, and SQL Server.",
      p2: "I consider myself proactive, self-taught, and focused on delivering real value in every project I take part in. I enjoy working in teams, sharing ideas, and learning from others. My goal is always to build functional, scalable solutions with a user-centered mindset.",
      p3: "One of my medium-term goals is to build a self-sustaining business, which reflects my mindset towards growth, independence, and efficiency. I'm also passionate about strengthening my skills in software development, learning new technologies, and taking on challenges that push me both technically and creatively.",
      p4: "I'm currently looking for opportunities where I can continue growing professionally, contribute with my knowledge, and learn within a dynamic and collaborative environment. If you're looking for someone who is committed, eager to improve, and quick to adapt, I'm ready to take on that role.",
    },
    // Skills
    skills: {
      title: 'Technical',
      titleHighlight: 'Skills',
      subtitle: "Technologies I've been working with recently",
    },
    // Projects
    projects: {
      title: 'My',
      titleHighlight: 'Projects',
      subtitle: 'Explore some of my latest work and accomplishments',
      viewProject: 'View Project',
      descriptions: {
        'SEO Analyzer': 'SEO Analyzer is a web application that provides comprehensive analysis of website SEO performance. It offers insights into keyword usage, backlink profiles, and overall site health, helping users optimize their online presence and improve search engine rankings.',
        'onGoing': 'Advanced task management tool with features including custom repetition, notifications, and automatic assignment to multiple users. Built with modern frontend and backend technologies.',
        'CineCampus': 'Backend API for CineCampus, a platform that allows users to select movies, purchase tickets, assign seats, and apply VIP discounts. Built with MongoDB, it includes secure authentication, role-based access control (user, VIP, admin), and online payment processing.',
        'Ruraqmaki': 'E-commerce platform developed for Campuslands, connecting artisans from Bucaramanga with buyers passionate about authentic products. It features advanced user management, a dynamic catalog, interactive workshops, and real-time chat.',
        'Spotify API Client': 'Music player application that leverages the Spotify API to explore artists, albums, and songs through a clean and intuitive interface. It allows users to search, discover, and play their favorite tracks seamlessly.',
        'PokeDex Web App': 'Web-based Pokédex app using the PokeAPI. Allows filtering Pokémon by type and displays details like name, image, weight, abilities, and base stats. Built with a responsive layout and design inspired by the classic Pokédex.',
      },
    },
    // CV
    cv: {
      title: 'My',
      titleHighlight: 'Curriculum',
      subtitle: 'Check out my professional experience and qualifications',
      mobileMessage: 'For a better viewing experience, please download the CV',
      downloadEs: 'Download CV (Spanish)',
      downloadEn: 'Download CV (English)',
    },
    // Contact
    contact: {
      title: 'Get',
      titleHighlight: 'In Touch',
      description: 'Have a project in mind, an idea, or just want to say hello? Write to me!',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message',
      or: 'Or email me directly at:',
    },
  },
  es: {
    // Header
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      cv: 'CV',
      contact: 'Contacto',
    },
    // Dashboard / Home
    home: {
      welcome: 'Bienvenido a mi portafolio',
      intro: 'Soy Daniel, desarrollador de software apasionado por crear experiencias atractivas y fáciles de usar.',
    },
    // About
    about: {
      title: 'Sobre Mí',
      p1: 'Hola, mi nombre es Daniel Esteban. Tengo 18 años y soy desarrollador full-stack con experiencia en la construcción de soluciones web, tanto en el frontend como en el backend. Durante más de un año he trabajado en proyectos que combinan el desarrollo personal y profesional, usando tecnologías como React, Node.js, Express, MongoDB y SQL Server.',
      p2: 'Me considero proactivo, autodidacta y enfocado en entregar valor real en cada proyecto en el que participo. Disfruto trabajar en equipo, compartir ideas y aprender de los demás. Mi objetivo siempre es construir soluciones funcionales y escalables con una mentalidad centrada en el usuario.',
      p3: 'Uno de mis objetivos a mediano plazo es construir un negocio autosostenible, lo que refleja mi mentalidad hacia el crecimiento, la independencia y la eficiencia. También me apasiona fortalecer mis habilidades en desarrollo de software, aprender nuevas tecnologías y asumir retos que me impulsen técnica y creativamente.',
      p4: 'Actualmente busco oportunidades donde pueda seguir creciendo profesionalmente, aportar con mi conocimiento y aprender dentro de un entorno dinámico y colaborativo. Si buscas a alguien comprometido, con ganas de mejorar y con rápida adaptación, estoy listo para asumir ese rol.',
    },
    // Skills
    skills: {
      title: 'Habilidades',
      titleHighlight: 'Técnicas',
      subtitle: 'Tecnologías con las que he trabajado recientemente',
    },
    // Projects
    projects: {
      title: 'Mis',
      titleHighlight: 'Proyectos',
      subtitle: 'Explora algunos de mis trabajos y logros más recientes',
      viewProject: 'Ver Proyecto',
      descriptions: {
        'SEO Analyzer': 'SEO Analyzer es una aplicación web que ofrece un análisis completo del rendimiento SEO de un sitio. Brinda información sobre uso de palabras clave, perfiles de backlinks y salud general del sitio, ayudando a los usuarios a optimizar su presencia en línea.',
        'onGoing': 'Herramienta avanzada de gestión de tareas con repetición personalizada, notificaciones y asignación automática a múltiples usuarios. Construida con tecnologías modernas de frontend y backend.',
        'CineCampus': 'API backend para CineCampus, una plataforma que permite a los usuarios seleccionar películas, comprar boletas, asignar asientos y aplicar descuentos VIP. Incluye autenticación segura, control de acceso por roles y procesamiento de pagos en línea.',
        'Ruraqmaki': 'Plataforma de e-commerce desarrollada para Campuslands, que conecta artesanos de Bucaramanga con compradores apasionados por productos auténticos. Cuenta con gestión de usuarios, catálogo dinámico, talleres interactivos y chat en tiempo real.',
        'Spotify API Client': 'Reproductor de música que aprovecha la API de Spotify para explorar artistas, álbumes y canciones a través de una interfaz limpia. Permite buscar, descubrir y reproducir canciones favoritas de forma fluida.',
        'PokeDex Web App': 'Aplicación Pokédex web usando la PokeAPI. Permite filtrar Pokémon por tipo y muestra detalles como nombre, imagen, peso, habilidades y estadísticas base. Diseño responsivo inspirado en la Pokédex clásica.',
      },
    },
    // CV
    cv: {
      title: 'Mi',
      titleHighlight: 'Currículum',
      subtitle: 'Consulta mi experiencia profesional y calificaciones',
      mobileMessage: 'Para una mejor experiencia, descarga el CV',
      downloadEs: 'Descargar CV (Español)',
      downloadEn: 'Descargar CV (Inglés)',
    },
    // Contact
    contact: {
      title: 'Ponte en',
      titleHighlight: 'Contacto',
      description: '¿Tienes un proyecto en mente, una idea o simplemente quieres saludar? ¡Escríbeme!',
      name: 'Tu Nombre',
      email: 'Tu Correo',
      message: 'Tu Mensaje',
      send: 'Enviar Mensaje',
      or: 'O escríbeme directamente a:',
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');
  const t = translations[lang];
  const toggleLang = () => setLang(prev => (prev === 'es' ? 'en' : 'es'));
  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
