# Exercícios de JavaScript - Manipulação de Arrays e Objetos

## 1. Sistema de Biblioteca

Crie uma função que receba um array de objetos livro (com propriedades como titulo, autor e emprestado) e:
- Marque um livro como emprestado pelo título
- Retorne um array com os títulos dos livros disponíveis
- Adicione um novo livro ao array

```javascript
const biblioteca = [
    { titulo: "1984", autor: "George Orwell", emprestado: false },
    { titulo: "Dom Quixote", autor: "Miguel de Cervantes", emprestado: true }
];
```

## 2. Carrinho de Compras

Crie um objeto carrinho com:
- Uma propriedade itens (array de objetos com nome, preco e quantidade)
- Métodos para calcularTotal() (retorna o preço total) e aplicarDesconto(percentual)

```javascript
// Exemplo de uso:
carrinho.itens = [{ nome: "Caneta", preco: 2.5, quantidade: 10 }];
carrinho.calcularTotal(); // Retorna 25
carrinho.aplicarDesconto(10); // Aplica 10% de desconto
```

## 3. Gerenciador de Estudantes

Crie uma função que receba um array de objetos estudante (com nome, notas [array]) e:
- Calcule a média de cada estudante
- Retorne o estudante com a maior média
- Adicione uma nova nota a um estudante específico

## 4. Filtro de Tarefas

Crie um objeto gerenciador com:
- Um array tarefas (objetos com descricao, prioridade e concluida)
- Método filtrarPorPrioridade(prioridade)
- Método marcarComoConcluida(id) (usando splice ou map)

## 5. Inventário de Produtos

Crie uma função que processe um array de objetos produto (com nome, preco e estoque):
- Retorne produtos com preço abaixo de um valor
- Atualize o estoque após uma venda
- Ordene os produtos por maior estoque

## 6. Análise de Posts em Mídia Social

Crie um objeto analisador que:
- Receba um array de posts (com autor, conteudo, curtidas e comentarios)
- Calcule o total de curtidas de todos os posts
- Encontre o post mais popular (com base em curtidas + comentarios.length)

## 7. Sistema de Hierarquia de Funcionários

Crie uma função que processe um array de objetos funcionario (com nome, cargo, salario e subordinados):
- Calcule o salário total da equipe (incluindo subordinados recursivamente)
- Encontre todos os funcionários de um departamento

## 8. Gerenciador de Eventos

Crie um objeto evento com:
- Propriedades nome, data e participantes (array de objetos com nome e idade)
- Método adicionarParticipante(participante)
- Método verificarMaioridade() (retorna participantes com idade ≥ 18)

## 9. Processador de Posts de Blog

Crie uma função que:
- Receba um array de objetos post (com titulo, tags [array], dataPublicacao)
- Retorne posts que contenham uma tag específica
- Ordene os posts por data (do mais recente)

## 10. Sistema de RPG para Personagens

Crie um objeto personagem com:
- Propriedades nome, classe, nivel e atributos (objeto com força, agilidade)
- Método aumentarNivel() (aumenta atributos baseado na classe)
- Função que retorne todos os personagens de uma classe específica

---

**Observação:** Cada exercício exige a combinação de funções para manipular dados, objetos para estruturar entidades e arrays para gerenciar coleções. Use métodos como map, filter, reduce e loops como for ou forEach para resolvê-los.