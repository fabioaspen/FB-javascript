window.addEventListener("load",inicia);

let dv1;

function inicia(){
    dv1 = document.getElementById("dv1");
    dv1.addEventListener("mouseover",troca);
    dv1.addEventListener("mouseout",troca2);
}
function troca(){
    let obj = event.target;
    obj.style.backgroundImage="URL('c2.jpg')";
}
function troca2(){
    let obj = event.target;
    obj.style.backgroundImage="URL('c1.jpg')";
}