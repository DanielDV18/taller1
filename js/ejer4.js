//buscar un elemento html con el id especificado
let id = document.getElementById("features");
console.log (id);
//busca el primer elemento que coincide, para CSS tambien sirve para buscar un elemento
console.log(document.querySelector("h1"));
console.log(document.querySelector("#features"));
console.log(document.querySelector(".feature"));
//busca todos losw elementos que coinciden con el selector CSS devuelve un node.List
console.log(document.querySelectorAll("p")[0]);
document.querySelectorAll("p").forEach((el)=>console.log(el));

//Ejemplos:
console.log(document.querySelector("a").getAttribute("href"));
//Ejemplo para cambiar el valor del atributo
document.querySelector("a").setAttribute("href","https://mail.google.com/mail/u/0/#chat/dm/sNbJF4AAAAE0");


//Acceder a las propiedades de un elemento en CSS
const mi = document.querySelector("#features")
mi.style.setProperty("color","#A833FF");
mi.style.setProperty("width","800px");

const fondo = document.querySelector("body")
fondo.style.setProperty("background-color","#33FFDA");
//Ejemplo para cambiar texto

const miclase = document.querySelector(".miclase");
//miclase.textContent =`<p>El dom es bla bla</p>`;
miclase.innerHTML =`<p>El dom es bla bla</p>`;

//Agregar una imagen al DOM
const img = document.createElement("img");
img.src = "https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2018/02/Kawasaki-Z1000-2018-11.jpg";
document.body.appendChild(img);
img.style.setProperty("width","800px");
img.remove();

//creacion de un bloque y agregarle contenido
const caja=document.createElement("div");
caja.innerHTML=`<img src="https://www.mundomotero.com/wp-content/uploads/2018/11/Honda-S-1000-RR-2019.jpg" width = "800px">`
miclase.appendChild(caja);

//para borrar un elemento del DOM
//caja.remove();