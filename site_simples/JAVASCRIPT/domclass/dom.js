'use strict'

function alterar(){
    var conteudo = document.querySelector("#conteudo");

    if( conteudo.classList.contains("tema-claro")){
        conteudo.classList.remove("tema-claro");
        conteudo.classList.add("tema-escuro");
    }else{
        conteudo.classList.remove("tema-escuro");
        conteudo.classList.add("tema-claro");
    }
}
    
function mensagem(){
    var mensagem = document.querySelector("#msg");
    var conteudobotao = document.querySelector('.botaoInteligente');
    
    if( mensagem.classList.contains("escondida")){
        mensagem.classList.remove("escondida");
        conteudobotao.textContent = "esconder";
    }else{
        mensagem.classList.add("escondida");
        conteudobotao.textContent = "mostrar";
    }
    
    }