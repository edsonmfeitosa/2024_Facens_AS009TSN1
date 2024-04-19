/*
4.	Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e 
retorne true ou false.
*/

divisivel3 = numero => {
    if (numero % 3 == 0) {
        return true
    }
    else{
        return false
    }
}
console.log(divisivel3(4))