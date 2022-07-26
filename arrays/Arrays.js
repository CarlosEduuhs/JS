// Valor por referência
//                 0         1        2        3          4
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
// const novo = nomes.slice(1, -2);
// console.log(novo);

// const nome = 'Carlos Eduardo Sobral';
// const nomes = nome.split(' ');
// const nomes = [ 'Carlos', 'Eduardo', 'Sobral' ];
// const nome = nomes.join(' '); //unir todos os valores do array
// console.log(nome);

// SPLICE

//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Unshift
nomes.splice(2, 0, 'Carlos', 'Eduardo');
console.log(nomes);

// nomes.splice(índice atual, delete, elem1, elem2, elem3);
// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1);


// concatenação de arrays

const a1 = [1,2,3];
const a2 = [4,5,6];
// const a3 = a1.concat(a2, [7,8,9]);
// ... rest -> ... spread
const a3 = [...a1, ...a2, ...[7,8,9]];
console.log(a3);