const verificacao = document.querySelector('#contagemRegressiva').querySelector('.resposta').classList;
const telablock = document.querySelector(".bloqueio");

function abrirCaixa(local){
    //local é um parametro que serve para localizar o click
    const click = document.getElementById(local).querySelector('.resposta');
    
    telablock.classList.remove('hidden');
    click.classList.remove('hidden');
}
function fecharCaixa(local){
    //local é um parametro que serve para localizar o click
    const click = document.getElementById(local).querySelector('.resposta');

    telablock.classList.add('hidden');
    click.classList.add('hidden');

    //reseta as variaveis globais
    lucroTotal = [];
    lucroSoma = 0;
    iGlobal = 1;
}





function contagemRegressiva(){
    const local = document.querySelector('#contagemRegressiva');
    const input = local.querySelector("#contador").value;
    const outputopcao1 = local.querySelector('#recebimento');
    const outputopcao2 = local.querySelector('#recebimento2');
    let segundos = input;
    var output = 0;
    let intervalo = setInterval(function() {
        if (segundos === -1) {
            clearInterval(intervalo); // parar o uso da memoria
            outputopcao2.textContent = "";
        } else {
            if(verificacao.contains('hidden')){
                output = outputopcao2;
            }else{
                outputopcao2.textContent = "";
                output = outputopcao1;
            }
            output.textContent = segundos;
            segundos--;
        }
       
    }, 1000);
    
    }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var iGlobal = 1;
var lucroPorMes = [];
var lucroSoma = 0;
function calcularFinancas() {
    const local = document.getElementById('financas');
    const faturamento = local.querySelector('#faturamento');
    const gastos = local.querySelector('#gastos');
    const output = local.querySelector('#recebimento');

    let lucro = faturamento.value - gastos.value;

    //sei que lucroPorMes é uma variavel desnecessaria porem pode ser possivel ver o valor do melhor e pior mes a partir disso

    //inicia um array dentro de outro
    lucroPorMes[iGlobal] = [];         

    //adiciona ao lucroPorMes um id para localizar o lucro
    lucroPorMes[iGlobal][0] = iGlobal; 

    //adiciona ao lucroPorMes o valor do lucro no id representado pelo iglobal
    lucroPorMes[iGlobal][1] = lucro;  
    
    //somar array

    lucroSoma += lucroPorMes[iGlobal][1];

    output.textContent = "R$" + lucroSoma.toFixed(2); 
    // o segundo numero pode ser apenas 0 ou 1 senao o valor será indefinido

    iGlobal++;

    //possivel upgrade
    // for(iGlobal; iGlobal < 3; iGlobal++ ){
    //     output.textContent += lucroPorMes[iGlobal][1];
    
    // }
   
 }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function ordenarDecrescente() {
    const local = document.getElementById('ordemDecrescente');
    const camposNumeros = local.querySelectorAll('.numeroOrdenavel');
    const output = local.querySelector('#recebimento3');
    const escolha = local.querySelector('#escolherOrdem').value;
    let intervalo = setInterval(
        function(){
            let auxiliar = null;
            for(let j = 0;j < 4;j++){
            for(let i = 0; i < 3;i++){
                //decrescente
                if(escolha == "-"){
                    if(parseInt(camposNumeros[i].value) > parseInt(camposNumeros[i+1].value)){
                    }else{
                        auxiliar = camposNumeros[i].value ;
                        camposNumeros[i].value = camposNumeros[i+1].value ;
                        camposNumeros[i+1].value = auxiliar;
                    }
                }    
                //crescente
                else{
                    if(parseInt(camposNumeros[i].value) < parseInt(camposNumeros[i+1].value)){
                    }else{
                        auxiliar = camposNumeros[i].value ;
                        camposNumeros[i].value = camposNumeros[i+1].value ;
                        camposNumeros[i+1].value = auxiliar;
                    }
                }  
            }
            output.textContent = "("
            for(let i = 0;i < 4;i++){
                output.textContent += "  " + camposNumeros[i].value + "  "
            }
            output.textContent += ")"
            clearInterval(intervalo);
               }
        },500
    )
       

}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function transformarParImpar() {
    const local = document.getElementById('transformarParImpar');
    const valor = local.querySelector('input');
    const opcao = local.querySelector('#escolherOrdem').value;
    const output = local.querySelector('#recebimento4');
    
    let numero = parseInt(valor.value);

    
    //se opcao for verdadeiro numero maior senao numero menor
    if(opcao=="maior"){
        numero = numero+1;
    }
    if(opcao=="menor"){
        numero = numero-1;
    }
    if(numero%2 == 0){
        numero += " é par";
    }else{
        numero += " é impar";
    }
    
    output.textContent = numero;
    //  if (numero % 2 === 0) {
    //     numero++;
    //  }else{
    //     numero--;
    //  }
    //  if (numero % 2 === 0){
    //     rotulo.innerHTML = "<h1>transformar em impar</h1>";
    //  }else{
    //     rotulo.innerHTML = "<h1>transformar em par</h1>";
    //  }
    //     console.log(numero);
    }