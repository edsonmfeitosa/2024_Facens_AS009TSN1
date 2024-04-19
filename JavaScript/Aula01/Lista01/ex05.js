/*
5.	Escreva um programa que imprima os números de 1 a 10 no console usando um loop. 
Os número devem ser separados com um traço, ex.: 1 – 2 – 3 - ... – 10. 
Observação: após o número 10 não pode ter um traço.
*/
cont = 1
let resultado = '' 
while(cont <= 10){
    if(cont < 10)
        resultado += cont + ' - '
    else
        resultado += cont
    cont++
}
console.log(resultado)