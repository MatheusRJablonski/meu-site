function abrirPerguntas(a){
    const elementos = document.getElementsByClassName('resposta');
    let elemento = [];
    for (let i = 0; i < elementos.length; i++) {
        elemento[i+1] = elementos[i];
    }
    if (elemento[a].style.display === 'block') {
        elemento[a].style.display = 'none';
    } else {
        elemento[a].style.display = 'block';
    }
    mudarIcone()
    function mudarIcone(){
        const icone = document.getElementById('p'+a);

        if(elemento[a].style.display === 'block'){
            icone.querySelector('.barraVertical').style.display='none';
        }else{
            icone.querySelector('.barraVertical').style.display='block';
        }
    }  
      
}

