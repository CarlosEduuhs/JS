// defineProperty - Getter e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // valor pode ser alterado ou não
        configurable: false //configuravel
    });
}


// p1.estoque = 5000;
// delete p1.estoque;

// console.log(Object.keys(p1));

// for(let chave in p1) {
//  console.log(chave);
// }

const p1 = new Produto('Camisa', 20, 3);
console.log(p1);