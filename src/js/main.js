// commercial-display-b2b · main.js

// ============================
// WhatsApp Number Config
// ============================
// TODO: Replace with your actual WhatsApp Business number (with country code, no +)
// Example: 8613800138000 for China +86
const WA_NUMBER = 'YOUR_NUMBER';
const WA_BASE = `https://wa.me/${WA_NUMBER}`;

// ============================
// Update all WhatsApp links dynamically
// ============================
document.addEventListener('DOMContentLoaded', () => {
  // Update all WhatsApp links if number is set
  if (WA_NUMBER !== 'YOUR_NUMBER') {
    document.querySelectorAll('[href*="wa.me/YOUR_NUMBER"]').forEach(el => {
      el.href = el.href.replace('YOUR_NUMBER', WA_NUMBER);
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Scroll reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .why-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});

// Add to CSS dynamically for scroll reveal
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);
