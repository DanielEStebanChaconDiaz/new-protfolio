// Contenido del portafolio. Los textos bilingües usan la forma { es, en }.
const base = import.meta.env.BASE_URL;
export const asset = (path) => `${base}${encodeURI(path.replace(/^\//, ''))}`;

export const profile = {
  name: 'Daniel Esteban Chacon Diaz',
  shortName: 'Daniel Chacon',
  email: 'daniel.estebancd@gmail.com',
  location: 'Bucaramanga, Colombia',
  github: 'https://github.com/DanielEStebanChaconDiaz',
  githubUser: 'DanielEStebanChaconDiaz',
  linkedin: 'https://www.linkedin.com/in/danielestebanchacondiaz/',
  photo: asset('hero-photo.webp'),
  aboutPhoto: asset('about-photo.webp'),
  cv: { es: asset('cv-es.pdf'), en: asset('cv-en.pdf') },
  codingSince: 2024,
  birthDate: '2007-03-15',
};

// Edad calculada a partir de la fecha de nacimiento
export function getAge(birthDate = profile.birthDate, today = new Date()) {
  const [year, month, day] = birthDate.split('-').map(Number);
  let age = today.getFullYear() - year;
  const beforeBirthday = today.getMonth() + 1 < month || (today.getMonth() + 1 === month && today.getDate() < day);
  if (beforeBirthday) age -= 1;
  return age;
}

// Instagram de La Muela S.A.S., donde se puede hablar con DENTI
const LA_MUELA_INSTAGRAM = '';

export const experience = [
  {
    id: 'denti',
    role: { es: 'ChatBot de ventas con IA', en: 'AI Sales ChatBot' },
    company: 'La Muela S.A.S.',
    period: { es: 'Abr 2026 — Oct 2026', en: 'Apr 2026 — Oct 2026' },
    summary: {
      es: 'Diseñé y desarrollé “DENTI”, un agente de ventas con IA conectado al CRM de la empresa.',
      en: 'Designed and built “DENTI”, an AI sales agent connected to the company CRM.',
    },
    highlights: [
      {
        es: 'Arquitectura de dos workflows en n8n con sistema de buffer/debounce para agrupar mensajes.',
        en: 'Two-workflow n8n architecture with a buffer/debounce system to group incoming messages.',
      },
      {
        es: 'Integración de pagos vía API de Bold y generación dinámica de prompts.',
        en: 'Payment integration through the Bold API and dynamic prompt generation.',
      },
      {
        es: 'Pipeline hacia SAP Business One para el registro automático de actividades comerciales.',
        en: 'Pipeline into SAP Business One to log sales activities automatically.',
      },
    ],
    stack: ['n8n', 'OpenAI API', 'MongoDB', 'GoHighLevel', 'Bold API', 'SAP Business One', 'Prompt Engineering'],
  },
  {
    id: 'web-analyst',
    role: { es: 'Analista Web — WordPress', en: 'Web Analyst — WordPress' },
    company: 'La Muela S.A.S.',
    period: { es: 'May 2025 — Mar 2026', en: 'May 2025 — Mar 2026' },
    summary: {
      es: 'Lideré la operación y el crecimiento del canal e-commerce de la empresa.',
      en: 'Led the operation and growth of the company e-commerce channel.',
    },
    highlights: [
      {
        es: 'Administración de la tienda en línea sobre WordPress + WooCommerce.',
        en: 'Managed the online store built on WordPress + WooCommerce.',
      },
      {
        es: 'Estrategias de SEO técnico y on-page en coordinación con Grupo Tejada.',
        en: 'Technical and on-page SEO strategies in coordination with Grupo Tejada.',
      },
      {
        es: 'Optimización de plugins, velocidad de carga y experiencia de compra para mejorar posicionamiento y conversión.',
        en: 'Optimized plugin architecture, load speed and checkout experience to improve rankings and conversion.',
      },
    ],
    stack: ['WordPress', 'WooCommerce', 'SEO técnico'],
  },
  {
    id: 'internship',
    role: { es: 'Prácticas — Desarrollador Full-Stack', en: 'Internship — Full-Stack Developer' },
    company: 'La Muela S.A.S.',
    period: { es: 'Nov 2024 — May 2025', en: 'Nov 2024 — May 2025' },
    summary: {
      es: 'Desarrollé dos soluciones de software empresarial con arquitectura MVC y buenas prácticas.',
      en: 'Built two enterprise software solutions following MVC architecture and best practices.',
    },
    highlights: [
      {
        es: 'Gestor de tareas y actividades (onGoing) para optimizar procesos internos.',
        en: 'Task and activity manager (onGoing) to streamline internal processes.',
      },
      {
        es: 'Sistema de envío masivo de correos electrónicos.',
        en: 'Bulk email delivery system.',
      },
      {
        es: 'Lideré la migración de persistencia de MongoDB a SQL Server para ganar escalabilidad y rendimiento.',
        en: 'Led the data migration from MongoDB to SQL Server for better scalability and performance.',
      },
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'SQL Server'],
  },
];

