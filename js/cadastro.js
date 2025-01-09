function verificarDados(){
    const escolaridade = document.getElementById('nivelEscolaridade').value;
    const estado = document.getElementById('estadoEndereco').value;
    const pais = document.getElementById('paisEndereco').value;
    switch(escolaridade){
        case "invalido": 
        console.log("escolaridade invalido");
        break;
        case "fundamental1":
        console.log("valido");
        break;
        case "fundamental2": 
        console.log("valido");
        break;
        case "ensinomedio": 
        console.log("valido");
        break;
    }

    switch(estado){
        case "##": 
        console.log("estado invalido");
        break;
        case "00":
            if (pais !== "Brasil") {
                console.log("estrangeiro");
            }
        break;
        default:
            console.log("estado valido")
            break;
    }
}

