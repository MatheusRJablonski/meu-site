

var numeros = [
    1,2,3,4,5,6
];
var nomes = [
    'Bruna','Cardoso','Estrella','Tiago','Matheus','Pedro', 'Fernanda', 'joão', 'Rafael'
];
//-----------------------------------------------------------------------------------------------

console.log("Numeros guardados: "+ numeros);
console.log("Resultado x2: "+numeros.map(cadanumero => cadanumero*2));

//-----------------------------------------------------------------------------------------------

function tamanho(a,b){
    return a.length - b.length;
}
console.log(nomes.sort(tamanho));

//-------------------------------------------------------------------------------------------------
function par(a){
    if (a % 2 == 0)
    return a;
}
console.log(numeros.map(par))