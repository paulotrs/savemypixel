// Scroll reveal — subtle fade-up for cards, section heads
(function () {
  if (!('IntersectionObserver' in window)) return;
  const els = document.querySelectorAll('.section-head, .card, .comp-card, .feat, .tier, .quote, .stat, .rung, .diagnostic, .final-cta, .arch-diagram, .hero-preview');
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();
