export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return true;
}

// La sección de proyectos escucha este evento para mostrar y resaltar la tarjeta
export function focusProject(id) {
  window.dispatchEvent(new CustomEvent('focus-project', { detail: id }));
}
