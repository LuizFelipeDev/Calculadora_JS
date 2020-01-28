function calcular(op)
{
    var valor1 = parseFloat(document.getElementById('v1').value);
    var valor2 = parseFloat(document.getElementById('v2').value);
    
    
    var resultado;
    

    if(op == "+"){resultado = valor1 + valor2}
    else if(op == "-"){resultado = valor1 - valor2}
    else if(op == "*"){resultado = valor1 * valor2}
    else if(op == "/"){resultado = valor1 / valor2}

    document.getElementById("resultado").value=resultado;
}
