//funções que criam componentes iniciam com maiúsculo!
const BotaoConclui = () => {
    const botaoConclui = document.createElement('button') //cria um botão

    botaoConclui.classList.add('check-button') //adciona a classe check-button
    botaoConclui.innerText = 'concluir' //adciona um texto nele
    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui //retorna o botão criado
}

const concluirTarefa = (evento)=> {
    const botaoConclui = evento.target
    const tarefaConcluida = botaoConclui.parentElement

    tarefaConcluida.classList.toggle('done') //troca a classe da tarefa
}

export default BotaoConclui

/* outras formas de exportar...

* no final do código
export {
    BotaoConclui,
    concluirTarefa
}

* Na declaração da função
export const BotaoConclui ...

*/