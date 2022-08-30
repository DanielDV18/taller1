let opciones=document.getElementById("opciones");
let resp=document.getElementById("respuesta");

opciones.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.id=="opc1"){
        resp.innerHTML=`Intentalo de nuevo`;
        resp.classList.add("incorrecto");
        resp.classList.remove("correcto");
    }

    if(e.target.id=="opc2"){
        resp.innerHTML=`Intentalo de nuevo`;
        resp.classList.add("incorrecto");
        resp.classList.remove("correcto");
    }

    if(e.target.id=="opc3"){
        resp.innerHTML=`Excelente`;
        resp.classList.add("correcto");
        resp.classList.remove("incorrecto");
    }

    if(e.target.id=="opc4"){
        resp.innerHTML=`Intentalo de nuevo`;
        resp.classList.add("incorrecto");
        resp.classList.remove("correcto");
    }
})