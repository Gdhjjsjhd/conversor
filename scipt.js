function converter(){
    var valor = parseFloat(document.getElementById('valor').value)
    var deUnidade = parseFloat(document.getElementById('deUnidade').value)
    var paraUnidade = parseFloat(document.getElementById('paraUnidade').value)
    var resultado = parseFloat(document.getElementById('resultado').value)

    var fatorConversao = 1;

    if(deUnidade === "cm" && paraUnidade === "m"){
        fatorConversao = 0.01;
    } else if(deUnidade === "cm" && paraUnidade === "km"){
        fatorConversao = 0.00001;
    } else if(deUnidade === "m" && paraUnidade === "cm"){
        fatorConversao = 100;
    } else if(deUnidade === "m" && paraUnidade === "km"){
        fatorConversao = 0.001;
    } else if(deUnidade === "km" && paraUnidade === "cm"){
        fatorConversao = 100000;
    } else if(deUnidade === "km" && paraUnidade === "m"){
        fatorConversao = 1000;
    }


    var valorConvresor = valor * fatorConversao;

    resultado.innerHtml = valor + " "  + deUnidade + "é igual a" + valorConvresor + " " + paraUnidade;
}


function converterPeso(){
    var valor = parseFloat(document.getElementById('valor').value)
    var deUnidade = parseFloat(document.getElementById('dePeso').value)
    var paraUnidade = parseFloat(document.getElementById('paraPeso').value)
    var resultado = parseFloat(document.getElementById('resultado').value)

    var valorConvertido;

    if(deUnidade === "g" && paraUnidade === "kg"){
        valorConvertido = valor / 1000;
    } else if(deUnidade === "g" && paraUnidade === "lb"){
        valorConvertido = valor / 453.592;
    } else if(deUnidade === "kg" && paraUnidade === "g"){
        valorConvertido = valor * 1000
    } else if(deUnidade === "kg" && paraUnidade === "lb"){
        valorConvertido = valor * 2.205;
    } else if(deUnidade === "lb" && paraUnidade === "g"){
        valorConvertido = valor * 453.592;
    } else if(deUnidade === "lb" && paraUnidade === "kg"){
        valorConvertido = valor / 2.205;
    }


    var valorConvresor = valor * fatorConversao;

    resultado.innerHtml = valor + " "  + deUnidade + "é igual a" + valorConvresor + " " + paraUnidade;
}