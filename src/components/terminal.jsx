import { useEffect, useRef, useState } from 'react';
import './style/terminal.css';
import { useLang } from '../context/LanguageContext';
import { education, experience, getAge, profile, projects, skillGroups } from '../data/portfolio';
import { scrollToSection } from '../utils/navigation';
import Reveal, { SectionHeading } from './reveal';

const commands = ['help', 'whoami', 'about', 'skills', 'experience', 'education', 'projects', 'contact', 'cv', 'goto', 'lang', 'clear'];
const gotoTargets = ['about', 'experience', 'skills', 'projects', 'contact'];

const link = (href, text) => (
  <a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">
    {text ?? href}
  </a>
);

// Devuelve las líneas de salida de un comando
function run(input, { lang, t, toggleLang }) {
  const [cmd = '', ...args] = input.trim().split(/\s+/);
  const name = cmd.toLowerCase();
  const tt = t.terminal;

  switch (name) {
    case '':
      return [];
    case 'help':
      return [
        ...commands.map((c) => (
          <span key={c}>
            <span className="tk-cmd">{c.padEnd(12, ' ')}</span>
            {tt.help[c]}
          </span>
        )),
        <span key="tip" className="muted">{tt.tip}</span>,
      ];
    case 'whoami':
      return [`${profile.name} — ${t.hero.roles[0]}`, `📍 ${profile.location} · ${t.about.ageValue(getAge())}`];
    case 'about':
      return [t.about.paragraphs[0]];
    case 'skills':
      return skillGroups.map((group) => (
        <span key={group.id}>
          <span className="tk-key">{group.label[lang]}:</span> {group.skills.map((s) => s.name).join(', ')}
        </span>
      ));
    case 'experience':
      return experience.map((job) => (
        <span key={job.id}>
          <span className="tk-str">[{job.period[lang]}]</span> {job.role[lang]} @ {job.company}
        </span>
      ));
    case 'education':
      return education.map((item) => (
        <span key={item.id}>
          <span className="tk-str">[{item.period[lang]}]</span> {item.title[lang]} — {item.place}
        </span>
      ));
    case 'projects':
      return [
        ...projects.map((p) => (
          <span key={p.id}>
            <span className="tk-key">{p.name.padEnd(20, ' ')}</span>
            {p.links.demo
              ? link(p.links.demo, 'demo')
              : p.links.code
                ? link(p.links.code, 'github')
                : p.links.instagram
                  ? link(p.links.instagram, 'instagram')
                  : <span className="muted">private</span>}
          </span>
        )),
        <span key="hint" className="muted">→ goto projects</span>,
      ];
    case 'contact':
    case 'social':
      return [
        <span key="mail">email    {link(`mailto:${profile.email}`, profile.email)}</span>,
        <span key="gh">github   {link(profile.github, `github.com/${profile.githubUser}`)}</span>,
        <span key="li">linkedin {link(profile.linkedin, 'linkedin.com/in/danielestebanchacondiaz')}</span>,
      ];
    case 'cv': {
      const a = document.createElement('a');
      a.href = profile.cv[lang];
      a.download = '';
      a.click();
      return [tt.cvDownload];
    }
    case 'goto': {
      const target = args[0]?.toLowerCase();
      if (!gotoTargets.includes(target)) return [{ error: tt.gotoUsage }];
      setTimeout(() => scrollToSection(target), 250);
      return [tt.goingTo(target)];
    }
    case 'lang':
      toggleLang();
      return [tt.langChanged];
    case 'sudo':
      return [tt.sudo];
    case 'hire':
      return [<span key="hire">{tt.hireMe} {link(`mailto:${profile.email}`, profile.email)} 🚀</span>];
    default:
      return [{ error: tt.notFound(cmd) }];
  }
}

export default function Terminal() {
  const { lang, t, toggleLang } = useLang();
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cursor, setCursor] = useState(-1);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTop = body.scrollHeight;
  }, [history]);

  const execute = (raw) => {
    const value = raw.trim();
    if (value.toLowerCase() === 'clear') {
      setHistory([]);
    } else {
      const output = run(value, { lang, t, toggleLang });
      setHistory((prev) => [...prev, { input: value, output }]);
    }
    if (value) setCmdHistory((prev) => [value, ...prev].slice(0, 50));
    setCursor(-1);
    setInput('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      execute(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(cursor + 1, cmdHistory.length - 1);
      if (next >= 0) {
        setCursor(next);
        setInput(cmdHistory[next]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = cursor - 1;
      setCursor(Math.max(next, -1));
      setInput(next >= 0 ? cmdHistory[next] : '');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const [first, second] = input.split(' ');
      if (second !== undefined && first === 'goto') {
        const match = gotoTargets.find((s) => s.startsWith(second));
        if (match) setInput(`goto ${match}`);
      } else {
        const match = commands.find((c) => c.startsWith(input.toLowerCase()));
        if (match) setInput(match);
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  return (
    <section className="section terminalSection" id="terminal">
      <div className="sectionInner">
        <SectionHeading
          label={t.terminal.label}
          title={t.terminal.title}
          highlight={t.terminal.titleHighlight}
          subtitle={t.terminal.subtitle}
        />

        <Reveal className="terminal" onClick={() => inputRef.current?.focus({ preventScroll: true })}>
          <div className="terminalBar">
            <span className="dots">
              <i /><i /><i />
            </span>
            <span className="terminalTitle">daniel@portfolio: ~</span>
          </div>

          <div className="terminalBody" ref={bodyRef} aria-live="polite">
            <p className="muted">{t.terminal.welcome}</p>
            {history.map((entry, i) => (
              <div key={i} className="terminalEntry">
                <p>
                  <span className="prompt">➜ ~</span> {entry.input}
                </p>
                {entry.output.map((line, j) =>
                  line?.error ? (
                    <p key={j} className="error">{line.error}</p>
                  ) : (
                    <p key={j}>{line}</p>
                  ),
                )}
              </div>
            ))}
            <label className="terminalInput">
              <span className="prompt">➜ ~</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder={t.terminal.placeholder}
                aria-label="Terminal"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            </label>
          </div>
        </Reveal>

        <Reveal className="terminalSuggestions" delay={120}>
          {t.terminal.suggestions.map((cmd) => (
            <button key={cmd} type="button" className="chip chipBtn" onClick={() => execute(cmd)}>
              {cmd}
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
