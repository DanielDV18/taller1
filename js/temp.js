function calcularg(){
    let numusu=parseInt(document.getElementById("num1").value);
    let opc=document.getElementById("conv1").value;
    let opcc=document.getElementById("conv2").value;
    console.log(opc, opcc);

   if(opc==1 && opcc==2){
        let fah = (numusu * 1.8) + 32;
        alert(`El resultado es ${fah}`);
    }
    else if(opc==1 && opcc==3){
        let kel = (numusu-32)*5/9 +273;
        alert(`El resultado es ${kel}`);
    } 
    else if(opc==2 && opcc==1){
        let cel = parseInt(numusu * 9/(5+32));
        alert(`El resultado es ${cel}`);
    }
    else if(opc==2 && opcc==3){
        let kell = parseInt(numusu + 273);
        alert(`El resultado es ${kell}`);
    }
    else if(opc==3 && opcc==1){
        let kelF = parseInt(numusu-273)*9/5+32;
        alert(`El resultado es ${kelF}`);
    }
    else if(opc==3 && opcc==2){
        let kelCL = parseInt(numusu-273);
        alert(`El resultado es ${kelCL}`);
    }
    else{
        alert("Error 404")
    }
    
}