export const education = [
  {
    id: 'uts',
    title: { es: 'Tecnología en Desarrollo de Sistemas Informáticos', en: 'Information Systems Development Technologist' },
    place: 'Unidades Tecnológicas de Santander',
    period: { es: '2026 — Actualidad', en: '2026 — Present' },
    current: true,
  },
  {
    id: 'data-analytics',
    title: { es: 'Data Analytics', en: 'Data Analytics' },
    place: 'Campuslands',
    period: { es: '2026', en: '2026' },
  },
  {
    id: 'english',
    title: { es: 'Curso de inglés', en: 'English course' },
    place: 'Centro Colombo Americano',
    period: { es: '2025', en: '2025' },
  },
  {
    id: 'campuslands',
    title: { es: 'Técnico Laboral en Desarrollo de Software', en: 'Software Development Technician' },
    place: 'Campuslands, Floridablanca',
    period: { es: 'Ene — Oct 2024', en: 'Jan — Oct 2024' },
  },
  {
    id: 'school',
    title: { es: 'Bachiller', en: 'High School Diploma' },
    place: 'Instituto Integrado San Bernardo',
    period: { es: '2023', en: '2023' },
  },
];

// level: 'advanced' | 'intermediate' | 'basic'
export const skillGroups = [
  {
    id: 'frontend',
    label: { es: 'Frontend', en: 'Frontend' },
    skills: [
      { name: 'JavaScript', level: 'advanced' },
      { name: 'React', level: 'advanced' },
      { name: 'HTML', level: 'advanced' },
      { name: 'CSS', level: 'advanced' },
      { name: 'Vite', level: 'intermediate' },
      { name: 'React Native', level: 'basic' },
      { name: 'TypeScript', level: 'basic' },
    ],
  },
  {
    id: 'backend',
    label: { es: 'Backend', en: 'Backend' },
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Express', level: 'advanced' },
      { name: 'Python', level: 'advanced' },
      { name: 'REST APIs', level: 'advanced' },
      { name: 'JWT', level: 'advanced' },
      { name: 'Socket.io', level: 'intermediate' },
      { name: 'Laravel', level: 'intermediate' },
    ],
  },
  {
    id: 'data',
    label: { es: 'Bases de datos', en: 'Databases' },
    skills: [
      { name: 'MongoDB', level: 'advanced' },
      { name: 'SQL', level: 'advanced' },
      { name: 'SQL Server', level: 'intermediate' },
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'Firebase', level: 'intermediate' },
    ],
  },
  {
    id: 'ai',
    label: { es: 'IA & Automatización', en: 'AI & Automation' },
    skills: [
      { name: 'n8n', level: 'advanced' },
      { name: 'OpenAI API', level: 'advanced' },
      { name: 'Prompt Engineering', level: 'advanced' },
      { name: 'Groq', level: 'intermediate' },
      { name: 'GoHighLevel', level: 'intermediate' },
      { name: 'Apps Script', level: 'intermediate' },
    ],
  },
  {
    id: 'commerce',
    label: { es: 'E-commerce & Pagos', en: 'E-commerce & Payments' },
    skills: [
      { name: 'WordPress', level: 'advanced' },
      { name: 'WooCommerce', level: 'advanced' },
      { name: 'SEO técnico', level: 'intermediate' },
      { name: 'Stripe', level: 'intermediate' },
      { name: 'MercadoPago', level: 'intermediate' },
      { name: 'Bold API', level: 'intermediate' },
    ],
  },
  {
    id: 'tools',
    label: { es: 'Herramientas & Cloud', en: 'Tools & Cloud' },
    skills: [
      { name: 'Git', level: 'advanced' },
      { name: 'Axios', level: 'advanced' },
      { name: 'Cloudinary', level: 'intermediate' },
      { name: 'Google APIs', level: 'intermediate' },
      { name: 'SAP Business One', level: 'intermediate' },
      { name: 'Scrum', level: 'intermediate' },
      { name: 'Docker', level: 'basic' },
    ],
  },
];

