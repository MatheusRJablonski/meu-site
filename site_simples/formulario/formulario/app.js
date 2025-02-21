'use strict'


const switcher = document.querySelector('.btn');

switcher.addEventListener('click',function(){
    document.body.classList.toggle('tema-escuro')

    var className = document.body.className;
    if(className == "tema-claro"){
        this.textContent = "escuro";
    }else{
        this.textContent = "claro";
    }
    }
    
);