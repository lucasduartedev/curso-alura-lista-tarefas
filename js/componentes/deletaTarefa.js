
// Componente - Botao DELETAR
const BotaoDeletarTarefa = () => {

    const botaoDeletar = document.createElement('button');
    botaoDeletar.innerText = 'Deletar'; // Define texto botão DELETAR
    botaoDeletar.classList.add('btn', 'btn-deletar'); // Classes necessárias do botão DELETAR
    
    botaoDeletar.addEventListener('click', deletarTarefa); // Chama função deletarTarefa

    return botaoDeletar;

}

const deletarTarefa = (evento) => {
    const botaoConcluir = evento.target;
    const divBotoes = botaoConcluir.parentElement;
    const tarefa = divBotoes.parentElement;

    tarefa.remove(); // Remove tarefa da listagem

    return tarefa;

}

export default BotaoDeletarTarefa;

