let diryj,dirxj;

function tecladw(){
    let tecla = event.keyCode;
    if(tecla == 38){//Cima
        diryj = -1;
    }else if(tecla == 40){//Baixo
        diryj = 1;
    }
    if(tecla == 37){//Esquerda
        dirxj = -1;
    }else if(tecla == 39){//Direita
        dirxj = 1;
    }
    if(tecla == 32){//Espaço /tiro

    }
}
function teclaup(){
    let tecla = event.keyCode;
    if((tecla == 38) || (tecla == 40)){//Cima / Baixo
        diryj = 0;
    }if((tecla == 37) || (tecla == 39)){//Esquerda / Direita
        dirxj = 0;
    }
}

function gameloop(){

}

function inicia(){

}

window.addEventListener("load",inicia);
document.addEventListener("keydown",tecladw);
document.addEventListener("keydown",teclaup);