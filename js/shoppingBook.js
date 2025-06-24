const searchInput = document.getElementById('search'); 
const livros = document.querySelectorAll('.livros');
const semResultado = document.getElementById('sem-resultado');

searchInput.addEventListener('input', function () {
  const valorBusca = this.value.toLowerCase().trim();
  let algumVisivel = false;

  livros.forEach(livro => {
    const titulo = livro.querySelector('h3').textContent.toLowerCase();
    const corresponde = titulo.includes(valorBusca);

    livro.style.display = corresponde ? 'flex' : 'none';
    if (corresponde) algumVisivel = true;
  });

  semResultado.style.display = algumVisivel ? 'none' : 'block';
});