export const softSkills = [
  { es: 'Liderazgo', en: 'Leadership' },
  { es: 'Orientación al logro', en: 'Goal orientation' },
  { es: 'Trabajo en equipo', en: 'Teamwork' },
  { es: 'Adaptación al cambio', en: 'Adaptability' },
  { es: 'Control del estrés', en: 'Stress management' },
  { es: 'Razonamiento lógico', en: 'Logical reasoning' },
];

export const languages = [
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'B2', en: 'B2' } },
];

// category: 'ai' | 'fullstack' | 'backend' | 'frontend'
export const projects = [
  {
    id: 'denti',
    name: 'DENTI',
    category: 'ai',
    featured: true,
    private: true,
    tagline: {
      es: 'Agente de ventas con IA integrado al CRM, pagos y ERP',
      en: 'AI sales agent wired into the CRM, payments and ERP',
    },
    description: {
      es: 'Agente conversacional que atiende a los clientes de La Muela S.A.S. desde el CRM, genera prompts dinámicos según el contexto de cada conversación, crea links de pago y registra automáticamente cada actividad comercial en SAP Business One.',
      en: 'Conversational agent that serves La Muela S.A.S. customers from the CRM, builds dynamic prompts from each conversation context, creates payment links and automatically logs every sales activity in SAP Business One.',
    },
    techs: ['n8n', 'OpenAI API', 'MongoDB', 'GoHighLevel', 'Bold API', 'SAP Business One', 'Prompt Engineering'],
    links: { instagram: LA_MUELA_INSTAGRAM },
  },
  {
    id: 'seo-analyzer',
    name: 'SEO Analyzer',
    category: 'fullstack',
    image: asset('seoAnalyzer.webp'),
    description: {
      es: 'Aplicación web que analiza el rendimiento SEO de un sitio: uso de palabras clave, perfil de backlinks y salud general, con recomendaciones generadas por IA y planes de pago.',
      en: 'Web app that audits a site’s SEO performance: keyword usage, backlink profile and overall health, with AI-generated recommendations and paid plans.',
    },
    techs: ['React', 'Python', 'PostgreSQL', 'Google APIs', 'JWT', 'Axios', 'MercadoPago', 'Groq', 'Firebase'],
    links: { demo: 'https://seo-analyzer-frontend-c6vl.onrender.com' },
  },
  {
    id: 'ongoing',
    name: 'onGoing',
    category: 'fullstack',
    private: true,
    image: asset('onGoing.webp'),
    description: {
      es: 'Gestor de tareas empresarial con repetición personalizada, notificaciones y asignación automática a múltiples usuarios. Desarrollado en mis prácticas, incluyendo la migración de MongoDB a SQL Server.',
      en: 'Enterprise task manager with custom recurrence, notifications and automatic assignment to multiple users. Built during my internship, including the MongoDB to SQL Server migration.',
    },
    techs: ['React', 'Node.js', 'Express', 'SQL Server', 'MongoDB', 'JWT', 'Cloudinary', 'Apps Script', 'Google APIs'],
    links: {},
  },
  {
    id: 'cinecampus',
    name: 'CineCampus',
    category: 'backend',
    image: asset('cineCampus.webp'),
    description: {
      es: 'API para una plataforma de cine: selección de películas, compra de boletas, asignación de asientos y descuentos VIP, con autenticación segura, roles (usuario, VIP, admin) y pagos en línea.',
      en: 'API for a cinema platform: movie selection, ticket purchase, seat assignment and VIP discounts, with secure auth, roles (user, VIP, admin) and online payments.',
    },
    techs: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'Firebase', 'JWT', 'Cloudinary', 'JavaScript'],
    links: { demo: 'https://cineapp-1-7vg2.onrender.com/login' },
  },
  {
    id: 'ruraqmaki',
    name: 'Ruraqmaki',
    category: 'fullstack',
    image: asset('ruraqmaki.webp'),
    description: {
      es: 'E-commerce para Campuslands que conecta artesanos de Bucaramanga con compradores: gestión de usuarios, catálogo dinámico, talleres interactivos y chat en tiempo real.',
      en: 'E-commerce for Campuslands connecting Bucaramanga artisans with buyers: user management, dynamic catalog, interactive workshops and real-time chat.',
    },
    techs: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Cloudinary', 'Axios'],
    links: { code: 'https://github.com/DanielEStebanChaconDiaz/expressProject' },
  },
  {
    id: 'spotify',
    name: 'Spotify API Client',
    category: 'frontend',
    image: asset('spotify.webp'),
    description: {
      es: 'Reproductor que consume la API de Spotify para explorar artistas, álbumes y canciones con una interfaz limpia e intuitiva.',
      en: 'Music player built on the Spotify API to explore artists, albums and tracks through a clean, intuitive interface.',
    },
    techs: ['JavaScript', 'HTML', 'CSS', 'Spotify API', 'REST APIs', 'Axios'],
    links: { code: 'https://github.com/DanielEStebanChaconDiaz/proyectoJavaScript' },
  },
  {
    id: 'pokedex',
    name: 'PokeDex Web App',
    category: 'frontend',
    image: asset('pokeapi.webp'),
    description: {
      es: 'Pokédex web sobre la PokeAPI: filtro por tipo, detalle de peso, habilidades y estadísticas base, con diseño responsivo inspirado en la Pokédex clásica.',
      en: 'Web Pokédex on top of PokeAPI: type filters, weight, abilities and base stats, with a responsive design inspired by the classic Pokédex.',
    },
    techs: ['JavaScript', 'HTML', 'CSS', 'PokeAPI', 'REST APIs'],
    links: { code: 'https://github.com/DanielEStebanChaconDiaz/pokedex' },
  },
];

