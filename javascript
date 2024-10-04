function mostrarTabuada() {
    const numero = document.getElementById('numero').value;
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }
    document.getElementById('tabuada').innerHTML = resultado;
}

function contagemRegressiva() {
    let contagem = document.getElementById('contagem').value;
    const resultadoDiv = document.getElementById('resultadoContagem');
    resultadoDiv.innerHTML = '';

    const interval = setInterval(() => {
        if (contagem >= 0) {
            resultadoDiv.innerHTML += `${contagem}<br>`;
            contagem--;
        } else {
            clearInterval(interval);
            resultadoDiv.innerHTML += 'Fim da contagem!';
        }
    }, 1000);
}

function adivinhar() {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    const tentativa = document.getElementById('adivinha').value;
    const resultadoDiv = document.getElementById('resultadoAdivinha');

    if (tentativa == numeroAleatorio) {
        resultadoDiv.innerHTML = 'Parabéns! Você acertou!';
    } else {
        resultadoDiv.innerHTML = `Você errou! O número era ${numeroAleatorio}.`;
    }
}

