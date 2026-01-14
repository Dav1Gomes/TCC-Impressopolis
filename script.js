function gerarNumeroAleatorio() {
  const numero = Math.floor(Math.random() * 6) + 1;
  console.log(`Número gerado: ${numero}`);
  return numero;
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('Página carregada!');
  gerarNumeroAleatorio();
});

document.addEventListener('click', function(evento) {
  if (evento.target.classList.contains('btn-menu')) {
    console.log('Menu clicado!');
    gerarNumeroAleatorio();
  }
});
