const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); // Coleta todos as tags p

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

//adiciona as formatações para a tag P do HTML
for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffffff';
    p.style.borderRadius = '20px';
    p.style.padding = '8px';
};