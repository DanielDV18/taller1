/* Perimetro Triangulo */

let btnmodal=document.getElementById("peritri");

let venmodal=document.getElementById("ventanatri");

let cermodal=document.querySelector(".cerrarmodaltri");

btnmodal.addEventListener("click",()=>{
    venmodal.style.display="block";
})

cermodal.addEventListener("click",()=>{
    venmodal.style.display="none"; 
})

function calcular(){
    let la1=parseInt(document.getElementById("pritri").value);
    let la2=parseInt(document.getElementById("segtri").value);
    let la3=parseInt(document.getElementById("tertri").value);

    let pt=parseInt(la1+la2+la3);
    alert("El perimetro del triangulo es: "+pt)
}

/* area Triangulo */

let btnmodalar=document.getElementById("aretri");

let venmodalar=document.getElementById("ventanatriar");

let cermodalar=document.querySelector(".cerrarmodaltriar");

btnmodalar.addEventListener("click",()=>{
    venmodalar.style.display="block";
})

cermodalar.addEventListener("click",()=>{
    venmodalar.style.display="none"; 
})

function calcularA(){
    let ba1=parseInt(document.getElementById("basetri").value);
    let al2=parseInt(document.getElementById("altutri").value)

    let at=parseInt((ba1*al2)/2);
    alert("La altura del triangulo es: "+at)
}

/* Perimetro Circulo */

let btnmodalcir=document.getElementById("pericir");

let venmodalcir=document.getElementById("ventanacir");

let cermodalcir=document.querySelector(".cerrarmodalcir");

btnmodalcir.addEventListener("click",()=>{
    venmodalcir.style.display="block";
})

cermodalcir.addEventListener("click",()=>{
    venmodalcir.style.display="none"; 
})

function calcularCP(){
    let ra=parseInt(document.getElementById("radiocir").value);

    let pc=parseInt(2*(3.1415*ra));
    alert("El perimetro del circulo es: "+pc)
}

/* Area Circulo */

let btnmodalcira=document.getElementById("arecir");

let venmodalcira=document.getElementById("ventanacirar");

let cermodalcira=document.querySelector(".cerrarmodalcirar");

btnmodalcira.addEventListener("click",()=>{
    venmodalcira.style.display="block";
})

cermodalcira.addEventListener("click",()=>{
    venmodalcira.style.display="none"; 
})

function calcularCA(){
    let re=parseInt(document.getElementById("radiocirar").value);

    let ac=parseInt(3.1415*(re*re));
    alert("El area del circulo es: "+ac)
}

/* Perimetro Cuadrado */

let btnmodalcua=document.getElementById("pericua");

let venmodalcua=document.getElementById("ventanacua");

let cermodalcua=document.querySelector(".cerrarmodalcua");

btnmodalcua.addEventListener("click",()=>{
    venmodalcua.style.display="block";
})

cermodalcua.addEventListener("click",()=>{
    venmodalcua.style.display="none"; 
})

function calcularPCu(){
    let lac=parseInt(document.getElementById("ladocuad").value);

    let gh=parseInt(lac+lac+lac+lac);
    alert("El Perimetro del cuadrado es: "+gh)
}

/* Area Cuadrado */

let btnmodalcuaa=document.getElementById("arecua");

let venmodalcuaa=document.getElementById("ventanacuaa");

let cermodalcuaa=document.querySelector(".cerrarmodalcuaa");

btnmodalcuaa.addEventListener("click",()=>{
    venmodalcuaa.style.display="block";
})

cermodalcuaa.addEventListener("click",()=>{
    venmodalcuaa.style.display="none"; 
})

function calcularACu(){
    let ljh=parseInt(document.getElementById("ladocuada").value);

    let po=parseInt(ljh*ljh);
    alert("El area del cuadrado es: "+po)
}

/* Perimetro Rectangulo */

let btnmodalrec=document.getElementById("perirec");

let venmodalrec=document.getElementById("ventanarec");

let cermodalrec=document.querySelector(".cerrarmodalrec");

btnmodalrec.addEventListener("click",()=>{
    venmodalrec.style.display="block";
})

cermodalrec.addEventListener("click",()=>{
    venmodalrec.style.display="none"; 
})

function calcularRP(){
    let bare=parseInt(document.getElementById("baserec").value);
    let alre=parseInt(document.getElementById("altrec").value);

    let fg=parseInt(bare+bare+alre+alre);
    alert("El Perimetro del rectangulo es: "+fg)
}

/* Area Rectangulo */

let btnmodalreca=document.getElementById("arerec");

let venmodalreca=document.getElementById("ventanareca");

let cermodalreca=document.querySelector(".cerrarmodalreca");

btnmodalreca.addEventListener("click",()=>{
    venmodalreca.style.display="block";
})

cermodalreca.addEventListener("click",()=>{
    venmodalreca.style.display="none"; 
})

function calcularRA(){
    let baar=parseInt(document.getElementById("basereca").value);
    let alar=parseInt(document.getElementById("altreca").value);

    let bh=parseInt(baar*alar);
    alert("El Area del rectangulo es: "+bh)
}