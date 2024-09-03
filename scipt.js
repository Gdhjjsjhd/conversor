function converter() {
    var valor = parseFloat(document.getElementById('valor').value);
    var deUnidade = document.getElementById('deUnidade').value;
    var paraUnidade = document.getElementById('paraUnidade').value;
    var resultado = document.getElementById('resultado');

    var fatorConversao = 1;

    if (deUnidade === "cm" && paraUnidade === "m") {
        fatorConversao = 0.01;
    } else if (deUnidade === "cm" && paraUnidade === "km") {
        fatorConversao = 0.00001;
    } else if (deUnidade === "m" && paraUnidade === "cm") {
        fatorConversao = 100;
    } else if (deUnidade === "m" && paraUnidade === "km") {
        fatorConversao = 0.001;
    } else if (deUnidade === "km" && paraUnidade === "cm") {
        fatorConversao = 100000;
    } else if (deUnidade === "km" && paraUnidade === "m") {
        fatorConversao = 1000;
    } else {
        resultado.innerHTML = "Conversão não suportada.";
        return;
    }

    var valorConvertido = valor * fatorConversao;
    resultado.innerHTML = valor + " " + deUnidade + " é igual a " + valorConvertido + " " + paraUnidade;
}

function converterPeso() {
    var valor = parseFloat(document.getElementById('valor').value);
    var dePeso = document.getElementById('dePeso').value;
    var paraPeso = document.getElementById('paraPeso').value;
    var resultado = document.getElementById('resultado');

    var valorConvertido;

    if (dePeso === "g" && paraPeso === "kg") {
        valorConvertido = valor / 1000;
    } else if (dePeso === "g" && paraPeso === "lb") {
        valorConvertido = valor / 453.592;
    } else if (dePeso === "kg" && paraPeso === "g") {
        valorConvertido = valor * 1000;
    } else if (dePeso === "kg" && paraPeso === "lb") {
        valorConvertido = valor * 2.205;
    } else if (dePeso === "lb" && paraPeso === "g") {
        valorConvertido = valor * 453.592;
    } else if (dePeso === "lb" && paraPeso === "kg") {
        valorConvertido = valor / 2.205;
    } else {
        resultado.innerHTML = "Conversão não suportada.";
        return;
    }

    resultado.innerHTML = valor + " " + dePeso + " é igual a " + valorConvertido + " " + paraPeso;
}

function converterTempo() {
    var valor = parseFloat(document.getElementById('valor').value);
    var deTempo = document.getElementById('deTempo').value;
    var paraTempo = document.getElementById('paraTempo').value;
    var resultado = document.getElementById('resultado');

    var valorConvertido;

    if (deTempo === "seg" && paraTempo === "min") {
        valorConvertido = valor / 60;
    } else if (deTempo === "seg" && paraTempo === "hr") {
        valorConvertido = valor / 3600;
    } else if (deTempo === "min" && paraTempo === "seg") {
        valorConvertido = valor * 60;
    } else if (deTempo === "min" && paraTempo === "hr") {
        valorConvertido = valor / 60;
    } else if (deTempo === "hr" && paraTempo === "seg") {
        valorConvertido = valor * 3600;
    } else if (deTempo === "hr" && paraTempo === "min") {
        valorConvertido = valor * 60;
    } else {
        resultado.innerHTML = "Conversão não suportada.";
        return;
    }

    resultado.innerHTML = valor + " " + deTempo + " é igual a " + valorConvertido + " " + paraTempo;
}