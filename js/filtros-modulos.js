const filtros = document.querySelectorAll('.filtro input');
const cards = document.querySelectorAll('.card');

filtros.forEach(filtro => {
  filtro.addEventListener('change', () => {
    const ativos = Array.from(filtros)
      .filter(f => f.checked)
      .map(f => f.value);

    cards.forEach(card => {
      const cardFiltros = card.dataset.filtro.split(' ');
      const visivel = ativos.length === 0 || ativos.some(f => cardFiltros.includes(f));
      card.style.display = visivel ? 'flex' : 'none';
    });
  });
});
