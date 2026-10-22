import { useInView } from '../hooks/useInView';

// Anima la entrada de su contenido cuando aparece en pantalla
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, visible] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({ label, title, highlight, subtitle }) {
  return (
    <Reveal className="sectionHeading">
      <span className="section-label">{label}</span>
      <h2 className="sectionTitle">
        {title} <span className="highlight">{highlight}</span>
      </h2>
      {subtitle && <p className="sectionSubtitle">{subtitle}</p>}
    </Reveal>
  );
}
