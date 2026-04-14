// ============================================================
// Navigation: scroll shadow + active section highlight
// ============================================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id], header[id]');

function onScroll() {
  // Add shadow when scrolled
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Highlight active nav link
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 80;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ============================================================
// Mobile menu toggle
// ============================================================
const navToggle = document.querySelector('.nav-toggle');
const navLinksList = document.querySelector('.nav-links');

if (navToggle && navLinksList) {
  navToggle.addEventListener('click', () => {
    navLinksList.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinksList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinksList.classList.remove('open');
    });
  });
}

// ============================================================
// Fade-in animation on scroll (IntersectionObserver)
// ============================================================
const fadeTargets = document.querySelectorAll(
  '.timeline-item, .edu-card, .skill-category, .pub-item, .contact-card, .cert-item'
);

fadeTargets.forEach(el => el.classList.add('fade-in'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  fadeTargets.forEach(el => observer.observe(el));
} else {
  // Fallback: show all elements immediately
  fadeTargets.forEach(el => el.classList.add('visible'));
}
