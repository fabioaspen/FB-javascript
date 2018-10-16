let diryj,dirxj,jog,velj,pjx,pjy;
let tamtelaw,tamtelah;
let Velt;
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
        atira(pjx+17,pjy);
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
function atira(x,y){
    let t = document.createElement("div");
    let att1 = document.createAttribute("class");
    let att2 = document.createAttribute("style");
    att1.value = "tirojog";
    att2.value = "top:"+y+"px;left:"+x+"px";
    t.setAttributeNode(att1);
    t.setAttributeNode(att2);
    document.body.appendChild(t);
}
function controletiro(){
    let tiros = document.getElementsByClassName("tirojog");
    let tam = tiros.length;
    for(let i = 0;i < tam;i++){
        if(tiros[i]){
            let pt = tiros[i].offsetTop;
            pt-=Velt;
            tiros[i].style.top = pt+"px";
            if(pt < 0){
                //document.body.removeChild(tiros[i]);
                tiros[i].remove(); 
            }
        }
    }
}

function controlajogador(){
    pjy += diryj * velj;
    pjx += dirxj * velj;

    jog.style.top=pjy +"px";
    jog.style.left=pjx +"px";
}

function gameloop(){
    if(jogo){
        //Funçoes de controle
        controlajogador();
        controletiro();
    }
    frames = requestAnimationFrame(gameloop);
}

function inicia(){
    jogo = true;

    //ini tela
    tamtelah = window.innerHeight;
    tamtelaw = window.innerWidth;

    //ini jogador
    dirxj=diryj=0;
    pjx = tamtelaw/2;
    pjy = tamtelah/2;
    velj = Velt =  5;
    jog = document.getElementById("navjog");
    jog.style.top = pjy + "px";
    jog.style.left = pjx + "px";

    gameloop();
}

window.addEventListener("load",inicia);
document.addEventListener("keydown",tecladw);
document.addEventListener("keyup",teclaup);