let opcao = "";
let nome = prompt("Digite seu nome para continuar:");

function exibirMenu() {
  opcao = prompt(
    nome +
      " bem-vindo(a) ao conversor de moedas\n" +
      "Escolha uma opçao de conversão." +
      "\n1. Converter para dólar ($)" +
      "\n2. Converter para euro (€)" +
      "\n3. Converter para yen (¥)" +
      "\n4. Converter para bitcoin (₿)" +
      "\n5. Converter Anos-Luz para metro (AL)" +
      "\n6. Sair"
  );
}

function converterDolar() {
  let valorBRL = parseFloat(
    prompt(
      "Conversor de Dólar para Real\n\n" +
        "Informe o valor em Real(R$) que você quer converter:"
    )
  );
  let cotacaoDolar = 5.1; /* Cotação do dia: 30/01/2023 */

  let conversao = valorBRL / cotacaoDolar;

  alert(
    "Valor a converter: R$" +
      valorBRL +
      "\n" +
      "Cotação do dia: $ 1 = R$" +
      cotacaoDolar +
      "\n\n" +
      nome +
      " o resultado da converção é: $" +
      conversao
  );
}

function converterEuro() {
  let valorBRL = parseFloat(
    prompt(
      "Conversor de Euro para Real\n\n" +
        "Informe o valor em Real(R$) que você quer converter:"
    )
  );
  let cotacaoEuro = 5.5; /* Cotação do dia: 30/01/2023 */

  let conversao = valorBRL / cotacaoEuro;

  alert(
    "Valor a converter: R$" +
      valorBRL +
      "\n" +
      "Cotação do dia: € 1 = R$" +
      cotacaoEuro +
      "\n\n" +
      nome +
      " o resultado da converção é: €" +
      conversao
  );
}

function converterYen() {
  let valorBRL = parseFloat(
    prompt(
      "Conversor de Yen para Real\n\n" +
        "Informe o valor em Real(R$) que você quer converter:"
    )
  );
  let cotacaoYen = 0.039; /* Cotação do dia: 30/01/2023 */

  let conversao = valorBRL / cotacaoYen;

  alert(
    "Valor a converter: R$" +
      valorBRL +
      "\n" +
      "Cotação do dia: ¥ 1 = R$" +
      cotacaoYen +
      "\n\n" +
      nome +
      " o resultado da converção é: ¥" +
      conversao
  );
}

function converterBitcoin() {
  let valorBRL = parseFloat(
    prompt(
      "Conversor de Bitcoin para Real\n\n" +
        "Informe o valor em Real(R$) que você quer converter:"
    )
  );
  let cotacaoBitcoin = 118688; /* Cotação do dia: 30/01/2023 */

  let conversao = valorBRL / cotacaoBitcoin;

  alert(
    "Valor a converter: R$" +
      valorBRL +
      "\n" +
      "Cotação do dia: ₿ 1 = R$" +
      cotacaoBitcoin +
      "\n\n" +
      nome +
      " o resultado da converção é: ₿" +
      conversao
  );
}

function converterAnoLuz() {
  let anosLuz = parseFloat(
    prompt(
      "Conversor de Anos-Luz para metros\n\n" +
        "Informe o valor em Anos-Luz(AL) que você quer converter:"
    )
  );

  let metrosParaAnosLuz = 0.0000000000000001057;

  let conversao = anosLuz / metrosParaAnosLuz;

  alert(
    "Valor a converter: Anos-Luz " +
      anosLuz +
      "\n" +
      "Fórmula: 9,461e+15 / Ano-Luz" +
      "\n\n" +
      nome +
      " o resultado da converção é: Metros = " +
      conversao
  );
}

function executar() {
  do {
    exibirMenu();

    switch (opcao) {
      case "1":
        converterDolar();
        break;

      case "2":
        converterEuro();
        break;

      case "3":
        converterYen();
        break;

      case "4":
        converterBitcoin();
        break;

      case "5":
        converterAnoLuz();
        break;

      case "6":
        alert("Saindo...");
        break;

      default:
        alert("Opção inválida!");
    }
  } while (opcao !== "6");
}

executar();
