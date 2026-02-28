const section = document.getElementById('Approach')
const botaoCriarLista = document.getElementById('taskList')
let controle = 'nãocriado'

let inputTarefa;
let botaoEnviar;



function criarLi() {
    let li = document.createElement('li')
    li.classList= 'liTarefa'
    return li
}

function criarInputTarefa() {
    const inputTarefa = document.createElement('input')
    const botaoEnviar = document.createElement('button')
    inputTarefa.type = 'text'
    inputTarefa.value = 'Digite sua tarefa'
    inputTarefa.id = 'tarefa'
    inputTarefa.classList = 'textoTarefa'
    botaoEnviar.innerText = 'enviar'
    botaoEnviar.value ='Enviar'
    botaoEnviar.classList = 'enviarTarefa'
    section.appendChild(inputTarefa)
    section.appendChild(botaoEnviar)
    controle = 'criado'
    botaoCriarLista.setAttribute('style','color:red')
    botaoCriarLista.value ='Fechar Lista de tarefas'
    botaoCriarLista.classList = 'fecharTarefa'
    return inputTarefa, botaoEnviar
    
}
criarInputTarefa()

function criaBotaoApagar (li) {
    li.innerText +=  ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.id = 'apagar'
    botaoApagar.classList = 'botaoApagar'
    botaoApagar.innerText = 'Remover'
    li.appendChild(botaoApagar)
}

function criaTarefas(textoInput) {
    const li = criarLi()
    li.innerText = textoInput
    section.appendChild(li)
    criaBotaoApagar(li)
    salvarTarefas()
}

document.addEventListener('click', function (e) {
    elemento = e.target
    let textoTarefa = document.getElementById('tarefa')

    if (elemento.id === 'calculator') {
        alert('Feche a lista de tarefas...')
    }

    if (elemento.classList.contains('taskList')) {
        elemento.id = 'fechar'
        return

    }

    if (elemento.classList.contains('fecharTarefa')) {
        let tarefa = document.getElementById('inputTarefa')
        elemento.id = 'taskList'
        botaoCriarLista.classList = 'taskList'
        botaoCriarLista.removeAttribute('style')
        botaoCriarLista.value = 'Lista de tarefa'
        section.innerText = ''
        location.reload();
    }

    if (elemento.classList.contains('textoTarefa')) {
        textoTarefa.value = ''
    }

    if (elemento.classList.contains('enviarTarefa')) {
        
        if (!textoTarefa.value) return
        if (textoTarefa.value === 'Digite sua tarefa') return

        criaTarefas(textoTarefa.value)
        textoTarefa.value = ''
        textoTarefa.focus()
    }

    if (elemento.classList.contains('botaoApagar')) {
        elemento.parentElement.remove()
        salvarTarefas()
    }

})

function salvarTarefas () {
    const liTarefas = section.querySelectorAll('li')
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        tarefa.id = 'tarefaSalva'
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Remover', '').trim()
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of listaDeTarefas) {
        criaTarefas(tarefa)
    }
}

if (controle = 'criado') {
    adicionaTarefasSalvas()
}
