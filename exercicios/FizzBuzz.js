// escreva uma função que recebe um numero
// retorne o seguinte:
// numero divisivel por 3 = fizz
// numero divisivel por 5 = buzz
// numero divisivel por 3 e 5 = fizzBuzz
// numero Não é divisivel por 3 e 5 = retorna o proprio numero
// checar se o numero é realmente um numero = retorna o proprio numero
// use a função com numeros de 0 a 100
// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 ou 5 = FizzBuzz
// Número NÃO é divisível por 3 ou 5 = Número
// *Checar se o número é realmente um número
// Use a função com números de 0 a 100

function fizzBuzz(n) {
    if (typeof n !== 'number') return NaN;
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return '3 Fizz';
    if (n % 5 === 0) return '5 Buzz';
    return n;
  }
  
  for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
  }