// Year
document.getElementById('year').textContent = new Date().getFullYear?.() || new Date().getFullYear();

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Slider
const track = document.querySelector('.slider__track');
const prev = document.querySelector('.slider .prev');
const next = document.querySelector('.slider .next');
if (track && prev && next) {
  const scrollBy = () => Math.min(560, track.clientWidth * 0.8);
  prev.addEventListener('click', () => track.scrollBy({ left: -scrollBy(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left:  scrollBy(), behavior: 'smooth' }));
}

// Pricing toggle (monthly/annual)
const billingToggle = document.getElementById('billing');
const amounts = document.querySelectorAll('.price .amount');
const perLabels = document.querySelectorAll('.price .per');

function setBillingMode(annual){
  amounts.forEach(el => {
    const m = el.getAttribute('data-m');
    const y = el.getAttribute('data-y');
    const value = annual ? y : m;
    if (value !== null) el.textContent = value;
  });
  perLabels.forEach(el => el.textContent = annual ? '/mo*' : '/mo');
}
if (billingToggle){
  setBillingMode(false);
  billingToggle.addEventListener('change', e => setBillingMode(e.target.checked));
}
