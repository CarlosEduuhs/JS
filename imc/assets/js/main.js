//captura evento de submit do formulário
const form = document.querySelector('#formulario');

//captura o submit 
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    //converter os input
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura invalida', false);
        return;
    }
    //chama a function que calcula o imc
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

//array do nivel de imc
function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obsidade grau 1', 'Obsidade grau 2', 'Obsidade grau 3'];
//baseado no imc retorna conforme o valor
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

//function que calcula o imc
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
//function que cria um paragrafo
function criaP () {
    const p = document.createElement('p');
    return p;
}
//function que seta o resultado
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-result');
    } else{
        p.classList.add('erro');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}