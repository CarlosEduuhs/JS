// array com elementos
const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div'); //cria o elemento da div

// for para percorrer o array e inserir na pagina
for (let i = 0; i < elementos.length; i++) {
    let {tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);

    
}
// insere dentro de uma div
container.appendChild(div);