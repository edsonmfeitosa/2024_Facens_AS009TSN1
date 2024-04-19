/*
1.	Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes. 
Crie uma função que recebe os comprimentos dos três lados de um triângulo e 
retorne sua classificação quanto ao tamanho de seus lados. 
*/
const triangulo = (a, b, c) =>{
    if(a == b && b == c)
        return 'Equilátero'
    else if (a != b && b != c )
        return 'Escaleno'
    else    
        return 'Isóceles'
}
console.log(triangulo(1, 3, 2))