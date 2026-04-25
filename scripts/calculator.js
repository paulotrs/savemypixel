// Pricing estimator — simple tier mapping
(function () {
  const spend = document.getElementById('spend');
  const events = document.getElementById('events');
  const spendVal = document.getElementById('spend-val');
  const eventsVal = document.getElementById('events-val');
  const estimate = document.getElementById('estimate');
  const tierName = document.getElementById('tier-name');
  if (!spend || !events) return;

  const fmtMoney = (n) => '$' + n.toLocaleString('en-US');
  const fmtNum = (n) => n.toLocaleString('en-US');

  function recompute() {
    const s = +spend.value;
    const e = +events.value;
    spendVal.textContent = fmtMoney(s);
    eventsVal.textContent = fmtNum(e);

    // Tier logic — placeholder; adjust once real pricing is confirmed
    let tier = 'starter', price = 499;
    if (s > 30000 || e > 25000) { tier = 'growth'; price = 1499; }
    if (s > 150000 || e > 150000) { tier = 'scale'; price = null; }

    estimate.textContent = price == null ? 'Custom' : fmtMoney(price) + ' / mo';
    tierName.textContent = 'tier · ' + tier;
  }

  spend.addEventListener('input', recompute);
  events.addEventListener('input', recompute);
  recompute();
})();
