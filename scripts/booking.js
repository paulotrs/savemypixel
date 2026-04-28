// Booking modal: opens from any [data-book-call] trigger.
(function () {
  const modal = document.getElementById('bookCallModal');
  if (!modal) return;

  const card = modal.querySelector('.book-card');
  const form = modal.querySelector('[data-book-form]');
  const success = modal.querySelector('[data-book-success]');
  const triggers = document.querySelectorAll('[data-book-call]');
  const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  let lastFocused = null;

  function open(e) {
    if (e) e.preventDefault();
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('book-open');
    requestAnimationFrame(() => {
      modal.classList.add('is-open');
    });
    resetForm();
    setTimeout(() => {
      const firstInput = form.querySelector('input, select');
      if (firstInput) firstInput.focus({ preventScroll: true });
    }, 50);
  }

  function close() {
    modal.classList.remove('is-open');
    document.body.classList.remove('book-open');
    setTimeout(() => {
      modal.hidden = true;
      if (lastFocused && typeof lastFocused.focus === 'function') {
        lastFocused.focus({ preventScroll: true });
      }
    }, 220);
  }

  function resetForm() {
    form.hidden = false;
    success.hidden = true;
    form.classList.remove('is-submitting');
    form.reset();
    form.querySelectorAll('.book-field.has-error').forEach((f) => f.classList.remove('has-error'));
    form.querySelectorAll('.book-error').forEach((e) => (e.textContent = ''));
  }

  function setError(name, message) {
    const errEl = form.querySelector(`[data-error-for="${name}"]`);
    if (!errEl) return;
    errEl.textContent = message;
    const field = errEl.closest('.book-field');
    if (field) field.classList.add('has-error');
  }

  function clearError(name) {
    const errEl = form.querySelector(`[data-error-for="${name}"]`);
    if (!errEl) return;
    errEl.textContent = '';
    const field = errEl.closest('.book-field');
    if (field) field.classList.remove('has-error');
  }

  function t(key, fallback) {
    return (window.SMP_I18N && window.SMP_I18N[key]) || fallback;
  }

  function validate(data) {
    let firstInvalid = null;
    const fail = (name, msg, el) => {
      setError(name, msg);
      if (!firstInvalid) firstInvalid = el;
    };

    if (!data.name || data.name.trim().length < 2) {
      fail('name', t('errName', 'Please enter your name.'), form.querySelector('[name="name"]'));
    }
    const phoneDigits = (data.phone || '').replace(/\D/g, '');
    if (phoneDigits.length < 7) {
      fail('phone', t('errPhone', 'Enter a valid phone number.'), form.querySelector('[name="phone"]'));
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '')) {
      fail('email', t('errEmail', 'Enter a valid email address.'), form.querySelector('[name="email"]'));
    }
    if (!data.revenue) {
      fail('revenue', t('errRevenue', 'Pick a revenue range.'), form.querySelector('[name="revenue"]'));
    }
    if (!data.industry) {
      fail('industry', t('errIndustry', 'Select your industry.'), form.querySelector('[name="industry"]'));
    }

    return firstInvalid;
  }

  function redirectToThanks(data) {
    const params = new URLSearchParams();
    if (data.name) params.set('name', data.name);
    if (data.email) params.set('email', data.email);
    if (data.phone) params.set('phone', data.phone);
    if (data.revenue) params.set('revenue', data.revenue);
    if (data.industry) params.set('industry', data.industry);
    window.location.href = 'thankyou.html?' + params.toString();
  }

  triggers.forEach((t) => t.addEventListener('click', open));

  modal.querySelectorAll('[data-book-close]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      close();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    if (e.key === 'Tab') {
      const focusables = Array.from(card.querySelectorAll(focusableSelector)).filter(
        (el) => !el.disabled && el.offsetParent !== null
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  form.addEventListener('input', (e) => {
    const target = e.target;
    if (target && target.name) clearError(target.name);
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const data = {
      name: fd.get('name'),
      phone: fd.get('phone'),
      email: fd.get('email'),
      revenue: fd.get('revenue'),
      industry: fd.get('industry')
    };

    const firstInvalid = validate(data);
    if (firstInvalid) {
      firstInvalid.focus({ preventScroll: false });
      return;
    }

    form.classList.add('is-submitting');

    try {
      const res = await fetch(
        'https://cjjuotrbegmjceacygtt.supabase.co/rest/v1/leads',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqanVvdHJiZWdtamNlYWN5Z3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyNTc0MDAsImV4cCI6MjA5MjgzMzQwMH0.1pGAKypdY3PuRiAwuWPp9l-8oTlz9dquL9elQ8XV-Zg',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqanVvdHJiZWdtamNlYWN5Z3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyNTc0MDAsImV4cCI6MjA5MjgzMzQwMH0.1pGAKypdY3PuRiAwuWPp9l-8oTlz9dquL9elQ8XV-Zg',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone,
            revenue: data.revenue,
            industry: data.industry,
            locale: (window.SMP_I18N && document.documentElement.lang) || 'en'
          })
        }
      );

      if (!res.ok) throw new Error('supabase ' + res.status);
      redirectToThanks(data);
    } catch (err) {
      form.classList.remove('is-submitting');
      setError('email', t('errGeneric', 'Something went wrong. Please try again.'));
    }
  });
})();
