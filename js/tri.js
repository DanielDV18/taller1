function calcular(){
    let la1=parseInt(document.getElementById("la1").value);
    let la2=parseInt(document.getElementById("la2").value);
    let la3=parseInt(document.getElementById("la3").value);

    if (la1==la2 && la2==la3) {
        window.alert("Es un triangulo Equilatero");
    }
    else if (la1==la3 && la1==la2) {
        window.alert("Es un triangulo Equilatero");
    }
    else if (la1==la2 && la2!=la3) {
        window.alert("Es un triangulo isosceles");
    }
    else if (la1==la3 && la1!=la3) {
        window.alert("Es un triangulo isosceles");
    }
    else if (la1==la3 && la1!=la2) {
        window.alert("Es un triangulo isosceles");
    }
    else if (la1!=la2 && la2!=la3) {
        window.alert("Es un triangulo Escaleno");
    }
    else if (la3!=la2 && la1!=la3) {
        window.alert("Es un triangulo Escaleno");
    }
    else{
        alert("ERORR!!!")
    }
}