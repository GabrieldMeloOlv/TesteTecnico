// 1)

// Gera a sequência de Fibonacci até o número n
function fibonacciAte(n) {
    const fibSequence = [0, 1]; // Inicia com 0 e 1
    while (fibSequence[fibSequence.length - 1] < n) {
        const nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]; // Próximo número
        fibSequence.push(nextFib); // Adiciona à sequência
    }
    return fibSequence;
}

// Verifica se o número pertence à sequência
function pertenceFibonacci(numero) {
    const fibSequence = fibonacciAte(numero);
    return fibSequence.includes(numero); // Verifica presença
}

// Entrada do usuário
const numeroInformado = parseInt(prompt("Informe um número para verificar se ele pertence à sequência de Fibonacci:"));

// Verifica e exibe o resultado
if (pertenceFibonacci(numeroInformado)) {
    alert("O número ${numeroInformado} pertence à sequência de Fibonacci.");
} else {
    alert("O número ${numeroInformado} não pertence à sequência de Fibonacci.");
}

// 2

function calcularFaturamento(dados) {
    let menor = Infinity, maior = -Infinity, soma = 0, dias = 0;

    dados.forEach(dia => {
        if (dia.valor > 0) {
            soma += dia.valor;
            dias++;
            menor = Math.min(menor, dia.valor);
            maior = Math.max(maior, dia.valor);
        }
    });

    let media = soma / dias;
    let diasAcimaDaMedia = dados.filter(dia => dia.valor > media).length;

    return { menor, maior, diasAcimaDaMedia, media };
}

const faturamento = [
    {"dia": 1, "valor": 22174.1664},
    {"dia": 2, "valor": 24537.6698},
    {"dia": 3, "valor": 26139.6134},
    {"dia": 4, "valor": 0.0},
    {"dia": 5, "valor": 0.0},
    {"dia": 6, "valor": 26742.6612},
    {"dia": 7, "valor": 0.0},
    {"dia": 8, "valor": 42889.2258},
    {"dia": 9, "valor": 46251.174},
    {"dia": 10, "valor": 11191.4722},
    {"dia": 11, "valor": 0.0},
    {"dia": 12, "valor": 0.0},
    {"dia": 13, "valor": 3847.4823},
    {"dia": 14, "valor": 373.7838},
    {"dia": 15, "valor": 2659.7563},
    {"dia": 16, "valor": 48924.2448},
    {"dia": 17, "valor": 18419.2614},
    {"dia": 18, "valor": 0.0},
    {"dia": 19, "valor": 0.0},
    {"dia": 20, "valor": 35240.1826},
    {"dia": 21, "valor": 43829.1667},
    {"dia": 22, "valor": 18235.6852},
    {"dia": 23, "valor": 4355.0662},
    {"dia": 24, "valor": 13327.1025},
    {"dia": 25, "valor": 0.0},
    {"dia": 26, "valor": 0.0},
    {"dia": 27, "valor": 25681.8318},
    {"dia": 28, "valor": 1718.1221},
    {"dia": 29, "valor": 13220.495},
    {"dia": 30, "valor": 8414.61}
];

const resultado = calcularFaturamento(faturamento);

console.log(`Menor valor de faturamento: R$ ${resultado.menor}`);
console.log(`Maior valor de faturamento: R$ ${resultado.maior}`);
console.log(`Dias acima da média: ${resultado.diasAcimaDaMedia}`);
console.log(`Média mensal: R$ ${resultado.media.toFixed(2)}`);
