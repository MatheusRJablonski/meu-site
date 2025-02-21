'use strict'

function alterar(){
    var conteudo = document.querySelector("#conteudo")

    if( conteudo.classList.contains("tema-claro")){
        conteudo.classList.remove("tema-claro");
        conteudo.classList.add("tema-escuro");
        console.log("conteudo");
    }else{
        conteudo.classList.remove("tema-escuro");
        conteudo.classList.add("tema-claro");
    }
}
    
function mensagem(){
    var mensagem = document.querySelector("#msg")
    if( mensagem.classList.contains("escondida")){
        mensagem.classList.remove("escondida");
    }else{
        mensagem.classList.add("escondida");
    }
    
    }