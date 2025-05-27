// 6. Análise de Posts em Mídia Social
// Crie um objeto analisador que:
// - Receba um array de posts (com autor, conteudo, curtidas e comentarios)
// - Calcule o total de curtidas de todos os posts
// - Encontre o post mais popular (com base em curtidas + comentarios.length)

const posts = [
  {
    autor: 'João Silva',
    conteudo: 'Hoje foi um ótimo dia para codar! 🚀',
    curtidas: 23,
    comentarios: [
      { autor: 'Maria', texto: 'Com certeza! Também programei bastante hoje.' },
      { autor: 'Carlos', texto: 'Boa, João! Continua assim!' },
    ],
  },
  {
    autor: 'Ana Souza',
    conteudo: 'Alguém tem dicas para aprender React?',
    curtidas: 15,
    comentarios: [
      { autor: 'Pedro', texto: 'Começa com a documentação oficial, é ótima!' },
      {
        autor: 'João Silva',
        texto: 'Tem um curso bom no YouTube, posso te passar.',
      },
    ],
  },
  {
    autor: 'Lucas Rocha',
    conteudo: 'Finalizei meu primeiro projeto com Node.js 🎉',
    curtidas: 40,
    comentarios: [
      { autor: 'Ana Souza', texto: 'Parabéns! Manda o link pra gente ver.' },
      { autor: 'Carlos', texto: 'Orgulho do time tech!' },
    ],
  },
  {
    autor: 'Mariana Lima',
    conteudo: 'Me apaixonei por Python! 🐍',
    curtidas: 32,
    comentarios: [
      { autor: 'João Silva', texto: 'Python é maravilhoso mesmo!' },
      { autor: 'Pedro', texto: 'Bem-vinda ao time dos pythonistas!' },
    ],
  },
  {
    autor: 'Carlos Mendes',
    conteudo: 'Deploy no ar com sucesso! 💻',
    curtidas: 18,
    comentarios: [
      {
        autor: 'Lucas Rocha',
        texto: 'Boa! Nada como ver o projeto rodando online.',
      },
      { autor: 'Ana Souza', texto: 'Quero aprender a fazer isso também!' },
    ],
  },
  {
    autor: 'Patrícia Oliveira',
    conteudo: 'Aprender Git salvou minha vida. 😂',
    curtidas: 27,
    comentarios: [
      { autor: 'Mariana Lima', texto: 'Commits organizados = mente em paz!' },
      { autor: 'Carlos Mendes', texto: 'Versão controlada é tudo!' },
    ],
  },
  {
    autor: 'Pedro Martins',
    conteudo: 'Que orgulho da minha primeira API RESTful! 😎',
    curtidas: 35,
    comentarios: [
      { autor: 'João Silva', texto: 'Mandou bem demais!' },
      { autor: 'Lucas Rocha', texto: 'Isso aí! Cada passo conta.' },
    ],
  },
  {
    autor: 'Beatriz Ramos',
    conteudo: 'Terminando o curso de HTML e CSS. Próximo: JavaScript! 💪',
    curtidas: 20,
    comentarios: [
      { autor: 'Ana Souza', texto: 'Boa sorte! JavaScript é divertido!' },
      { autor: 'Pedro Martins', texto: 'Qualquer coisa, chama a galera aqui!' },
    ],
  },
  {
    autor: 'Rafael Gomes',
    conteudo: 'Consegui minha primeira vaga como dev júnior! 🎉',
    curtidas: 50,
    comentarios: [
      { autor: 'Patrícia Oliveira', texto: 'Parabéns! Você merece!' },
      { autor: 'Mariana Lima', texto: 'Muito feliz por você!' },
    ],
  },
  {
    autor: 'Juliana Alves',
    conteudo: 'Alguém recomenda um bom projeto open source pra iniciantes?',
    curtidas: 12,
    comentarios: [
      {
        autor: 'Beatriz Ramos',
        texto: 'Tem o repositório do Dev.to, é bem acolhedor.',
      },
      {
        autor: 'Rafael Gomes',
        texto: 'Dá uma olhada no Awesome for Beginners no GitHub!',
      },
    ],
  },
];

const analisador = {
  curtidasTotais: function (array) {
    const curtidas = array.reduce((acc, post) => acc + post.curtidas, 0);
    return `Curtidas totais: ${curtidas}`;
  },

  postPopular: function(array){
    let mediaPostPopular = 0
    let postPopular = {}

    function calcularPopularidade(post) {
      return post.curtidas + post.comentarios.length;
    }

    array.forEach(post => {
      if(calcularPopularidade(post) > mediaPostPopular){
        mediaPostPopular = calcularPopularidade(post)
        postPopular = post
      }
    })

    return postPopular
  }
};

console.log(analisador.postPopular(posts));
