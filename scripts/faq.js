// FAQ accordion: single-open behavior + smooth height animation.
(function () {
  const root = document.querySelector('[data-faq]');
  if (!root) return;
  const items = Array.from(root.querySelectorAll('details'));

  function setBodyHeight(details, open) {
    const body = details.querySelector('.faq-body');
    if (!body) return;
    if (open) {
      body.style.maxHeight = body.scrollHeight + 'px';
    } else {
      // snapshot then drop
      body.style.maxHeight = body.scrollHeight + 'px';
      // force reflow
      void body.offsetHeight;
      body.style.maxHeight = '0px';
    }
  }

  // Initialize: any item that starts [open] should have its body expanded
  items.forEach((d) => {
    const body = d.querySelector('.faq-body');
    if (!body) return;
    if (d.open) {
      // Let layout settle
      requestAnimationFrame(() => {
        body.style.maxHeight = body.scrollHeight + 'px';
      });
    } else {
      body.style.maxHeight = '0px';
    }
  });

  items.forEach((details) => {
    const summary = details.querySelector('summary');
    if (!summary) return;
    summary.addEventListener('click', (e) => {
      e.preventDefault();
      const willOpen = !details.open;

      if (willOpen) {
        // Close others first
        items.forEach((other) => {
          if (other !== details && other.open) {
            setBodyHeight(other, false);
            // Wait for transition before flipping [open] to keep icon in sync
            setTimeout(() => { other.open = false; }, 240);
          }
        });
        details.open = true;
        // Animate in on next frame so scrollHeight is correct
        requestAnimationFrame(() => setBodyHeight(details, true));
      } else {
        setBodyHeight(details, false);
        setTimeout(() => { details.open = false; }, 240);
      }
    });
  });

  // Recompute open item's height on resize
  window.addEventListener('resize', () => {
    items.forEach((d) => {
      if (d.open) {
        const body = d.querySelector('.faq-body');
        if (body) body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
})();
