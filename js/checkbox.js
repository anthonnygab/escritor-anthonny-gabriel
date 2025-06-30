document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.genreCheck input[type="checkbox"]');
    const livros = document.querySelectorAll('.livros');
    const semResultado = document.getElementById('sem-resultado');

    function filtrarLivros() {
        const generosSelecionados = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        let algumVisivel = false;

        livros.forEach(livro => {
            const generoLivro = livro.dataset.genero.split(' ');
            const corresponde = generosSelecionados.length === 0 || generosSelecionados.some(g => generoLivro.includes(g));
            
            if (corresponde) {
                livro.style.display = 'block';
                algumVisivel = true;
            } else {
                livro.style.display = 'none';
            }
        });

        semResultado.style.display = algumVisivel ? 'none' : 'block';
    }

    checkboxes.forEach(cb => {
        cb.addEventListener('change', filtrarLivros);
    });

    filtrarLivros(); // Executa ao carregar
});