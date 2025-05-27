// 5. Inventário de Produtos
// Crie uma função que processe um array de objetos produto (com nome, preco e estoque):
//     Retorne produtos com preço abaixo de um valor.
//     Atualize o estoque após uma venda.
//     Ordene os produtos por maior estoque.

const inventario = {
  produtos: [
    { nome: 'notebook', preco: 2000, estoque: 41 },
    { nome: 'mouse gamer', preco: 150, estoque: 80 },
    { nome: 'teclado mecânico', preco: 300, estoque: 55 },
    { nome: 'monitor ultrawide', preco: 1500, estoque: 20 },
    { nome: 'webcam full hd', preco: 250, estoque: 30 },
  ],

  produtosAbaixoDe: function(valor){
    const produtosFiltrados = this.produtos.filter(produto => produto.preco < valor)

    return`Produtos abaixo de ${valor}: ${produtosFiltrados.map(produto => produto.nome + ': $' + produto.preco)}`
  },

  maiorEstoque: function(){
    return [...this.produtos].sort((a, b) => b.estoque - a.estoque);
  },

  venda: function(titulo){
    let novaQuantidade = 0
    this.produtos.forEach(produto => {
      if(titulo === produto.nome){
        produto.estoque = produto.estoque - 1
        novaQuantidade = produto.estoque
      }
    })

    return `Obrigado pela compra! Estoque atual: ${novaQuantidade}`
  }
};

console.log(inventario.maiorEstoque())