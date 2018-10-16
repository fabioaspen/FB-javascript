let diryj,dirxj,jog,velj,pjx,pjy;
let tamtelaw,tamtelah;
let jogo;
let frames;

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

function controlajogador(){

}

function gameloop(){
    if(jogo){
        //Funçoes de controle
    }
    frames = requestAnimationFrame(gameloop);
}

function inicia(){
    jogo = false;

    //ini tela
    tamtelah = window.innerHeight;
    tamtelaw = window.innerWidth;

    //ini jogador
    dirxj=diryj=0;
    pjx = tamtelaw/2;
    pjy = tamtelah/2;
    velj = 5;
    jog = document.getElementById("navejog");
    jog.style.top=pjy +"px";
    jog.style.left=pjx +"px";
}

window.addEventListener("load",inicia);
document.addEventListener("keydown",tecladw);
document.addEventListener("keydown",teclaup);