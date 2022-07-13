function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000) // o 1000 representa o tempo do intervalo

setTimeout(function(){
    clearInterval(timer);
}, 10000); //para o timer depois de 10s

setTimeout(function(){
    console.log('deu 5 segundos');
}, 5000); // exibe a mensagem dizendo que se passou 5 segundos