function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 18) {
                //criança
                img.setAttribute('src', './Imagens/menino.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './Imagens/homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', './Imagens/senhor.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 18) {
                //criança
                img.setAttribute('src', './Imagens/menina.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './Imagens/mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', './Imagens/senhora.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        img.style.height = '250px'
        img.style.width = '250px'
        img.style.borderRadius = '50%'
        img.style.marginTop = '15px'
        res.appendChild(img)
    }
}