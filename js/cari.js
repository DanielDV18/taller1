let i=true;
let contador=0;
let acomulador=0;


while(i=true){
    let elec=parseInt(prompt("ingrese 1=sello o 2=cara"));
    let apuesta=prompt(`Ingrese la cantidad de su apuesta para el cara o sello`);
    let random=Math.floor(Math.random(1)*2); 
    acomulador=parseInt(acomulador)+apuesta;
    window.alert(`Usted aposto ${apuesta}`);
    window.alert(`El resultado fue ${random}`);

if(elec=1,0){
    window.alert(`Gano el juego :D con el numero ${random}`);
    window.alert(`Gano la apuesta con ${acomulador} dinero`);
}else if(elec=2){
    
    window.alert("Ash, perdiste el juego D:");
    window.alert(`Perdiste con ${acomulador} dinero`);
    

}
contador=contador+1;
window.alert (`Las veces que usted jugo fueron ${contador}`)
i=confirm("¿Desea continuar?");
}

