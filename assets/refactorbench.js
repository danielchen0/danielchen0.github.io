(function () {
  const chart = document.querySelector('#rb-model-chart');
  const controls = document.querySelectorAll('[data-chart-mode]');
  const summary = document.querySelector('#rb-chart-summary');

  if (!chart || !controls.length || !summary) return;

  const summaries = {
    enabled: 'Best result: Gemini 3.0 Pro at 25.2%',
    disabled: 'Best result: Gemini 2.5 Pro and Gemini 3.0 Pro at 17.9%'
  };

  controls.forEach((control) => {
    control.addEventListener('click', () => {
      const mode = control.dataset.chartMode;

      controls.forEach((button) => {
        const active = button === control;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });

      chart.querySelectorAll('.rb-bar-row').forEach((row) => {
        const value = Number(row.dataset[mode]);
        row.querySelector('.rb-bar-track i').style.setProperty('--bar', `${(value / 30) * 100}%`);
        row.querySelector('strong').textContent = `${value.toFixed(1)}%`;
      });

      summary.textContent = summaries[mode];
    });
  });
}());
