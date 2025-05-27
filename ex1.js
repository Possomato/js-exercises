// 1. Sistema de Biblioteca

// Crie uma função que receba um array de objetos livro (com propriedades como titulo, autor e emprestado) e:
//     Marque um livro como emprestado pelo título.
//     Retorne um array com os títulos dos livros disponíveis.
//     Adicione um novo livro ao array.

const biblioteca = [
  { titulo: '1984', autor: 'George Orwell', emprestado: false },
  { titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', emprestado: true },
];

function handleBiblioteca(livros){
  return{
    emprestar: (titulo)  => {
      const encontrado = livros.find(livro => livro.titulo == titulo)
      if(encontrado){
        encontrado.emprestado = true
        return (`${titulo} emprestado com sucesso!`)
      } else{
        return (`${titulo} não encontrado.`)
      }
    },
    disponiveis:() => {
      const livrosDisponiveis = livros.filter(livro => livro.emprestado == false)
      return (`Livros disponíveis: ${livrosDisponiveis.map(livro => livro.titulo)}`)
    },
    adicionar: (titulo, autor) => {
      const novoLivro = {titulo: titulo, autor: autor, emprestado: false}
      livros.push(novoLivro)
      return (`Lista de livros atualizada: ${livros.map(livro => livro.titulo)}`)
    }
  }
}

console.log(handleBiblioteca(biblioteca).adicionar('The Hobbit', 'Tolkien'))