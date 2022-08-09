//Alcancia
let marr = 0;
let din;
let cont=0;
let res=true;
while(res==true){
    
    din=prompt("Ingrese la cantidad que desea guardar: ");

    marr = parseInt(marr)+parseInt(din);

    cont=parseInt(cont)+1;

    res=confirm("¿Desea continuar?");

    window.alert (`El dinero guardado es igual a: ${marr}`);
    window.alert(`El valor acomulado es igual a: ${cont}`);


}
