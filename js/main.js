
import BotaoConcluirTarefa from './componentes/concluiTarefa.js';
import BotaoDeletarTarefa from './componentes/deletaTarefa.js';

const criarTarefa = () => {

    const inputNovaTarefa = document.querySelector('[data-texto-nova-tarefa]');
    const listagemTarefas = document.querySelector('[data-listagem-tarefas]');
    
    const tarefa = document.createElement('li');
    tarefa.classList.add('container-listagem__tarefa'); // Define classe correta em <li>tarefa
    
    const divBotoes = document.createElement('div');
    divBotoes.classList.add('container-listagem__botoes'); // Define classe correta em <div>botões
    
    // Define estrutura - tag <p>
    tarefa.innerHTML = `<p class="container-listagem__tarefa__descricao">${inputNovaTarefa.value}</p>`;

    listagemTarefas.appendChild(tarefa); // Inseri tag <p> dentro de <li>tarefa
    tarefa.appendChild(divBotoes); // Inseri tag <div>botões dentro de <li>tarefa

    // Inseri botões [CONCLUIR & DELETAR] em <li>tarefa
    divBotoes.appendChild(BotaoConcluirTarefa());
    divBotoes.appendChild(BotaoDeletarTarefa());

    inputNovaTarefa.value = ''; // Apagar texto - Nova tarefa
    inputNovaTarefa.focus(); // Focar caixa - Nova tarefa

}

const btnCadastrar = document.querySelector('[data-btn-cadastrar]');

// Cadastrar nota tarefa - Ponto inicial
btnCadastrar.addEventListener('click', criarTarefa);
