/*
const conta = (...args) => {
    console.log(args);
};
conta('+', 1, 20, 30, 40, 50);
*/
function conta(op, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (op === '+') acumulador += numero;
        if (op === '-') acumulador -= numero;
        if (op === '*') acumulador *= numero;
        if (op === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);