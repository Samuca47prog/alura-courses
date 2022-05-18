const criarTarefa = (evento) => {
    evento.preventDefault() //inibe o comportamento padrão do formulário

    const lista = document.querySelector('[data-list]') //captura a lista
    const input = document.querySelector('[data-form-input]') //captura o campo de entrada do form
    const valor = input.value

    const tarefa = document.createElement('li') //cria uma li
    tarefa.classList.add('task') //atribui uma classe a essa li

    const conteudo = `<p class="content">${valor}</p>` //cria um conteudo html
    tarefa.innerHTML = conteudo // atribui o conteudo de cima dentro da li

    lista.appendChild(tarefa) // adiciona a li criada como filha da lista

    input.value = " "   
}

// realiza a função criarTarefa quando o botão de nova tarefa é clicado
const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', criarTarefa)


