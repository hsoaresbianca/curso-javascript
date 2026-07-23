// array/vetor
let vetor = [];

// adiciona os números no select como option
function adicionar() {
  let numero = window.document.getElementById("numero");
  let n = Number(numero.value);

  let selnum = window.document.getElementById("selnum");
  let option = window.document.createElement("option");

  if (n < 1 || n > 100) {
    window.alert("Digite um número válido (entre 1 e 100)");
  } else if (vetor.includes(n)) {
    window.alert(
      `O número ${n} já foi adicionado. Adicione um número diferente.`,
    );
  } else {
    option.text = `Número ${n} adicionado.`;
    selnum.appendChild(option);
    vetor.push(n);
  }
}

// soma os números do array
function soma(vetor) {
  let total = 0;
  for (let i = 0; i < vetor.length; i++) {
    total += vetor[i];
  }
  return total;
}

//faz a média dos números do array
function media() {
  let total = 0;
  for (let i = 0; i < vetor.length; i++) {
    total += vetor[i];
  }
  return total / vetor.length;
}

// analisa os números addicionados no array e mostra os resultados na tela
function analisar() {
  if (vetor.length < 2) {
    window.alert("Digite pelo menos 2 números antes de analisar.");
  } else {
    let r = window.document.getElementById("resultado");

    r.innerHTML = `<p>Os números adicionados foram: ${vetor}.</p><p>Ao todo, temos ${vetor.length} números cadastrados.</p><p>O maior número informado foi o ${Math.max(...vetor)}.</p><p>O menor número informado foi o ${Math.min(...vetor)}.</p><p>A soma de todos os números é ${soma(vetor)}.</p><p>A média dos números informados é ${media()}.`;
  }
}
