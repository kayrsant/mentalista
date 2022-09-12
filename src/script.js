var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  console.log(numeroSecreto);
  if (chute == numeroSecreto) {
    var elementoNumeroSecreto = document.getElementById("resultado");
    var mensagemNumeroSecreto = `Parabéns! O número ${numeroSecreto} era o número gerado.`;
    elementoNumeroSecreto.innerHTML = mensagemNumeroSecreto;
  } else if (chute > 10 || chute < 0) {
    var elementoNumeroSecreto = document.getElementById("resultado");
    var mensagemNumeroSecreto = `Você deve digitar um número entre 0 e 10.`;
    elementoNumeroSecreto.innerHTML = mensagemNumeroSecreto;
  } else {
    var elementoNumeroSecreto = document.getElementById("resultado");
    var mensagemNumeroSecreto = `Errou! O número ${chute} não é o número gerado.`;
    elementoNumeroSecreto.innerHTML = mensagemNumeroSecreto;
  }
}
