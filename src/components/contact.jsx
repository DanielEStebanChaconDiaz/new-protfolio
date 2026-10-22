import { useEffect, useState } from 'react';
import { Check, Copy, Download, FileText, Github, Linkedin, Send } from 'lucide-react';
import './style/contact.css';
import { useLang } from '../context/LanguageContext';
import { profile } from '../data/portfolio';
import Reveal, { SectionHeading } from './reveal';

function CvBand() {
  const { t } = useLang();
  return (
    <Reveal className="cvBand">
      <FileText size={34} className="cvBandIcon" aria-hidden="true" />
      <div className="cvBandText">
        <h3>
          {t.cv.title} <span className="highlight">{t.cv.titleHighlight}</span>
        </h3>
        <p>{t.cv.text}</p>
      </div>
      <div className="cvBandActions">
        <a href={profile.cv.es} className="btn btnPrimary" download="DanielChacon_CV_ES.pdf">
          <Download size={18} aria-hidden="true" />
          {t.cv.es}
        </a>
        <a href={profile.cv.en} className="btn btnGhost" download="DanielChacon_CV_EN.pdf">
          <Download size={18} aria-hidden="true" />
          {t.cv.en}
        </a>
      </div>
    </Reveal>
  );
}

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  // Sin backend: se abre el cliente de correo con el mensaje armado
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(t.contact.subject(form.name));
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="glowingOrb contactOrb" />
      <div className="sectionInner">
        <CvBand />

        <SectionHeading
          label={t.contact.label}
          title={t.contact.title}
          highlight={t.contact.titleHighlight}
          subtitle={t.contact.description}
        />

        <div className="contactGrid">
          <Reveal as="form" className="contactForm" onSubmit={onSubmit}>
            <div className="field">
              <input id="name" type="text" value={form.name} onChange={update('name')} placeholder=" " required />
              <label htmlFor="name">{t.contact.name}</label>
            </div>
            <div className="field">
              <input id="email" type="email" value={form.email} onChange={update('email')} placeholder=" " required />
              <label htmlFor="email">{t.contact.email}</label>
            </div>
            <div className="field">
              <textarea id="message" rows="5" value={form.message} onChange={update('message')} placeholder=" " required />
              <label htmlFor="message">{t.contact.message}</label>
            </div>
            <button type="submit" className="btn btnPrimary">
              <Send size={18} aria-hidden="true" />
              {t.contact.send}
            </button>
            <p className="formNote">{t.contact.note}</p>
          </Reveal>

          <Reveal className="contactAside" delay={120}>
            <button type="button" className="emailCard" onClick={copyEmail}>
              <span className="emailText">{profile.email}</span>
              <span className={`copyState ${copied ? 'copied' : ''}`}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? t.contact.copied : t.contact.copy}
              </span>
            </button>

            <p className="contactOr">{t.contact.or}</p>
            <div className="socialCards">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="socialCard">
                <Github size={22} aria-hidden="true" />
                <span>
                  <strong>GitHub</strong>
                  <small>@{profile.githubUser}</small>
                </span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="socialCard">
                <Linkedin size={22} aria-hidden="true" />
                <span>
                  <strong>LinkedIn</strong>
                  <small>Daniel Esteban Chacon Diaz</small>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
