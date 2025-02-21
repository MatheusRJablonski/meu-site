/*

function subtracao(a,b){
    return a - b;
}
let subtracao2 = (a,b) => a - b;

function soma2(a){
    return a + 2;
}
let soma2v2 = (a) => a + 2;

function diaAtual(){
    return new Date().getDay;
}
let diaAtual2 = () =>  new Date().getDay;


function master(a,b){
    let subtracao =  a - b;
    subtracao -= 2;
    let diaMes = new Date().getDate();
    return diaMes; 
}
let master2 = (a,b) => {
    let subtracao = a - b;
    subtracao -= 2;
    let diaMes = new Date().getDate();
    return diaMes;
}
subtracao = a - b; 
subtracao -= 2;

console.log(diaAtual());
console.log(soma2());
console.log(subtracao());
console.log(master2(3,2));*/

var nomes = [
    'Bruna','Cardoso','Estrella','Tiago'
];
 console.log(nomes.map(function(nome){
    return nome.length;
}));
console.log(nomes.map(cadanome => cadanome.length));
