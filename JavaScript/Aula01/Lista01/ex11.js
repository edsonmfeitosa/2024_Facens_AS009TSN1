/*
11.	Escreva uma função que recebe um endereço de e-mail como argumento e retorna true 
se o e-mail for válido ou false caso contrário. Um e-mail válido deve conter um único símbolo 
'@' e pelo menos um ponto '.' após o '@'.
*/
function validarEmail(email) {
    const indiceArroba = email.indexOf('@');
    const indicePonto = email.lastIndexOf('.');

    console.log(indiceArroba, indicePonto)
  
    // Verifica se existe exatamente um '@' e se há pelo menos um ponto após o '@'
    return indiceArroba !== -1 && indicePonto !== -1 && indicePonto > indiceArroba;
  }
  
  // Exemplos de testes:
  console.log(validarEmail("usuario@dominio.com")); // true
  console.log(validarEmail("email_invalido"));       // false
  console.log(validarEmail("outra@exemplo."));       // false