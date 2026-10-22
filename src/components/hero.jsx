import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import './style/hero.css';
import { useLang } from '../context/LanguageContext';
import { useTypewriter } from '../hooks/useTypewriter';
import { allSkills, experience, profile, projects } from '../data/portfolio';

const yearsCoding = new Date().getFullYear() - profile.codingSince;

export default function Hero() {
  const { lang, t } = useLang();
  const role = useTypewriter(t.hero.roles);

  const stats = [
    { value: `${yearsCoding}+`, label: t.hero.stats.years },
    { value: experience.length, label: t.hero.stats.roles },
    { value: projects.length, label: t.hero.stats.projects },
    { value: `${allSkills.length}+`, label: t.hero.stats.techs },
  ];

  return (
    <section className="hero" id="top">
      <div className="glowingOrb heroOrb1" />
      <div className="glowingOrb heroOrb2" />
      <div className="heroGrid" aria-hidden="true" />

      <div className="heroInner">
        <div className="heroText">
          <span className="availability">
            <span className="pulseDot" />
            {t.hero.available}
          </span>

          <p className="heroGreeting">{t.hero.greeting}</p>
          <h1 className="heroName">
            Daniel <span className="line-accent">Chacon.</span>
          </h1>
          <p className="heroRole" aria-label={t.hero.roles.join(', ')}>
            <span aria-hidden="true">&gt; {role}</span>
            <span className="caret" aria-hidden="true" />
          </p>
          <p className="heroIntro">{t.hero.intro}</p>

          <div className="heroCtas">
            <a href="#projects" className="btn btnPrimary">
              {t.hero.ctaProjects}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href={profile.cv[lang]} className="btn btnGhost" download>
              <Download size={18} aria-hidden="true" />
              {t.hero.ctaCv}
            </a>
          </div>

          <ul className="heroSocials">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={20} />
              </a>
            </li>
          </ul>
        </div>

        <div className="heroVisual">
          <div className="photoFrame">
            <img src={profile.photo} alt="Daniel Esteban Chacon Diaz" width="420" height="520" fetchPriority="high" />
          </div>

          <pre className="codeCard" aria-hidden="true">
            <span className="codeBar">
              <i /><i /><i />
              <em>daniel.js</em>
            </span>
            <code>
              <span className="tk-key">const</span> <span className="tk-var">daniel</span> = {'{'}{'\n'}
              {'  '}role: <span className="tk-str">'Full-Stack Dev'</span>,{'\n'}
              {'  '}stack: [<span className="tk-str">'React'</span>, <span className="tk-str">'Node'</span>, <span className="tk-str">'Python'</span>],{'\n'}
              {'  '}ai: [<span className="tk-str">'n8n'</span>, <span className="tk-str">'OpenAI'</span>],{'\n'}
              {'  '}available: <span className="tk-bool">true</span>,{'\n'}
              {'}'};
            </code>
          </pre>
        </div>
      </div>

      <dl className="heroStats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>

      <a href="#about" className="scrollHint" aria-label={t.hero.scroll}>
        <span>{t.hero.scroll}</span>
        <ArrowDown size={16} aria-hidden="true" />
      </a>
    </section>
  );
}
