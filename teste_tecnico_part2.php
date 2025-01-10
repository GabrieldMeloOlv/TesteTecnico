<!-- 3) -->

<?php
// Faturamento por estado
$faturamento = [
    "SP" => 67836.43,
    "RJ" => 36678.66,
    "MG" => 29229.88,
    "ES" => 27165.48,
    "Outros" => 19849.53
];

// Total de faturamento
$totalFaturamento = array_sum($faturamento);

// Calcula e exibe o percentual de cada estado
foreach ($faturamento as $estado => $valor) {
    $percentual = ($valor / $totalFaturamento) * 100;
    echo "$estado: " . number_format($percentual, 2) . "%\n";
}
?>

<!-- 4) -->

<?php
$string = "Exemplo de string";

$invertida = "";

for ($i = strlen($string) - 1; $i >= 0; $i--) {
    $invertida .= $string[$i];
}
echo $invertida;
?>