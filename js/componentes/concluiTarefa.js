
// Componente - Botao CONCLUIR
const BotaoConcluirTarefa = () => {
    
    const botaoConclui = document.createElement('button');
    botaoConclui.innerText = 'Concluir'; // Define texto botão CONCLUIR
    botaoConclui.classList.add('btn', 'btn-concluir'); // Classes necessárias do botão CONCLUIR
    
    botaoConclui.addEventListener('click', concluirTarefa); // Chama função cloncluirTarefa
    
    return botaoConclui;
    
}

const concluirTarefa = (evento) => {
    const botaoConcluir = evento.target;
    const divBotoes = botaoConcluir.parentElement;
    const tarefa = divBotoes.parentElement.firstElementChild;

    // Alterar vizual - Botão concluir
    if( tarefa.classList.contains('tarefa-concluida') ) {
        tarefa.classList.remove('tarefa-concluida');
        botaoConcluir.classList.remove('btn-concluir-tachado');
    }
    else {
        tarefa.classList.add('tarefa-concluida');
        botaoConcluir.classList.add('btn-concluir-tachado');
    }

    return tarefa;

}

export default BotaoConcluirTarefa;
