import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { profile } from '../data/portfolio';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. {t.footer.made}
      </p>
      <div className="footerLinks">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <Mail size={18} />
        </a>
        <a href="#top" className="toTop" aria-label={t.footer.top}>
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
}
