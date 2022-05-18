//IIFE - imidiate invoked function expression - bloqueia o acesso as funções a partir do console
(() => {
    const criarTarefa = (evento) => {
        //o obj evento trasinformações sobre a ação que chamou a função
        evento.preventDefault() //inibe o comportamento padrão do formulário

        const lista = document.querySelector('[data-list]') //captura a lista
        const input = document.querySelector('[data-form-input]') //captura o campo de entrada do form
        const valor = input.value

        const tarefa = document.createElement('li') //cria uma li
        tarefa.classList.add('task') //atribui uma classe a essa li

        const conteudo = `<p class="content">${valor}</p>` //cria um conteudo html
        tarefa.innerHTML = conteudo // atribui o conteudo de cima dentro da li

        tarefa.appendChild(BotaoConclui()) //adiciona na tarefa o botão de concluir
        tarefa.appendChild(BotaoDeleta()) //adciona o botao de deletar
        lista.appendChild(tarefa) // adiciona a li criada como filha da lista

        input.value = " "   
    }

    // realiza a função criarTarefa quando o botão de nova tarefa é clicado
    const novaTarefa = document.querySelector('[data-form-button]')
    novaTarefa.addEventListener('click', criarTarefa)

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

        tarefaConcluida.classList.toggle('done')
    }

    const BotaoDeleta = () => {
        const botaoDeleta = document.createElement('button')

        botaoDeleta.innerText = 'deletar'
        botaoDeleta.addEventListener('click', deletarTarefa)

        return botaoDeleta
    }

    const deletarTarefa = (evento) => {
        const botaoDeleta = evento.target

        const tarefaCompleta = botaoDeleta.parentElement

        tarefaCompleta.remove()

        // return botaoDeleta
    }

})()