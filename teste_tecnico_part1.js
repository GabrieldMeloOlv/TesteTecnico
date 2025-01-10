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

// Função para calcular os valores solicitados
function calcularFaturamento(dados) {
    let menorFaturamento = Infinity; // Inicializa com um valor alto
    let maiorFaturamento = -Infinity; // Inicializa com um valor baixo
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    // Itera pelos dados de faturamento
    dados.forEach(dia => {
        if (dia.faturamento > 0) { // Ignora dias sem faturamento
            somaFaturamento += dia.faturamento;
            diasComFaturamento++;
            menorFaturamento = Math.min(menorFaturamento, dia.faturamento); // Encontra o menor
            maiorFaturamento = Math.max(maiorFaturamento, dia.faturamento); // Encontra o maior
        }
    });

    // Calcula a média e conta os dias acima da média
    let mediaFaturamento = somaFaturamento / diasComFaturamento;
    let diasAcimaDaMedia = dados.filter(dia => dia.faturamento > mediaFaturamento).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

// Exemplo de dados de faturamento
const faturamento = [
    {"dia": 1, "faturamento": 1000},
    {"dia": 2, "faturamento": 1500},
    {"dia": 3, "faturamento": 0},
    {"dia": 4, "faturamento": 1200},
    {"dia": 5, "faturamento": 1800},
    {"dia": 6, "faturamento": 0},
    {"dia": 7, "faturamento": 2000},
    {"dia": 8, "faturamento": 2100}
];

// Calcula os resultados
const resultado = calcularFaturamento(faturamento);

// Exibe os resultados
console.log("Menor valor de faturamento: R$ ${resultado.menorFaturamento}");
console.log("Maior valor de faturamento: R$ ${resultado.maiorFaturamento}");
console.log("Número de dias com faturamento superior à média mensal: ${resultado.diasAcimaDaMedia}");