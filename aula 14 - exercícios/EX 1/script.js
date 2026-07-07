function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')
    
    if (inicio.value.length <= 0 || fim.value.length <= 0 || passo.value.length <= 0) {
        resultado.innerHTML = `[ERRO!] Faltam dados. Impossível contar.`
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0){
            window.alert('Passo inválido! Vamos considerar o Passo = 1')
            p = 1
        }

        if (i < f) {
            // CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p){
            resultado.innerHTML += `${c} \u{27A1} `
            }
        } else {
            // CONTAGEM DESCRESCENTE
            for(let c = i; c >= f; c-=p) {
            resultado.innerHTML += `${c} \u{27A1} `
            }
        }
        resultado.innerHTML += `FIM! \u{1F3C1} `

    }
}