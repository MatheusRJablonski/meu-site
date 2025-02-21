function MenuLateral(){
    const menu = document.getElementById('side-menu');
    if(menu.classList.contains('desativado')){
        menu.classList.remove('desativado');
        menu.classList.add('ativado')
    } else {
        menu.classList.remove('ativado');
        menu.classList.add('desativado');
    }
    }
    function abrirBarraPesquisa(){
        const click = document.getElementById('lupaClick');
        console.log(click);
        if (click) {
            click.addEventListener('click', function() {
                const input = document.getElementById('pesquisaInput');
                input.focus(); 
            });
        }
    }