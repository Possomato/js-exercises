// ## 7. Sistema de Hierarquia de Funcionários
// Crie uma função que processe um array de objetos funcionario (com nome, cargo, salario e subordinados):
// - Calcule o salário total da equipe (incluindo subordinados recursivamente)
// - Encontre todos os funcionários de um departamento

const funcionarios = [
  {
    nome: 'Ana Silva',
    cargo: 'Gerente',
    salario: 8000,
    departamento: 'Vendas',
    subordinados: [
      { nome: 'Carlos Souza', cargo: 'Supervisor', salario: 6000 },
      { nome: 'Fernanda Lima', cargo: 'Supervisor', salario: 6000 },
    ],
  },
  {
    nome: 'Carlos Souza',
    cargo: 'Supervisor',
    salario: 6000,
    departamento: 'Vendas',
    subordinados: [
      { nome: 'João Pereira', cargo: 'Vendedor', salario: 3000 },
      { nome: 'Mariana Costa', cargo: 'Vendedora', salario: 3000 },
    ],
  },
  {
    nome: 'Fernanda Lima',
    cargo: 'Supervisor',
    salario: 6000,
    departamento: 'Vendas',
    subordinados: [
      { nome: 'Paulo Oliveira', cargo: 'Vendedor', salario: 3000 },
      { nome: 'Lucas Martins', cargo: 'Vendedor', salario: 3000 },
    ],
  },
  {
    nome: 'João Pereira',
    cargo: 'Vendedor',
    salario: 3000,
    departamento: 'Vendas',
    subordinados: [],
  },
  {
    nome: 'Mariana Costa',
    cargo: 'Vendedora',
    salario: 3000,
    departamento: 'Vendas',
    subordinados: [],
  },
  {
    nome: 'Paulo Oliveira',
    cargo: 'Vendedor',
    salario: 3000,
    departamento: 'Vendas',
    subordinados: [],
  },
  {
    nome: 'Lucas Martins',
    cargo: 'Vendedor',
    salario: 3000,
    departamento: 'Vendas',
    subordinados: [],
  },
  {
    nome: 'Beatriz Rocha',
    cargo: 'Analista',
    salario: 5000,
    departamento: 'Financeiro',
    subordinados: [
      { nome: 'Ricardo Alves', cargo: 'Assistente', salario: 2500 },
    ],
  },
  {
    nome: 'Ricardo Alves',
    cargo: 'Assistente',
    salario: 2500,
    departamento: 'Financeiro',
    subordinados: [],
  },
  {
    nome: 'Sofia Dias',
    cargo: 'Diretora',
    salario: 12000,
    departamento: 'Administração',
    subordinados: [
      { nome: 'Ana Silva', cargo: 'Gerente', salario: 8000 },
      { nome: 'Beatriz Rocha', cargo: 'Analista', salario: 5000 },
    ],
  },
];

const rh = {
  salarioTotal: (array) => {
    const salarios1 = array.reduce(
      (acc, funcionario) => acc + funcionario.salario,
      0,
    );

    let salarios2 = 0;
    array.forEach((funcionario) => {
      salarios2 += funcionario.subordinados.reduce(
        (acc, subordinado) => acc + subordinado.salario,
        0,
      );
    });

    return `o salário total é: $${salarios1 + salarios2}`;
  },

  departamento: (array, departamento) => {
    const funcionariosDepartamento1 = array.filter(
      (funcionario) => funcionario.departamento === departamento,
    );
    const funcionariosDepartamento2 = [];
    funcionariosDepartamento1.forEach((funcionario) => {
      funcionariosDepartamento2.push(funcionario.nome);

      if (funcionario.subordinados) {
        funcionario.subordinados.forEach((subordinado) =>
          funcionariosDepartamento2.push(subordinado.nome),
        );
      }
    });

    return `Funcionários do departamento ${departamento}: ${funcionariosDepartamento2.join(
      ', ',
    )}`;
  },
};

console.log(rh.departamento(funcionarios, 'Vendas'));
