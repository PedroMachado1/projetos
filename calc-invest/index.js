// Função para calcular os valores de renda fixa e renda variável
function calcularInvestimentos() {
  var investimentoTotal = parseFloat(
    document.getElementById("investimentoTotal").value
  );
  var rendaFixa = parseFloat(document.getElementById("rendaFixa").value);
  var rendaVariavel = parseFloat(
    document.getElementById("rendaVariavel").value
  );

  var rendaFixaAmount = (rendaFixa / 100) * investimentoTotal;
  var rendaVariavelAmount = (rendaVariavel / 100) * investimentoTotal;

  document.getElementById("resultados").innerHTML =
    "Valor em renda fixa: R$ " +
    rendaFixaAmount.toFixed(2) +
    "<br>" +
    "Valor em renda variável: R$ " +
    rendaVariavelAmount.toFixed(2);
}

// Evento de input para o campo de renda fixa
document.getElementById("rendaFixa").addEventListener("input", function () {
  calcularInvestimentos();
});

// Evento de input para o campo de renda variável
document.getElementById("rendaVariavel").addEventListener("input", function () {
  calcularInvestimentos();
});

document
  .getElementById("investimentoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
