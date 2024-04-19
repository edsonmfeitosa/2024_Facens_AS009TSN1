/*
3.	Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a 
segunda retornará o valor da aplicação sob o regime de juros compostos.
*/
const jurosSimples = (C, i, t) => C * i * t

//M = C . (1 + i)^n 
const jurosCompostos = (C, i, n) => C * Math.pow((1 + i), n)

