// Escreva uma função que rece 2 numeros e retorne o maior deles

let n1 = 10;
let n2 = 10;

/*
if (n1 > n2) {
    console.log(`O ${n1} é maior que ${n2}.`);
} else if (n2 > n1) {
    console.log(`O ${n2} é maior que ${n1}.`);
} else {
    console.log('Os dois numeros são iguais');
}
*/


function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
// OR

const max2 = (x, y) => x > y ? x : y;

console.log(max2(1, 20));