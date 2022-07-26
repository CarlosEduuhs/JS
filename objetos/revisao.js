/*
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Eduardo',
};

const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa[sobrenome]);
console.log(pessoa.nome);
*/

const pessoa1 = new Object();
pessoa1.nome = 'Carlos';
pessoa1.sobrenome = 'Eduardo';
pessoa1.idade = 17;
pessoa1.falarNome = function () {
    console.log(`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

// verifica as chaves
for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}

pessoa1.falarNome();
console.log(pessoa1.getDataNascimento());

// delete pessoa1.nome // remove o nome

// factory functions / construtor functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Carlos', 'Eduardo');
console.log(p1.nomeCompleto);

// constructor
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // trava o objeto
}

// {} <- this
const p2 = new Pessoa('Carlos', 'Eduardo');
console.log(p2);

const p3 = {};
p2.nome = 'Carlos';



