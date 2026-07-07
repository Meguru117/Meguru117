// ---------- Dark mode toggle ----------
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme){
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', ()=>{
  const current = root.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ---------- Scroll reveal ----------
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); }
  });
}, { threshold: 0.12 });
reveals.forEach(el=> io.observe(el));

// ---------- Scrollspy nav ----------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const spy = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.nav-links a[data-section="${id}"]`);
    if(!link) return;
    if(entry.isIntersecting){
      navLinks.forEach(l=> l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

sections.forEach(sec=> spy.observe(sec));

