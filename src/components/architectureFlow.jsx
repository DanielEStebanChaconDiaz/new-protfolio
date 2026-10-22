import { useEffect, useState } from 'react';
import { Bot, CreditCard, Database, Layers, MessageCircle, Pause, Play, Server } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { dentiFlow } from '../data/portfolio';

const icons = { client: MessageCircle, crm: Layers, buffer: Database, agent: Bot, payments: CreditCard, erp: Server };

// Diagrama interactivo del flujo de DENTI: se recorre paso a paso
export default function ArchitectureFlow() {
  const { lang, t } = useLang();
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPlaying(false);
      return;
    }
    const id = setInterval(() => setStep((s) => (s + 1) % dentiFlow.length), 1800);
    return () => clearInterval(id);
  }, [playing]);

  const current = dentiFlow[step];

  return (
    <div className="flow">
      <div className="flowHead">
        <span className="section-label">{t.projects.flowTitle}</span>
        <button type="button" className="flowToggle" onClick={() => setPlaying((p) => !p)}>
          {playing ? <Pause size={14} /> : <Play size={14} />}
          {playing ? t.projects.flowPause : t.projects.flowPlay}
        </button>
      </div>

      <ol className="flowNodes">
        {dentiFlow.map((node, i) => {
          const Icon = icons[node.id];
          const state = i === step ? 'active' : i < step ? 'done' : '';
          return (
            <li key={node.id} className={`flowNode ${state}`}>
              <button
                type="button"
                onClick={() => {
                  setStep(i);
                  setPlaying(false);
                }}
                aria-current={i === step ? 'step' : undefined}
              >
                <span className="flowIcon">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="flowName">{node.name[lang]}</span>
                <span className="flowTech">{node.tech}</span>
              </button>
            </li>
          );
        })}
      </ol>

      <p className="flowDetail" aria-live="polite" key={current.id}>
        <strong>{String(step + 1).padStart(2, '0')}</strong> {current.detail[lang]}
      </p>
      <p className="flowHint">{t.projects.flowHint}</p>
    </div>
  );
}
