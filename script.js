/* Zera Henna — handcrafted build */
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* mobile menu */
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

/* measure hand-drawn SVG paths so they can draw themselves on */
document.querySelectorAll('.draw path').forEach(p => {
  const len = Math.ceil(p.getTotalLength());
  p.style.setProperty('--len', len);
});

/* reveals — .rv rises, .draw draws, counters count */
if (!reduced) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      e.target.querySelectorAll('[data-count]').forEach(runCounter);
      io.unobserve(e.target);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.rv, .draw').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.rv, .draw').forEach(el => el.classList.add('in'));
  document.querySelectorAll('[data-count]').forEach(el => {
    el.textContent = el.dataset.count;
  });
}

/* counters */
function runCounter(el) {
  if (el.dataset.done) return;
  el.dataset.done = '1';
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimal || '0', 10);
  const dur = 1400;
  const t0 = performance.now();
  (function tick(t) {
    const p = Math.min((t - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * eased).toFixed(decimals);
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}

/* booking form → composes a WhatsApp message, opens Sahdha's chat */
const WA = '971568589960';
const form = document.getElementById('bookingForm');
let service = 'Bridal Henna';

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    service = chip.dataset.service;
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const date = form.date.value;
  const emirate = form.emirate.value;
  const notes = form.notes.value.trim();

  let ok = true;
  [form.name, form.date].forEach(inp => {
    const bad = !inp.value.trim();
    inp.closest('.field').classList.toggle('invalid', bad);
    if (bad) ok = false;
  });
  if (!ok) return;

  let niceDate = date;
  try {
    niceDate = new Date(date + 'T12:00:00').toLocaleDateString('en-GB', {
      weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'
    });
  } catch (_) {}

  const lines = [
    `Hi Sahdha! I'd like to book *${service}* ✨`,
    `• Name: ${name}`,
    `• Date: ${niceDate}`,
    `• Location: ${emirate}`
  ];
  if (notes) lines.push(`• Notes: ${notes}`);
  lines.push(`(sent from the Zera Henna website)`);

  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
});

form.querySelectorAll('input').forEach(inp =>
  inp.addEventListener('input', () => inp.closest('.field').classList.remove('invalid'))
);
