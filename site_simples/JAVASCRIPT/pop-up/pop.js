function AparecerContainer() {
    var conteudo = document.querySelector(".container");

    conteudo.style.display  = 'block';  
    }

function Desaparecer(){
    
    conteudo.style.display  = 'none';
    
} 


    const fundoPopup = document.querySelector('.container');
    var conteudo = document.querySelector(".container");

    fundoPopup.addEventListener('click', event =>{
        const elementoClicado = event.target.classList[0];
        console.log(elementoClicado);
        const classeParaFechar= ['botaoX', 'container' , 'popup-link'];
        const fecharPopup = classeParaFechar.some(classe => classe === elementoClicado);
        console.log(fecharPopup);
        if(fecharPopup){ 
            fundoPopup.style.display = 'none';
        }
        
    })

    