// Pasos del diagrama de arquitectura de DENTI
export const dentiFlow = [
  {
    id: 'client',
    name: { es: 'Cliente', en: 'Customer' },
    tech: 'CRM inbox',
    detail: {
      es: 'El cliente escribe por los canales conectados al CRM; a veces en varios mensajes seguidos.',
      en: 'The customer writes through the CRM-connected channels, often in several quick messages.',
    },
  },
  {
    id: 'crm',
    name: { es: 'CRM', en: 'CRM' },
    tech: 'GoHighLevel',
    detail: {
      es: 'GoHighLevel recibe la conversación y dispara un webhook hacia n8n.',
      en: 'GoHighLevel receives the conversation and fires a webhook to n8n.',
    },
  },
  {
    id: 'buffer',
    name: { es: 'Buffer / Debounce', en: 'Buffer / Debounce' },
    tech: 'n8n · MongoDB',
    detail: {
      es: 'Workflow 1: acumula los mensajes en MongoDB y espera a que el cliente termine de escribir antes de responder.',
      en: 'Workflow 1: stores messages in MongoDB and waits until the customer finishes typing before replying.',
    },
  },
  {
    id: 'agent',
    name: { es: 'Agente IA', en: 'AI Agent' },
    tech: 'n8n · OpenAI',
    detail: {
      es: 'Workflow 2: construye un prompt dinámico con el contexto del cliente y genera la respuesta con OpenAI.',
      en: 'Workflow 2: builds a dynamic prompt with the customer context and generates the reply with OpenAI.',
    },
  },
  {
    id: 'payments',
    name: { es: 'Pagos', en: 'Payments' },
    tech: 'Bold API',
    detail: {
      es: 'Cuando hay intención de compra, genera el link de pago mediante la API de Bold.',
      en: 'When there is purchase intent, it creates a payment link through the Bold API.',
    },
  },
  {
    id: 'erp',
    name: { es: 'ERP', en: 'ERP' },
    tech: 'SAP Business One',
    detail: {
      es: 'Registra automáticamente la actividad comercial en SAP Business One.',
      en: 'Automatically logs the sales activity in SAP Business One.',
    },
  },
];

export const allSkills = skillGroups.flatMap((group) => group.skills.map((skill) => ({ ...skill, group: group.id })));

// Dónde se ha usado cada tecnología (experiencia + proyectos)
export function skillUsage(skillName) {
  const fromWork = experience
    .filter((item) => item.stack.includes(skillName))
    .map((item) => ({ kind: 'work', id: item.id, label: item.role }));
  const fromProjects = projects
    .filter((item) => item.techs.includes(skillName))
    .map((item) => ({ kind: 'project', id: item.id, label: item.name }));
  return [...fromWork, ...fromProjects];
}
