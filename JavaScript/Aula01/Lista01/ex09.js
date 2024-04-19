/*
9.	Escreva uma função que receba uma string como argumento e retorne a string invertida.
*/
function nomeInvertido(nome){
    let nomeInvertido = ''
    for(let i = nome.length - 1; i >= 0; i--){
        //console.log(i)
        nomeInvertido += nome[i]
    }
    return nomeInvertido
}

const nome = 'Edson Martin Feitosa'

console.log('Nome invertido: '+nomeInvertido(nome))