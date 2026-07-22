let vetor = []

function adicionar(){
    let numero = window.document.getElementById("numero");
    let n = Number(numero.value);

    let selnum = window.document.getElementById("selnum");
    let addoption = window.document.createElement("option");

    if (n < 1 || n > 100) {
        window.alert('Digite um número válido (entre 1 e 100)')
    } else {
        addoption.text = `Número ${n} adicionado.`
        selnum.appendChild(addoption)
        vetor.push(n)
    }
}

function analisar(){
    
    if (vetor == 0 || vetor == 1){
        window.alert('Digite pelo menos 2 números antes de analisar.')
    } else {
        function soma(){
            return 'função soma'
        }
        
        function media(){
            return 'função media'
        }

        let r = window.document.getElementById('resultado')

        r.innerHTML = `<p>Ao todo, temos ${vetor.length} números cadastrados.</p><p>O maior número informado foi ${Math.max(...vetor)}.</p><p>O menor número informado foi o ${Math.min(...vetor)}.</p><p>A soma de todos os números é de ${soma()}</p><p>A média dos números informados é de ${media()}`
    }

}
