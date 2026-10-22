import { useEffect, useRef, useState } from 'react';

const interactive = 'a, button, input, textarea, label, [role="tab"]';

// Cursor que sigue al mouse y crece sobre elementos interactivos (solo punteros finos)
export default function MouseFollower() {
  const followerRef = useRef(null);
  const [enabled] = useState(
    () =>
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    if (!enabled) return;
    const mouse = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let frame;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      followerRef.current?.classList.toggle('hovering', Boolean(e.target.closest?.(interactive)));
    };
    const onLeave = () => followerRef.current?.classList.add('hidden');
    const onEnter = () => followerRef.current?.classList.remove('hidden');

    const animate = () => {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    frame = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div ref={followerRef} className="mouseFollower" aria-hidden="true">
      <span />
    </div>
  );
}
