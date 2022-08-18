//let cosas=['balon','cicla','jugar','tv','computador'];

/*
console.log(cosas[2]);

console.log(cosas.length);

console.log(cosas[cosas.length-1]);

*/

/*
cosas.pop();

cosas.unshift("gaseosa");

console.log(cosas);

cosas.shift();

cosas.splice(1,3)

console.log(cosas)
*/
/*
cosas.forEach(function(elemento,index,array){
console.log(`posicion ${index} elemento ${elemento}`)
}
)


cosas.push('gaseosa');
*/

/* filter sirve para filtrar elemento solo para uno*/

let aprendices=[];
let seguir=true;

while (seguir==true) {
    aprendices.push(prompt("Ingrese el nombre del aprendiz"));

    seguir=confirm("Desea ingresar otro nombre")
}

    console.log(`Los aprendices son ${aprendices}`)

    let filtro=aprendices.filter(aprendices=>aprendices=="jose")

    console.log(`el filtro es ${filtro}`)

    let busqueda=aprendices.find(aprendices=>aprendices=="jose")

    console.log(`la busqueda es ${busqueda}`)

    aprendices.sort();

    let aprendice=[
        {primernombre:"jose", primerapellido:"posada"},
        {primernombre:"sandra", primerapellido:"rodriguez"}
    ]

    let nombrecompleto = aprendice.map(function(ele,ind,arr){
        return `${ele.primernombre} ${ele.primerapellido}`
    })
    console.log(`${aprendice}`)