(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      nav.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Abrir menú');
    }));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.focus();
      }
    });
  }
  document.querySelectorAll('.header-search').forEach(form => {
    const input = form.querySelector('input');
    form.querySelector('button').addEventListener('click', e => {
      if (matchMedia('(max-width: 700px)').matches && document.activeElement !== input) {
        e.preventDefault(); form.classList.add('search-open'); input.focus();
      }
    });
    input.addEventListener('blur', () => { if (!input.value) form.classList.remove('search-open'); });
  });
  const search = document.querySelector('#catalog-filter');
  if (search) {
    const cards = [...document.querySelectorAll('.catalog-card')];
    const empty = document.querySelector('#catalog-empty');
    const params = new URLSearchParams(location.search);
    search.value = params.get('q') || params.get('categoria') || '';
    const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
    function filter() {
      const q = normalize(search.value); let count = 0;
      cards.forEach(card => {
        const show = !q || normalize(card.dataset.category + ' ' + card.textContent).includes(q);
        card.hidden = !show; if (show) count++;
      });
      empty.hidden = count !== 0;
    }
    search.addEventListener('input', filter); filter();
  }
  const interest = document.querySelector('#interes');
  if (interest) {
    const initial = new URLSearchParams(location.search).get('interes');
    if ([...interest.options].some(o => o.value === initial)) interest.value = initial;
  }
  const signup = document.querySelector('#signup-form');
  signup?.addEventListener('submit', e => {
    e.preventDefault();
    if (!signup.reportValidity()) return;
    const d = new FormData(signup);
    const content = ['SOLICITUD DE ALTA MAYORISTA · HTG ACCESORIOS', '',
      `Nombre: ${d.get('nombre')}`, `Negocio: ${d.get('negocio')}`, `Email: ${d.get('email')}`,
      `Teléfono: ${d.get('telefono')}`, `Rubro: ${d.get('interes') || 'Sin especificar'}`,
      `Consulta: ${d.get('mensaje') || 'Sin especificar'}`, '',
      'Solicitud preparada desde la demo web. Enviar al contacto comercial oficial de HTG.'].join('\n');
    const url = URL.createObjectURL(new Blob([content], {type:'text/plain;charset=utf-8'}));
    const a = document.createElement('a'); a.href = url; a.download = 'solicitud-alta-htg.txt'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    document.querySelector('#form-message').textContent = 'Solicitud descargada. Enviásela al contacto comercial oficial de HTG.';
  });
})();
