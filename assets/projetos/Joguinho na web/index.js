const texto = document.querySelector('.texto1')
let botao;
let ponto = 0
let numero = 0

/*
setInterval(function() {texto.className = 'sombra1';}, 250)

setInterval(function() {texto.className = 'sombra2';}, 300)

setInterval(function() {texto.className = 'sombra3';}, 500)

setInterval(function() {texto.className = 'sombra4'}, 600)

setInterval(function() {texto.className = 'sombra5'}, 700)

setInterval(function() {texto.className = 'sombra6'}, 750)

setInterval(function() {}, 900)*/

//alert('Clique no botão que irá aparecer em algum canto da tela')

function criabotao() {
    const botao = document.createElement('img')
    const paragr = document.createElement('p')
    botao.src = 'botao.png';
    botao.id = 'iniciar';
    botao.classList = 'botao';
    botao.textAlign = 'center';
    botao.alignContent = 'center';
    botao.style.maxWidth = '70px';
    paragr.classList = 'texto2'
    paragr.id = 'paragr'
    paragr.innerHTML = 'Clique no máximo de botões que aparecer na tela<br>'
    paragr.innerHTML += '<br>Clique no botão abaixo para inciar...'
    texto.appendChild(paragr)
    texto.appendChild(botao)
}
/*
function timerInicio() {
    const paragr = document.getElementById('paragr')
    const botao = document.getElementById('iniciar')

    
  function contadorRegressivo(inicio, elemento, callback) {
    let contagem = inicio;
    paragr.innerHTML = contagem;

    const intervalId = setInterval(() => {
        contagem--
        
        if(contagem === 0) {
            paragr.innerHTML = 'VALENDO !';
        } 
        else if (contagem <= -1) {
            clearInterval(intervalId);
            paragr.innerHTML = ''
        } else {
            paragr.innerHTML = contagem
        }
    }, 1000)
   }  
     contadorRegressivo(3, paragr)
   
     jogando()
   
}*/

async function timerInicio() {
    const botao = document.getElementById('iniciar')
    botao.src='';

    const paragr = document.getElementById('paragr')
    for (let count = 3; count > 0 ; count--) {
        paragr.innerHTML = count;
        await new Promise(r => setTimeout(r, 1000));
    }
    paragr.innerHTML= 'VALENDO!';
    await new Promise(r => setTimeout(r, 1000));
    paragr.innerHTML='';

    jogando()
}


function jogando() {
    const botao = document.getElementById('iniciar')
    botao.src = '';
    botao.src = 'botao.png'
    botao.style.position = 'absolute'
    botao.style.top = '120px'
    botao.style.right = '300px';
    botao.style.bottom = '13px';
    botao.style.left = '10px';
    botao.id = '1pt'
}

function numeroRandom(min, max) {
    return numero = Math.floor(Math.random() * (max - min + 1) + min)
    
}

function posicaoAleatoria() {
    const botao = document.getElementById('1pt');
    botao.style.top = `${numeroRandom(0, 1000)}px`
    botao.style.right = `${numeroRandom(0, 1000)}px`;
    botao.style.bottom = `${numeroRandom(0, 400)}px`;
    botao.style.left = `${numeroRandom(0, 750)}px`;

}

let pontos = function contagemPontos(ponto) {
    return ponto+1
}




document.addEventListener('click', function(e) {
    const el = e.target
    console.log(el)

    if (el.classList.contains('menuStart')) {
        texto.innerHTML= ''
        criabotao()
    }

    if (el.id === 'iniciar') {
        timerInicio()
    }

    if (el.id === '1pt') {
        ponto = pontos(ponto)
        posicaoAleatoria()
    }

})