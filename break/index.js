const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o numero 2');
        continue;
    }

    if (numero === 7) {
        console.log('Para o for agora');
        break;
    }

    console.log(numero);
}