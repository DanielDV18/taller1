/*Acceder al botón para abrir el modal */

let btnmodal=document.getElementById("abrirModal");

//Acceder ventana modal
let venmodal=document.getElementById("ventanaModal");

//Acceder al botón Cerrar de la ventana modal
let cermodal=document.querySelector(".cerrarModal");

btnmodal.addEventListener("click",()=>{
    venmodal.style.display="block";
})

cermodal.addEventListener("click",()=>{
    venmodal.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodal){
    venmodal.style.display="none"; 
}
})
function calcular(){
    let la1=parseInt(document.getElementById("la1").value);
    let la2=parseInt(document.getElementById("la2").value);
    let la3=parseInt(document.getElementById("la3").value);

    let res=parseInt(la1+la2+la3);

    alert("El perimetro del triangulo seria " +res);


/* ------------------------------------------------------------------------------------------------------------*/


/*Acceder al botón para abrir el modal */

let btnnmodal=document.getElementById("abrirModalArea");

//Acceder ventana modal
let vennmodal=document.getElementById("ventanaModalArea");

//Acceder al botón Cerrar de la ventana modal
let cerrrmodal=document.querySelector(".cerrarModalArea");

btnnmodal.addEventListener("click",()=>{
    vennmodal.style.display="block";
})

cerrrmodal.addEventListener("click",()=>{
    vennmodal.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==vennmodal){
    vennmodal.style.display="none"; 
}
})
}

function calcularA(){
    let altura=parseInt(document.getElementById("altura").value);
    let base=parseInt(document.getElementById("base").value);
   let resArea;
   resArea = (base * altura) / 2;
   alert("El area del triangulo es "+resArea); 
}