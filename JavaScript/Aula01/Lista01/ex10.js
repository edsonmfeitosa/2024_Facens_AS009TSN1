/*
10.	Escreva uma função que recebe uma string como argumento e retorna o número de vogais 
presentes nessa string. Considere apenas vogais minúsculas (a, e, i, o, u).
*/
var quantidadeVogais = texto => {
    let qtde = 0;
    texto = texto.toLowerCase()
    for(let i = 0; i < texto.length; i++){
        if(texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i'
            || texto[i] == 'o' || texto[i] == 'u'){
                qtde++
        }
    }
    return qtde;
}
let texto = 'Edson Martin Feitosa'

console.log(`A quantidade de vogais para o texto ${texto} é ${quantidadeVogais(texto)}.`)