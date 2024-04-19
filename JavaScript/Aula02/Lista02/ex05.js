/*
5.	Escreva uma função que recebe um vetor de números inteiros e mostre como resultado qual é o 
menor e qual é o maior número.
*/

maiorMenor = vetor =>{
    let menor = vetor[0]
    let maior = vetor[0]
    vetor.forEach(element => {
        if (element > maior) {
            maior = element
        } 
        if (element < menor) {
            menor = element
        }
    });
    console.log(`O número menor é ${menor} e o número maior é ${maior}`)
}

const v = [15, 2, 3, 4, 5, 5, 6, 7, 7, 9]
maiorMenor(v)