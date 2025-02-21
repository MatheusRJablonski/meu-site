// função para bloquear o conteudo
// function mostrar() {
//     const valor = document.getElementById('god').value;
//     //const valor = registrar.getElementById('nivelEscolaridade').value; futuro comando
//     valorNumero = parseInt(valor)

//     const elementosParaEsconder = document.querySelectorAll('.elementoParaEsconder');
//     elementosParaEsconder.forEach(elemento => { 
//         if (valorNumero === 0) {                // valor numero é para determina o que esta bloqueado
//             elemento.style.display = 'none';    // para desbloquear seção
//         } else {
//             elemento.style.display = 'block';   // para bloquear a seção
//         }
//     });
// }

function visibilidade(){
    const elementos = document.getElementsByClassName('divdivisoria');

    for (let i = 0; i < elementos.length; i++) {
        let elemento = elementos[i];
            elemento.classList.add('invisivel');
    }
}
function escolhaElementoInvisivel(jogoInicial){
    const elementos = document.getElementsByClassName('divdivisoria2');
    let elemento = []; // Declarar um array aqui
    console.log(jogoInicial);
    for (let i = 0; i < elementos.length; i++) {
        elemento[i+1] = elementos[i];
    }
    switch(jogoInicial){
        case "jogomemoria1":
            for (let i = 1; i <= elementos.length; i++) {
                elemento[i+1] = elementos[i];
                // console.log(i);
                // console.log(elemento[i]);
                elemento[i].classList.add('invisivel');
            }
        elemento[1].classList.remove('invisivel');
        break;
        case "jogomemoria2":
            for (let i = 1; i <= elementos.length; i++) {
                elemento[i+1] = elementos[i];
                elemento[i].classList.add('invisivel');
            }
        elemento[2].classList.remove('invisivel');
        break;
        case "jogomemoria3":
            for (let i = 1; i <= elementos.length; i++) {
                elemento[i+1] = elementos[i];
                elemento[i].classList.add('invisivel');
            }
        elemento[3].classList.remove('invisivel');
        break;
        case "jogoescolha":
            for (let i = 1; i <= elementos.length; i++) {
                elemento[i+1] = elementos[i];
                elemento[i].classList.add('invisivel');
            }
        elemento[4].classList.remove('invisivel');
        break;
        case "videoaula1":
            for (let i = 1; i <= elementos.length; i++) {
                elemento[i+1] = elementos[i];
                elemento[i].classList.add('invisivel');
            }
        elemento[5].classList.remove('invisivel');
        break;
        case "videoaula2":
            for (let i = 1; i <= elementos.length; i++) {
                elemento[i+1] = elementos[i];
                elemento[i].classList.add('invisivel');
            }
        elemento[6].classList.remove('invisivel');
        break;
        case "videoaula3":
            for (let i = 1; i <= elementos.length; i++) {
                elemento[i+1] = elementos[i];
                elemento[i].classList.add('invisivel');
            }
        elemento[7].classList.remove('invisivel');
        break;
    }
}
function voltarTelaPrincipal(){
    const secundario = document.getElementsByClassName('mainsecundario')[0]; //usando [0] para acessar o primeiro elemento da coleção
    const primario = document.getElementsByClassName('mainprincipal')[0]; 
    const divisoria = document.getElementsByClassName('divdivisoria');
    const divisoria2 = document.getElementsByClassName('divdivisoria2');

    secundario.classList.add('invisivel');
    primario.classList.remove('invisivel');
    for (let i = 0; i < divisoria.length; i++) {
        divisoria[i].classList.remove('invisivel');
    }
    for (let i = 0; i < divisoria2.length; i++) {
        divisoria2[i].classList.remove('invisivel');
    }
}

function jogoMemoria(click){
    // console.log(click);
    const jogo = document.getElementsByClassName('mainsecundario')[0];
    visibilidade();
    escolhaElementoInvisivel('jogomemoria'+click);
    
    if(jogo.classList.contains('invisivel')){
        jogo.classList.remove('invisivel');
    }
}

function jogoEscolha(){
    const jogo = document.getElementsByClassName('mainsecundario')[0];
    visibilidade();
    escolhaElementoInvisivel('jogoescolha');
    if(jogo.classList.contains('invisivel')){
        jogo.classList.remove('invisivel');
    }
}

function videoAula(click){
    // console.log(click);
    const jogo = document.getElementsByClassName('mainsecundario')[0];
    visibilidade();
    escolhaElementoInvisivel('videoaula'+click);
    if(jogo.classList.contains('invisivel')){
        jogo.classList.remove('invisivel');
    }
}