function calcular(){
    let pa=document.getElementById("pal").value;
    let op=document.getElementById("opciones").value;

    if (op==1) {
        window.alert("Su longitud de caracteres es: "+pa.length);
    }else if (op==2) {
        window.alert("Su nombre en mayusculas es: "+pa.toUpperCase());
    }else if (op==3) {
        window.alert("Su nombre en minisculas es: "+pa.toLowerCase());
    }else if (op==4) {
        window.alert("La primer letra es: "+pa.charAt(0));
    }else{
        alert("Error 404")
    }
}