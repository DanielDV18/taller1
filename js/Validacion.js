//Este es para nombre y apellido ^[a-zA-ZÁ-ÿ\s]{1,40}$

//Este es para numdoc y telefono ^\d{7,10}$

// Este es para el correo ^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$

// Este es para el password ^(?=.+\d) (?=.*[#$%@&!¡]) (?=#.*[a-z]) (?=#.*[A-Z]).{8,}$

const reglas={
    textos:/^[a-zA-ZÁ-ÿ\s]{1,20}$/,
    numeros:/^\d{8,10}$/,
    correos:/^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password:/^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{5,}$/
}

//Aceder al formulario
let form=document.getElementById("frm-usuario");
let campos=document.querySelectorAll("#frm-usuario input");


//Agregar el listener al evento submit
form.addEventListener('submit',e=>{
    e.preventDefault(); //Evita que se envie el formulario para enviar validaciones
})

const validarInput=(regla,input,grupo)=>{
    if(regla.test(input.value)){
        document.getElementById(`g-${grupo}`).classList.remove('error');
            document.getElementById(`g-${grupo}`).classList.add('succes');
            document.querySelector(`#g-${grupo} i`).classList.add('fa-circle-check');
            document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-exclamation');
            document.querySelector(`#g-${grupo} .msn-error`).classList.remove('msn-error-visible')

        }else{
            document.getElementById(`g-${grupo}`).classList.add('error');
            document.getElementById(`g-${grupo}`).classList.remove('succes');
            document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-check');
            document.querySelector(`#g-${grupo} i`).classList.add('fa-circle-exclamation');
            document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visible')

    }
}
const validarCampos=(e)=>{
    console.log("Se genero un evento en el campo "+e.target.name);
    switch(e.target.name){
        case "numdoc":
            validarInput(reglas.numeros,e.target ,e.target.name);
        break;


        case "nombre":
            validarInput(reglas.textos,e.target ,e.target.name);
        break;



        case "apellido":
            validarInput(reglas.textos,e.target ,e.target.name);
        break;



        case "correo":
            validarInput(reglas.correo,e.target ,e.target.name);
        break;

        case "telefono":
            validarInput(reglas.numeros,e.target ,e.target.name);
        break;

        case "password":
            validarInput(reglas.password,e.target ,e.target.name);
        break;
        default:
            alert("no se recibio un evento sobre el input");
        break;
}
}


campos.forEach((campo)=>{
    campo.addEventListener("keyup",validarCampos);
    campo.addEventListener("blur",validarCampos);

})

/*const validarCampos=(e)=>{
    console.log("Se genero un evento en el campo "+e.target.name);
    switch(e.target.name){
        case "numdoc":
        if(reglas.numeros.test(e.target.value)){
            document.getElementById('g-numdoc').classList.remove('error');
            document.getElementById('g-numdoc').classList.add('succes');
            document.querySelector('#g-numdoc i').classList.add('fa-circle-check');
            document.querySelector('#g-numdoc i').classList.remove('fa-circle-exclamation');
            document.querySelector("#g-numdoc .msn-error").classList.remove('msn-error-visible')

        }else{
            document.getElementById('g-numdoc').classList.add('error');
            document.getElementById('g-numdoc').classList.remove('succes');
            document.querySelector('#g-numdoc i').classList.remove('fa-circle-check');
            document.querySelector('#g-numdoc i').classList.add('fa-circle-exclamation');
            document.querySelector("#g-numdoc .msn-error").classList.add('msn-error-visible')


        }
        
        break;
*/