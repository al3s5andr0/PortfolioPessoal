const res = document.getElementById("Approach")
const botaoCriaCalc = document.getElementById('calculator')
const section = document.getElementById('container')


let controlador = 'nãocriado'
let n1;
let valor;
let botaoOperador;
let calculadora = new Object();
let botoes;


function fecharCalculadora() {
    controlador = 'nãocriado'
    botaoCriaCalc.value = 'Calculadora'
    botaoCriaCalc.removeAttribute("style")
    botaoCriaCalc.id = 'calculator'
    botaoCriaCalc.classList = 'calculator'
    res.removeEventListener('click', botoes)
    res.removeChild(sectionAdd)
    location.reload();
        }  
  
function abrirCalc() {
    botaoCriaCalc.setAttribute('style','color:red')
    botaoCriaCalc.value = 'Fechar calculadora'
    botaoCriaCalc.id = 'fechar'
    botaoCriaCalc.classList = 'fecharCalc'
}
abrirCalc()

const criaEFecha = function() {
section.addEventListener('click', function (e) {
    let elemento = e.target

    if (elemento.id === 'taskList'){
        alert('Feche a calculadora...')
    }
    if (elemento.classList.contains('fecharCalc')){
        if (controlador === 'criado'){
            fecharCalculadora();
            return
}}})}

criaEFecha()



function criarCalc() {
    
    const listaBotao = ['C', '%', '**', '/', 'del',
                        7, 8, 9, '*', '=',
                        4, 5, 6, '+',
                        1, 2, 3, '-',
                        0 ]

        
        const p = document.createElement('p');
        
        if (controlador === 'nãocriado') {
            sectionAdd = document.createElement('section')
            sectionAdd.classList = 'addSection'
        }
        

        calculadora.visor = document.createElement('input')
        calculadora.visor.type = 'text'
        calculadora.visor.classList = 'telaCalc'
        calculadora.visor.id = 'tela'
        calculadora.visor.style.width = '220px'
        calculadora.visor.style.height = '30px'

        res.appendChild(sectionAdd)
        sectionAdd.appendChild(calculadora.visor)

    for (i of listaBotao) {
    
        calculadora.botao = document.createElement('button');
        calculadora.botao.innerText = i;
        calculadora.botao.id = i;
        calculadora.botao.classList = 'botao'
        calculadora.botao.style.padding = "8px"
        calculadora.botao.style.height = '45px'
        calculadora.botao.style.width = '45px'
        
        p.appendChild(calculadora.botao) 

    if (i === 'C') {calculadora.botao.classList = 'botaoC'}
    if (i === '/') {calculadora.botao.classList = 'botao/'}
    if (i === '**') {calculadora.botao.classList = 'botao**'}
    if (i === '%') {calculadora.botao.classList = 'botao%'}
    if (i === '*') {calculadora.botao.classList = 'botao*'}

    if (i === 0) {
        calculadora.botao.style.width = '180px'
    }
    if (i === '=') {
        calculadora.botao.style.position = 'absolute'
        calculadora.botao.style.height = '180px'
        calculadora.botao.classList = 'botao='
        p.innerHTML += '<br>'
    }
    if (i === '+') {
        calculadora.botao.classList = 'botao+'
        p.innerHTML += '<br>'
    }
    if (i === '-') {
        calculadora.botao.classList = 'botao-'
        p.innerHTML += '<br>'
    }
    if (i == 'del') {
        
        calculadora.botao.classList = 'botaoDel'
        p.innerHTML += '<br>'
    }
    } 

sectionAdd.appendChild(p)
calculadora.visor.focus();
controlador='criado'}
criarCalc()





const funcionarBotoes = function(){
res.addEventListener('click', botoes = function (e) {
    const elemento = e.target        
   if (elemento.classList.contains('botao')) {
        calculadora.visor.value += elemento.id
   }
   
   if (elemento.classList.contains('botao+')) {
    botaoOperador = elemento.id
    n1 = calculadora.visor.value
    n1 = parseInt(n1)
    calculadora.visor.focus();
    calculadora.visor.value = ''
   } 
   if (elemento.classList.contains('botao-')) {
    botaoOperador = elemento.id
    n1 = calculadora.visor.value
    n1 = parseInt(n1)
    calculadora.visor.focus();
    calculadora.visor.value = ''
   } 
   if (elemento.classList.contains('botao*')) {
    botaoOperador = elemento.id
    n1 = calculadora.visor.value
    n1 = parseInt(n1)
    calculadora.visor.focus();
    calculadora.visor.value = ''
   } 
   if (elemento.classList.contains('botao/')) {
    botaoOperador = elemento.id
    n1 = calculadora.visor.value
    n1 = parseInt(n1)
    calculadora.visor.focus();
    calculadora.visor.value = ''
   }
   if (elemento.classList.contains('botao**')) {
    botaoOperador = elemento.id
    n1 = calculadora.visor.value
    n1 = parseInt(n1)
    calculadora.visor.focus();
    calculadora.visor.value = ''
   }  
   if (elemento.classList.contains('botaoC')) {
    valor = 0;
    n1 = 0;
    calculadora.visor.focus();
    calculadora.visor.value = ''
   }  
   if (elemento.classList.contains('botao%')) {
    botaoOperador = elemento.id
    n1 = calculadora.visor.value
    n1 = parseInt(n1)
    calculadora.visor.focus();
    calculadora.visor.value = ''
   }    
   if (elemento.classList.contains('botaoDel')) {
    botaoOperador = elemento.id
    calculadora.visor.value = calculadora.visor.value.slice(0, -1)
    n1 = calculadora.visor.value
    n1 = parseInt(n1)
    calculadora.visor.focus();
   }    

   if(elemento.classList.contains('botao=')) {
    valor = calculadora.visor.value
    valor = parseInt(valor)
    
    if (botaoOperador === '+') {
        var conta = n1 + valor
        calculadora.visor.focus();
        calculadora.visor.value = conta
    }
    if (botaoOperador === '-') {
        var conta = n1 - valor
        calculadora.visor.focus();
        calculadora.visor.value = conta
    }
    if (botaoOperador === '/') {
        if (n1 === 0 || valor === 0) {
        calculadora.visor.focus();
        calculadora.visor.value = 'Não é possivel dividir por zero'
        } else {
        var conta = n1 / valor
        calculadora.visor.focus();
        calculadora.visor.value = conta
        }
        
    }
    if (botaoOperador === '*') {
        var conta = n1 * valor
        calculadora.visor.focus();
        calculadora.visor.value = conta
    }
    if (botaoOperador === '**') {
        var conta = n1 ** valor
        calculadora.visor.focus();
        calculadora.visor.value = conta
    } 
    if (botaoOperador === '%') {
        var conta = n1 % valor
        calculadora.visor.focus();
        calculadora.visor.value = conta
   }}
   
})}
funcionarBotoes()







