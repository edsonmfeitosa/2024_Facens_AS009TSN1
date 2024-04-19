/*
6.	Faça uma função que mostre o dobro do número passado. 
Caso o número seja menor ou igual a zero deve mostrar a mensagem 
    “Só é aceito números positivos maiores que zero”.
*/
var dobro = x => {
    if(x < 0)
        return 'Só é aceito números positivos maiores que zero'
    else    
        return x * x
}
console.log(dobro(4))