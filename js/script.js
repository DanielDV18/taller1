
//let estado = window.confirm("Estas seguro");
//console.log(`la ventana arrojo ${estado}`);

/*let num1=prompt("Digite el primer numero");
let numero=5;
let result=numero+num1+parseInt(num1 );
console.log(`El resultado es ${result}`);*/

/*let num2=prompt("Digite el numero");
let num3=100;
let resultado=num3+num2+parseInt(num2);
console.log(`EL resultado es ${resultado}`);

//Condicionales
/*if (num2 = resultado){
    console.log ("Los numeros son iguales:D");
}
else if(num2 != resultado){
    console.log("los numeros no son iguales D:");
}
else{
    console.log("es mayor el num3");
}
*/

//operador ternario
/*let num1=5;
let num2=10;
let numayor=(num1>num2)
? "El numero mayor es el primero"
: "El numero mayor es el segundo"
console.log(numayor);*/

//con condicionales con una condicion compuesta 
/*let usuario=prompt("Digite el ususario");
let password=prompt("Digite la contraseña");
if(usuario=="Daniel" && password=="daza")
window.alert("Siga bienvenido");
else if( password!="Daza" || usuario=="Daniel")
window.alert("Verifique su contraseña")
else if (usuario!="Daniel" || password=="daza")
window.alert("Verifique su usuario")
else window.alert("Verifique sus credenciales")*/

//Condicional multiple
let num2=prompt("Digite un numero");
let num3=prompt("Digite otro numero");
let operacion=prompt("Digite 1 para suma, 2 para resta, 3 para multiplicaicon y 4 para division");

switch (operacion) {
        case "1":
        alert("La suma de los números ingresados es: " + (parseInt(num2) + parseInt(num3)));
        break;
        case "2":
        alert("La resta de los números ingresados es: " + (parseInt(num2) - parseInt(num3)));
        break;
        case "3":
        alert("La multiplicación de los números ingresados es: " + parseInt(num2) * parseInt(num3));
        break;
        case "4":
        alert("La multiplicación de los números ingresados es: " + parseInt(num2) / parseInt(num3));
        break;    
        default:
        alert("Error");
        break;
}