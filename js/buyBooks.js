//Link para comprar o livro O Camponês Rei

const camponesRei = document.querySelector('.btn-ui');

camponesRei.addEventListener('click', function () {
   window.open('https://loja.uiclap.com/titulo/ua24768/?srsltid=AfmBOor6rWIdwxe7uUojHHq6l7bMX5CXr12xQ4LXiDNBgj6nZSCKEq-d', '_blank');
});

//Link para comprar o livro As Aventuras em Lafia - Além do Portão Dourado

const portao = document.getElementById('portaoBtn');

portao.addEventListener('click', function () {
   console.log('Livro ainda não  <strong>disponivel para venda</strong>');
});