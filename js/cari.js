//Moneda
/*function lanzarmoneda(){
    let moneda = Math.floor((Math.random() * 2)+1);
    console.log(`El lanzamiento fue ${moneda}`);
}

//Invocar la funcion
lanzarmoneda();

function lanzarmoneda(){
    let moneda = Math.floor((Math.random() * 2)+1);
    return moneda;
}

console.log(`El lanzamiento fue ${lanzarmoneda()}`);
let lanzamiento=lanzarmoneda();
console.log(`El lanzamiento fue ${lanzamiento}`);*/

//funcion por expresion
let lanzar=function lanzarmoneda(){
    let moneda = Math.floor((Math.random()*2)+1);
    return moneda;
}

//invocar funcion
let lanzamiento=lanzar();

//funcion por declaracion
/*function ganar (saldo, apuesta){
   saldo=saldo+(apuesta*2);
   return saldo;
}*/

//funcion por expresion
let ganar=function (saldo, apuesta){
    saldo=saldo+(apuesta*2);
    return saldo;
 }
 
//funcion flecha
let perder = (saldo, apuesta)=>{
    saldo=saldo-apuesta;
    return saldo;
}

//invocar la funcion y enviar argumentos segun corresponda
ganar(4000,1000);
perder(20000,5000);

let seguir = true;
let saldo=0;
let jugador=prompt("Ingrese el nombre del jugador");
saldo = parseInt(prompt("Cuanto deseas recargar para jugar"));
while(seguir==true){
    let elegir=prompt(`${jugador} Elige 1. Cara 2. Sello`);
    let apostar=parseInt(prompt(`De tu saldo actual ${saldo} ¿Cuanto deseas apostar?`));
    let lanzamiento=lanzar();
if(lanzamiento== 1 && elegir==1){
    saldo=ganar(saldo,apostar);
    alert(`El lanzamiento fue cara escogiste Cara tu ganas!!!, tu nuevo saldo es ${saldo}`);
}
else if(lanzamiento == 2 && elegir == 2){
    saldo=ganar(saldo,apostar);
    alert(`El lanzamiento fue sello escogiste Sello tu ganas!!!, tu nuevo saldo es ${saldo}`);
}
else if(lanzamiento == 1 && elegir == 2){
    saldo=ganar(saldo,apostar);
    alert(`El lanzamiento fue Cara escogiste Sello Perdiste!!!, tu nuevo saldo es ${saldo}`);
}
else if(lanzamiento == 2 && elegir == 1){
    saldo=ganar(saldo,apostar);
    alert(`El lanzamiento fue Sello escogiste Cara perdiste!!!, tu nuevo saldo es ${saldo}`);
}

seguir=confirm(`¿Desea Continuar?`);

}