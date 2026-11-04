// Footer year
document.getElementById('yr').textContent = new Date().getFullYear();

// Theme toggle (persisted when storage is available)
const root = document.documentElement;
try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}
document.getElementById('theme').addEventListener('click', () => {
  const dark = getComputedStyle(root).getPropertyValue('--bg').trim() === '#0b0d12';
  const next = dark ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Project filters
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('#projects .card');
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.toggle('active', c === chip));
  const f = chip.dataset.f;
  cards.forEach(card => {
    card.hidden = f !== 'all' && !card.dataset.cat.split(' ').includes(f);
  });
}));
