/*
3.	Faça um programa que recebe o nome de uma variável e mostre o <<primeiro>>.<<último nome>>@facens.br
Por exemplo:
A variável nome possui o conteúdo “Edson Martin Feitosa”.
Deve mostrar edson.feitosa@facens.br

*/
const nome = 'Edson Martin Feitosa'
var separado = nome.split(' ')
var email = separado[0] + separado[separado.length - 1] + '@facens.br'
console.log('E-mail: '+ email.toLocaleLowerCase())