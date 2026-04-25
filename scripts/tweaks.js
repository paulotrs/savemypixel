// Tweaks — live controls for accent hue, font pairing, density.
// Persists via __edit_mode_set_keys to the parent host.
(function () {
  const defaults = window.TWEAK_DEFAULTS || {};
  let state = {
    accentHue: defaults.accentHue ?? 250,
    fontBody: defaults.fontBody ?? 'Inter Tight',
    fontMono: defaults.fontMono ?? 'JetBrains Mono',
    density: defaults.density ?? 'standard'
  };

  const HUES = [
    { name: 'blue', h: 250 },
    { name: 'teal', h: 200 },
    { name: 'green', h: 150 },
    { name: 'violet', h: 290 },
    { name: 'amber', h: 70 },
    { name: 'ink', h: 260, chroma: 0.02, lightness: 0.25 } // monochrome option
  ];

  function applyAccent(h) {
    const root = document.documentElement.style;
    if (h === 'ink') {
      root.setProperty('--accent', 'oklch(0.25 0.02 260)');
      root.setProperty('--accent-hover', 'oklch(0.18 0.02 260)');
      root.setProperty('--accent-pressed', 'oklch(0.14 0.02 260)');
      root.setProperty('--accent-bg', 'oklch(0.96 0.004 260)');
      root.setProperty('--accent-ring', 'rgba(30,35,45,0.25)');
      return;
    }
    root.setProperty('--accent', `oklch(0.55 0.18 ${h})`);
    root.setProperty('--accent-hover', `oklch(0.48 0.18 ${h})`);
    root.setProperty('--accent-pressed', `oklch(0.42 0.17 ${h})`);
    root.setProperty('--accent-bg', `oklch(0.96 0.02 ${h})`);
    root.setProperty('--accent-ring', `color-mix(in oklch, oklch(0.55 0.18 ${h}) 25%, transparent)`);
  }

  function applyFonts(sans, mono) {
    // Inject Google Font if not already loaded
    const fams = [sans, mono].map(f => f.replace(/\s+/g, '+')).join('&family=');
    const href = `https://fonts.googleapis.com/css2?family=${fams}:wght@400;500;600;700&display=swap`;
    let link = document.getElementById('tw-font-link');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'stylesheet';
      link.id = 'tw-font-link';
      document.head.appendChild(link);
    }
    link.href = href;
    document.documentElement.style.setProperty('--font-sans', `'${sans}', system-ui, sans-serif`);
    document.documentElement.style.setProperty('--font-mono', `'${mono}', ui-monospace, monospace`);
  }

  function applyDensity(d) {
    const root = document.documentElement.style;
    if (d === 'compact') {
      root.setProperty('--section-y', '72px');
    } else if (d === 'airy') {
      root.setProperty('--section-y', '160px');
    } else {
      root.setProperty('--section-y', '112px');
    }
  }

  function persist(patch) {
    state = { ...state, ...patch };
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
    } catch (e) {}
  }

  // Build hue swatches
  function renderHues() {
    const root = document.getElementById('tw-hues');
    root.innerHTML = '';
    HUES.forEach(({ name, h }) => {
      const btn = document.createElement('button');
      btn.className = 'tw-swatch';
      btn.setAttribute('aria-label', name);
      btn.style.background = name === 'ink'
        ? 'oklch(0.25 0.02 260)'
        : `oklch(0.55 0.18 ${h})`;
      if (state.accentHue === h) btn.classList.add('active');
      btn.addEventListener('click', () => {
        applyAccent(name === 'ink' ? 'ink' : h);
        [...root.children].forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        persist({ accentHue: h });
      });
      root.appendChild(btn);
    });
  }

  function wireFonts() {
    const grp = document.getElementById('tw-fonts');
    grp.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => {
        grp.querySelectorAll('button').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        const sans = b.dataset.sans, mono = b.dataset.mono;
        applyFonts(sans, mono);
        persist({ fontBody: sans, fontMono: mono });
      });
    });
  }

  function wireDensity() {
    const grp = document.getElementById('tw-density');
    grp.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => {
        grp.querySelectorAll('button').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        applyDensity(b.dataset.density);
        persist({ density: b.dataset.density });
      });
    });
    // Set initial active
    grp.querySelectorAll('button').forEach(b => {
      b.classList.toggle('active', b.dataset.density === state.density);
    });
  }

  // Apply initial state
  applyAccent(state.accentHue);
  applyDensity(state.density);

  // Host communication: register listener BEFORE announcing
  window.addEventListener('message', (ev) => {
    const t = ev.data?.type;
    if (t === '__activate_edit_mode') {
      document.getElementById('tweaks-fab').classList.add('visible');
    } else if (t === '__deactivate_edit_mode') {
      document.getElementById('tweaks-fab').classList.remove('visible');
      document.getElementById('tweaks-panel').classList.remove('open');
    }
  });
  try {
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
  } catch (e) {}

  renderHues();
  wireFonts();
  wireDensity();

  const fab = document.getElementById('tweaks-fab');
  const panel = document.getElementById('tweaks-panel');
  fab.addEventListener('click', () => panel.classList.toggle('open'));
})();
