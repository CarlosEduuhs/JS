const nome = 'Carlos';
const sobrenome = 'Eduardo';
const idade = 17;
const peso = 60;
const altura = 1.65;
let imc;
let Anonasc;

imc = peso / (altura * altura);
Anonasc = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, possui ${altura} de altura e seu IMC é ${imc}`);