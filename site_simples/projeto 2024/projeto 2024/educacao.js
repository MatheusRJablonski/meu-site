function mostrar() {
    const valor = document.getElementById('god').value;
    //const valor = registrar.getElementById('nivelEscolaridade').value; futuro comando
    valorNumero = parseInt(valor)

    const elementosParaEsconder = document.querySelectorAll('.elementoParaEsconder');

    elementosParaEsconder.forEach(elemento => {
        if (valorNumero === 0) {
            elemento.style.display = 'none';
        } else {
            elemento.style.display = 'block';  
        }
    });
}