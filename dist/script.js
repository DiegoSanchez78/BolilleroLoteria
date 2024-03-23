let numerosRestantes = Array.from({ length: 100 }, (_, index) => index);
let numerosSorteados = [];
let primerClic = true;

function generarNumero() {
    if (numerosRestantes.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * numerosRestantes.length);
        const numeroActual = numerosRestantes.splice(indiceAleatorio, 1)[0];
        numerosSorteados.push(numeroActual);
        actualizarDisplay();
    } else {
        document.getElementById('numberDisplay').innerText = 'Todos los números han sido generados';
        document.getElementById('generarNumero').disabled = true;
    }
}

function actualizarDisplay() {
    const numberDisplay = document.getElementById('numberDisplay');
    const numerosSorteadosPanel = document.getElementById('numerosSorteadosPanel');
    const numerosOrdenadosPanel = document.getElementById('numerosOrdenadosPanel');

    if (primerClic) {
        document.getElementById('mostrarNumerosSorteados').style.display = 'inline-block';
        document.getElementById('mostrarNumerosOrdenados').style.display = 'inline-block';
        primerClic = false;
    }

    numberDisplay.innerHTML = `Número Generado: <span class="circle">${numerosSorteados[numerosSorteados.length - 1]}</span>`;
    
    const numerosSorteadosFormateados = numerosSorteados.map(numero => `<span class="circle">${numero}</span>`).join('');
    numerosSorteadosPanel.innerHTML = `Números Sorteados: ${numerosSorteadosFormateados}`;

    const numerosOrdenados = [...numerosSorteados].sort((a, b) => a - b);
    const numerosOrdenadosFormateados = numerosOrdenados.map(numero => `<span class="circle">${numero}</span>`).join('');
    numerosOrdenadosPanel.innerHTML = `Números Ordenados: ${numerosOrdenadosFormateados}`;
}

function toggleNumerosSorteados() {
    const numerosSorteadosPanel = document.getElementById('numerosSorteadosPanel');
    numerosSorteadosPanel.classList.toggle('hidden');
}

function toggleNumerosOrdenados() {
    const numerosOrdenadosPanel = document.getElementById('numerosOrdenadosPanel');
    numerosOrdenadosPanel.classList.toggle('hidden');
}