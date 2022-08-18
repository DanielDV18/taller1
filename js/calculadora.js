function calcular(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let op=document.getElementById("operacion").value;

    if (op==1) {
        let sum=num1+num2;
        alert(`El numnero 1 es ${num1} y el numero 2 ${num2} la suma es ${sum}`)
    }else if (op==2) {
        let res=num1-num2;
        alert(`El numnero 1 es ${num1} y el numero 2 ${num2} la suma es ${res}`)
    }else if (op==3) {
        let mul=num1*num2;
        alert(`El numnero 1 es ${num1} y el numero 2 ${num2} la suma es ${mul}`)
    }else if (op==4) {
        let div=num1/num2;
        alert(`El numnero 1 es ${num1} y el numero 2 ${num2} la suma es ${div}`)
    }else{
        alert("seleccione una opcion")
    }
}