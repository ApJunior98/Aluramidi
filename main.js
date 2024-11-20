/* Forma de tocar o som tecla por tecla, deixando o código grande e de difícil manutenção
function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap (){
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;

*/

/* Fórmula completa a partir do while
function tocaSom (seletorAudio){

    document.querySelector(seletorAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');
const tamanhoListaTeclas = listaDeTeclas.length;
const listaDeSons = document.querySelectorAll('audio');

let contador = 0;

while (contador < tamanhoListaTeclas){

    let idElementoAudio = '#' + listaDeSons[contador].id;

    listaDeTeclas[contador].onclick = function (){ 
        tocaSom (idElementoAudio);
    }

    contador = contador + 1
}
*/

function tocaSom (seletorAudio){

    const elemento = document.querySelector(seletorAudio);

    if (elemento === null){
        console.log('Esse elemento não foi encontrado');
    }else{
        if(elemento.localName != 'audio'){
            console.log('Elemento passado não é um audio');
        }else{
            elemento.play();
        }
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');
const tamanhoListaTeclas = listaDeTeclas.length;
const listaDeSons = document.querySelectorAll('audio');

for (contador = 0; contador < tamanhoListaTeclas; contador++){

    const tecla = listaDeTeclas[contador]
    const idElementoAudio = '#' + listaDeSons[contador].id;

    tecla.onclick = function (){ 

        tocaSom (idElementoAudio);
    }

    tecla.onkeydown = function (evento){
        if (evento.code === 'Enter' || evento.code === 'Space' || evento.code === 'NumpadEnter'){
            tecla.classList.add('ativa');   
        }          
    }
    
    tecla.onkeyup = function (evento){
        if (evento.code === 'Enter' || evento.code === 'Space' || evento.code === 'NumpadEnter'){
            tecla.classList.remove('ativa');
        }
    }
}

