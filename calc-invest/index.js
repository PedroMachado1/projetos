document
  .getElementById("investimentoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var investimentoTotal = parseFloat(
      document.getElementById("investimentoTotal").value
    );
    var rendaFixaInput = document.getElementById("rendaFixa");
    var rendaFixa = parseFloat(rendaFixaInput.value);
    var rendaVariavel = parseFloat(
      document.getElementById("rendaVariavel").value
    );

    // Calcula a porcentagem em renda fixa
    var rendaFixa = 100 - rendaVariavel;

    // Preenche automaticamente o campo de renda fixa
    rendaFixaInput.value = rendaFixa;

    var rendaFixaAmount = (rendaFixa / 100) * investimentoTotal;
    var rendaVariavelAmount = (rendaVariavel / 100) * investimentoTotal;

    document.getElementById("resultados").innerHTML =
      "Valor em renda fixa: R$ " +
      rendaFixaAmount.toFixed(2) +
      "<br>" +
      "Valor em renda variável: R$ " +
      rendaVariavelAmount.toFixed(2);
  });
