import { useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import './style/experience.css';
import { useLang } from '../context/LanguageContext';
import { education, experience } from '../data/portfolio';
import Reveal, { SectionHeading } from './reveal';

export default function Experience() {
  const { lang, t } = useLang();
  const [tab, setTab] = useState('work');

  const tabs = [
    { id: 'work', label: t.experience.tabs.work, Icon: Briefcase },
    { id: 'education', label: t.experience.tabs.education, Icon: GraduationCap },
  ];

  return (
    <section className="section experience" id="experience">
      <div className="sectionInner">
        <SectionHeading label={t.experience.label} title={t.experience.title} highlight={t.experience.titleHighlight} />

        <Reveal className="tabs" role="tablist" aria-label={t.experience.label}>
          {tabs.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              id={`tab-${id}`}
              aria-selected={tab === id}
              aria-controls={`panel-${id}`}
              className={`tab ${tab === id ? 'active' : ''}`}
              onClick={() => setTab(id)}
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </button>
          ))}
        </Reveal>

        <div className="timeline" role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} key={tab}>
          {tab === 'work'
            ? experience.map((job, i) => (
                <Reveal as="article" className="timelineItem" key={job.id} delay={i * 100}>
                  <span className="timelineDot" />
                  <header className="timelineHead">
                    <div>
                      <h3>{job.role[lang]}</h3>
                      <p className="timelineCompany">{job.company}</p>
                    </div>
                    <span className="timelinePeriod">{job.period[lang]}</span>
                  </header>
                  <p className="timelineSummary">{job.summary[lang]}</p>
                  <ul className="timelineHighlights">
                    {job.highlights.map((item, j) => (
                      <li key={j}>{item[lang]}</li>
                    ))}
                  </ul>
                  <ul className="techList">
                    {job.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </Reveal>
              ))
            : education.map((item, i) => (
                <Reveal as="article" className="timelineItem compact" key={item.id} delay={i * 80}>
                  <span className={`timelineDot ${item.current ? 'current' : ''}`} />
                  <header className="timelineHead">
                    <div>
                      <h3>{item.title[lang]}</h3>
                      <p className="timelineCompany">{item.place}</p>
                    </div>
                    <span className="timelinePeriod">
                      {item.current && <span className="badge">{t.experience.current}</span>}
                      {item.period[lang]}
                    </span>
                  </header>
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
