import { useEffect, useState } from 'react';
import { ExternalLink, Github, Instagram, Lock, Sparkles } from 'lucide-react';
import './style/projects.css';
import { useLang } from '../context/LanguageContext';
import { projects } from '../data/portfolio';
import ArchitectureFlow from './architectureFlow';
import Reveal, { SectionHeading } from './reveal';

const categories = ['all', 'ai', 'fullstack', 'backend', 'frontend'];

function ProjectLinks({ project, t }) {
  const { demo, code, instagram } = project.links;
  const privateTag = project.private && (
    <span className="privateTag">
      <Lock size={14} aria-hidden="true" />
      {t.projects.private}
    </span>
  );
  if (!demo && !code && !instagram) return privateTag;
  return (
    <div className="projectLinks">
      {instagram && (
        <a href={instagram} target="_blank" rel="noopener noreferrer" className="btn btnPrimary">
          <Instagram size={18} aria-hidden="true" />
          {t.projects.tryIt}
        </a>
      )}
      {instagram && <p className="tryNote">{t.projects.tryNote}</p>}
      {demo && (
        <a href={demo} target="_blank" rel="noopener noreferrer" className="projectLink">
          <ExternalLink size={16} aria-hidden="true" />
          {t.projects.demo}
        </a>
      )}
      {code && (
        <a href={code} target="_blank" rel="noopener noreferrer" className="projectLink">
          <Github size={16} aria-hidden="true" />
          {t.projects.code}
        </a>
      )}
      {privateTag}
    </div>
  );
}

export default function Projects() {
  const { lang, t } = useLang();
  const [filter, setFilter] = useState('all');
  const [highlighted, setHighlighted] = useState(null);

  // Llamado desde la sección de habilidades
  useEffect(() => {
    let scrollTimer;
    let flashTimer;
    const onFocus = (e) => {
      setFilter('all');
      setHighlighted(e.detail);
      // Esperar a que React pinte la tarjeta si estaba filtrada
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.getElementById(`project-${e.detail}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 60);
      clearTimeout(flashTimer);
      flashTimer = setTimeout(() => setHighlighted(null), 2600);
    };
    window.addEventListener('focus-project', onFocus);
    return () => {
      window.removeEventListener('focus-project', onFocus);
      clearTimeout(scrollTimer);
      clearTimeout(flashTimer);
    };
  }, []);

  const featured = projects.find((p) => p.featured);
  const showFeatured = filter === 'all' || filter === featured.category;
  const list = projects.filter((p) => !p.featured && (filter === 'all' || p.category === filter));

  return (
    <section className="section projects" id="projects">
      <div className="sectionInner">
        <SectionHeading
          label={t.projects.label}
          title={t.projects.title}
          highlight={t.projects.titleHighlight}
          subtitle={t.projects.subtitle}
        />

        <Reveal className="filterBar">
          {categories.map((id) => (
            <button
              key={id}
              type="button"
              className={`filterBtn ${filter === id ? 'active' : ''}`}
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
            >
              {t.projects.filters[id]}
            </button>
          ))}
        </Reveal>

        {showFeatured && (
          <Reveal
            as="article"
            id={`project-${featured.id}`}
            className={`featuredProject ${highlighted === featured.id ? 'flash' : ''}`}
          >
            <div className="featuredInfo">
              <span className="featuredBadge">
                <Sparkles size={14} aria-hidden="true" />
                {t.projects.featured}
              </span>
              <h3>{featured.name}</h3>
              <p className="featuredTagline">{featured.tagline[lang]}</p>
              <p>{featured.description[lang]}</p>
              <ul className="techList">
                {featured.techs.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <ProjectLinks project={featured} t={t} />
            </div>
            <ArchitectureFlow />
          </Reveal>
        )}

        <div className="projectsGrid" key={filter}>
          {list.map((project, i) => (
            <Reveal
              as="article"
              key={project.id}
              id={`project-${project.id}`}
              className={`projectCard ${highlighted === project.id ? 'flash' : ''}`}
              delay={i * 80}
            >
              <div className="projectImage">
                <img src={project.image} alt={project.name} loading="lazy" decoding="async" />
                <span className="projectCategory">{t.projects.filters[project.category]}</span>
              </div>
              <div className="projectInfo">
                <h3>{project.name}</h3>
                <p>{project.description[lang]}</p>
                <ul className="techList">
                  {project.techs.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <ProjectLinks project={project} t={t} />
              </div>
            </Reveal>
          ))}
        </div>

        {!showFeatured && list.length === 0 && <p className="emptyState">{t.projects.empty}</p>}
      </div>
    </section>
  );
}
