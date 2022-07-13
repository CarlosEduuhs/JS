function relogio() {
   
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    //formata a hora
    function getHora(segundos) {
        const data = new Date(segundos * 1000);

        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    //iniciar o relogio
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getHora(segundos);
        }, 1000);
    }

    //pega todos os eventos dos clicks
    document.addEventListener('click', function (e) {
        const el = e.target;
        // quando clicar no elemento do botton zerar fazer...
        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
    })

}
relogio();
