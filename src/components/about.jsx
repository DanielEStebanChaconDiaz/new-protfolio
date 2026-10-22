import './style/about.css';
import { useLang } from '../context/LanguageContext';
import { getAge, languages, profile, softSkills } from '../data/portfolio';
import Reveal, { SectionHeading } from './reveal';

export default function About() {
  const { lang, t } = useLang();

  return (
    <section className="section about" id="about">
      <div className="sectionInner">
        <SectionHeading label={t.about.label} title={t.about.title} highlight={t.about.titleHighlight} />

        <div className="aboutGrid">
          <div className="aboutText">
            {t.about.paragraphs.map((paragraph, i) => (
              <Reveal as="p" key={i} delay={i * 90}>
                {paragraph}
              </Reveal>
            ))}

            <Reveal as="dl" className="aboutFacts" delay={270}>
              {[{ label: t.about.ageLabel, value: t.about.ageValue(getAge()) }, ...t.about.facts].map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal className="aboutAside" delay={120}>
            <div className="aboutPhoto">
              <img src={profile.aboutPhoto} alt="Daniel Esteban Chacon Diaz" loading="lazy" width="380" height="460" />
            </div>

            <div className="asideCard">
              <h3>{t.about.languagesTitle}</h3>
              <ul className="langList">
                {languages.map((item) => (
                  <li key={item.name.en}>
                    <span>{item.name[lang]}</span>
                    <strong>{item.level[lang]}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="asideCard">
              <h3>{t.about.softTitle}</h3>
              <ul className="chipList">
                {softSkills.map((skill) => (
                  <li key={skill.en} className="chip">
                    {skill[lang]}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
