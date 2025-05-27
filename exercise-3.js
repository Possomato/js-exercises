// 3. Gerenciador de Estudantes
// Crie uma função que receba um array de objetos estudante (com nome, notas [array]) e:
//     Calcule a média de cada estudante.
//     Retorne o estudante com a maior média.
//     Adicione uma nova nota a um estudante específico.

const secretaria = {
  estudantes: [
    {
      nome: 'Gabriel',
      notas: [8, 8.5, 4, 6],
    },
    {
      nome: 'Miguel',
      notas: [2, 9.8, 3, 7],
    },
    {
      nome: 'Rafael',
      notas: [5, 3.5, 5, 2],
    },
  ],

  maiorNota: function () {
    let maiorNota = 0;
    let estudanteComMaiorNota = '';

    this.estudantes.map((estudante) => {
      const notasSomadas = estudante.notas.reduce((acc, item) => acc + item, 0);
      const media = notasSomadas / estudante.notas.length;

      if (media > maiorNota) {
        maiorNota = media;
        estudanteComMaiorNota = estudante.nome;
      }
    });

    return `A maior nota é do ${estudanteComMaiorNota} com ${maiorNota}`;
  },

  calcularMedias: function () {
    return this.estudantes.map((estudante) => {
      const soma = estudante.notas.reduce((acc, nota) => acc + nota, 0);
      const media = soma / estudante.notas.length;
      return { nome: estudante.nome, media: Number(media.toFixed(2)) };
    });
  },

  adicinarNovaNota: function (nomeEstudante, nota) {
    const estudanteEncontrado = this.estudantes.find(
      (estudante) => estudante.nome === nomeEstudante,
    );

    if (estudanteEncontrado) {
      estudanteEncontrado.notas.push(nota);
      return `Notas atualizadas do ${estudanteEncontrado.nome}: ${estudanteEncontrado.notas}`;
    } else {
      return `${nomeEstudante} não foi encontrado em nossa dataBase, tente novamente.`;
    }
  },
};

console.log(secretaria.calcularMedias());
