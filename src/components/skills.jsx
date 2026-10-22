import { useEffect, useMemo, useRef, useState } from 'react';
import { Briefcase, FolderGit2, X } from 'lucide-react';
import './style/skills.css';
import { useLang } from '../context/LanguageContext';
import { allSkills, skillGroups, skillUsage } from '../data/portfolio';
import { focusProject, scrollToSection } from '../utils/navigation';
import Reveal, { SectionHeading } from './reveal';

const levelValue = { basic: 1, intermediate: 2, advanced: 3 };

export default function Skills() {
  const { lang, t } = useLang();
  const [group, setGroup] = useState('all');
  const [selected, setSelected] = useState(null);

  const sectionRef = useRef(null);

  const visible = group === 'all' ? allSkills : allSkills.filter((skill) => skill.group === group);
  const usage = useMemo(() => (selected ? skillUsage(selected.name) : []), [selected]);

  // En móvil el detalle flota sobre la página: cerrarlo al salir de la sección
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    // El margen superior descuenta el header fijo
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setSelected(null);
      },
      { rootMargin: '-100px 0px 0px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goTo = (item) => {
    if (item.kind === 'project') focusProject(item.id);
    else scrollToSection('experience');
  };

  return (
    <section className="section skills" id="skills" ref={sectionRef}>
      <div className="sectionInner">
        <SectionHeading
          label={t.skills.label}
          title={t.skills.title}
          highlight={t.skills.titleHighlight}
          subtitle={t.skills.subtitle}
        />

        <Reveal className="filterBar">
          {[{ id: 'all', label: { es: t.skills.all, en: t.skills.all } }, ...skillGroups].map((item) => (
            <button
              key={item.id}
              type="button"
              className={`filterBtn ${group === item.id ? 'active' : ''}`}
              aria-pressed={group === item.id}
              onClick={() => setGroup(item.id)}
            >
              {item.label[lang]}
            </button>
          ))}
        </Reveal>

        <div className="skillsLayout">
          <ul className="skillsGrid" key={group}>
            {visible.map((skill, i) => (
              <li key={skill.name} className="skillItem" style={{ animationDelay: `${i * 30}ms` }}>
                <button
                  type="button"
                  className={`skillCard ${selected?.name === skill.name ? 'selected' : ''}`}
                  aria-pressed={selected?.name === skill.name}
                  onClick={() => setSelected(selected?.name === skill.name ? null : skill)}
                >
                  <span className="skillName">{skill.name}</span>
                  <span className="skillLevel" aria-label={t.skills.levels[skill.level]}>
                    {[1, 2, 3].map((n) => (
                      <i key={n} className={n <= levelValue[skill.level] ? 'on' : ''} />
                    ))}
                  </span>
                  <span className="skillLevelText">{t.skills.levels[skill.level]}</span>
                </button>
              </li>
            ))}
          </ul>

          <aside className={`skillDetail ${selected ? 'open' : ''}`} aria-live="polite">
            {selected ? (
              <>
                <div className="skillDetailHead">
                  <div>
                    <span className="section-label">{t.skills.usedIn}</span>
                    <h3>{selected.name}</h3>
                  </div>
                  <button type="button" className="iconBtn" onClick={() => setSelected(null)} aria-label={t.skills.close}>
                    <X size={18} />
                  </button>
                </div>
                {usage.length ? (
                  <ul className="usageList">
                    {usage.map((item) => (
                      <li key={`${item.kind}-${item.id}`}>
                        <button type="button" onClick={() => goTo(item)}>
                          {item.kind === 'work' ? <Briefcase size={16} /> : <FolderGit2 size={16} />}
                          <span>
                            <small>{item.kind === 'work' ? t.skills.work : t.skills.project}</small>
                            {typeof item.label === 'string' ? item.label : item.label[lang]}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="usageEmpty">{t.skills.noUsage}</p>
                )}
              </>
            ) : (
              <p className="usageEmpty">{t.skills.subtitle}</p>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
