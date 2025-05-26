// 2. Carrinho de Compras
// Crie um objeto carrinho com:
//     Uma propriedade itens (array de objetos com nome, preco e quantidade).
//     Métodos para calcularTotal() (retorna o preço total) e aplicarDesconto(percentual).

// Exemplo de uso:
// carrinho.itens = [{ nome: "Caneta", preco: 2.5, quantidade: 10 }, ...];
// carrinho.calcularTotal(); // Retorna 25
// carrinho.aplicarDesconto(10); // Aplica 10% de desconto

const carrinho = {
  itens: [
    { nome: 'Caneta', preco: 2.5, quantidade: 10 },
    { nome: 'Mesa', preco: 90, quantidade: 3 },
    { nome: 'Cadeira', preco: 50, quantidade: 6 },
  ],
  calcularTotal: function () {
    let total = 0;

    this.itens.forEach((item) => (total += item.preco * item.quantidade));

    return total;
  },
  aplicarDesconto: function (porcentagem) {
    const total = this.calcularTotal();
    const desconto = (total * porcentagem) / 100;
    return total - desconto;
  },
};

console.log(carrinho.aplicarDesconto(10));
