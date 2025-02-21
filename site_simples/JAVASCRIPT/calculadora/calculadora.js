function operacao() {
    const operador = document.getElementById('operador').value;
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    var mensagem = document.getElementById('result');  

    
    
    switch (operador) {
        case "-":
            mensagem = num1 - num2;
            break;
        case '+':
            mensagem =  parseFloat(num1) + parseFloat(num2);
            break;
        case '*':
            mensagem = num1 * num2;
            break;
        case '/':
            if(num2==0){
                mensagem = "não ha divisão por 0";
                }else{
                    mensagem = num1 / num2;
                }
            
            break;
    }
    document.getElementById('result').innerHTML = mensagem;

}

