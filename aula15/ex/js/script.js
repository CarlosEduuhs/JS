const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const txt = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

txt.innerHTML += `<p> Raiz quadrada: ${numero ** 0.5}. </p>`;
txt.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)} </p>`;
txt.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}. </p>`;
txt.innerHTML += `<p> Arredondado para baixo: ${Math.floor(numero)}. </p>`;
txt.innerHTML += `<p> Arredondado para cima: ${Math.ceil(numero)}. </p>`;
txt.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}. </p>`;
