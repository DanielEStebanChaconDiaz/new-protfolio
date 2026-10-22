import { useEffect, useState } from 'react';

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Escribe y borra cada palabra en bucle
export function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 35, pause = 1800 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const key = words.join('|');

  // Reiniciar al cambiar de idioma
  useEffect(() => {
    setIndex(0);
    setText('');
    setDeleting(false);
  }, [key]);

  useEffect(() => {
    const word = words[index % words.length];

    if (reducedMotion()) {
      setText(word);
      const id = setTimeout(() => setIndex((i) => i + 1), pause * 1.5);
      return () => clearTimeout(id);
    }

    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && text === word) delay = pause;

    const id = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, deleting, index, key, typeSpeed, deleteSpeed, pause]);

  return text;
}
