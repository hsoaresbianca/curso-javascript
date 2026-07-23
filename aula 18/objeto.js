let pessoa = {nome:'Bianca', sexo:'F', idade:27, envelhecer(i=0){
    this.idade += i
}}

pessoa.envelhecer(10)
console.log(pessoa.idade)
