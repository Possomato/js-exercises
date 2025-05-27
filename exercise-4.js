// 4. Filtro de Tarefas
// Crie um objeto gerenciador com:
//     Um array tarefas (objetos com descricao, prioridade e concluida).
//     Método filtrarPorPrioridade(prioridade).
//     Método marcarComoConcluida(id) (usando splice ou map).

const gerenciador = {
  tarefas: [
    {
      descricao: 'retirar o leite',
      prioridade: 'média',
      concluida: false,
      id: '00',
    },
    {
      descricao: 'ferver o leite',
      prioridade: 'alta',
      concluida: false,
      id: '01',
    },
    {
      descricao: 'retirar a nata',
      prioridade: 'baixa',
      concluida: false,
      id: '02',
    },
    {
      descricao: 'coar o leite',
      prioridade: 'média',
      concluida: false,
      id: '03',
    },
    {
      descricao: 'guardar o leite na geladeira',
      prioridade: 'alta',
      concluida: false,
      id: '04',
    },
    {
      descricao: 'lavar a leiteira',
      prioridade: 'média',
      concluida: false,
      id: '05',
    },
    {
      descricao: 'anotar a quantidade retirada',
      prioridade: 'baixa',
      concluida: false,
      id: '06',
    },
    {
      descricao: 'limpar a área de ordenha',
      prioridade: 'alta',
      concluida: false,
      id: '07',
    },
    {
      descricao: 'verificar a temperatura da geladeira',
      prioridade: 'média',
      concluida: false,
      id: '08',
    },
    {
      descricao: 'descartar nata velha',
      prioridade: 'baixa',
      concluida: false,
      id: '09',
    },
    {
      descricao: 'preparar utensílios para o próximo uso',
      prioridade: 'alta',
      concluida: false,
      id: '10',
    },
  ],

  filtrarPorPrioridade: function (prioridade) {
    const tarefasFiltradas = this.tarefas.filter(
      (tarefa) => tarefa.prioridade === prioridade,
    );

    const tarefasDescricao = tarefasFiltradas.map((tarefa) => tarefa.descricao);

    return `
      As tarefas com prioridade '${prioridade}' são: ${tarefasDescricao}
      `;
  },

  marcarComoConcluida: function (id) {
    this.tarefas.forEach(tarefa => {
      if(tarefa.id === id){
        tarefa.concluida = true
      }
    })
    
    const listaFiltrada = this.tarefas.filter(tarefa => tarefa.concluida === false)
    return `Lista de tarefas restantes: ${listaFiltrada.map(tarefa => tarefa.descricao)}`
  },
};

console.log(gerenciador.marcarComoConcluida('01'));
