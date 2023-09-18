//OBJETOS

//producto
const nombreProducto ="TV" ; //string
const precioProducto =130000; //number
const disponibilidad = true; //boolean

//persona
let nombre= "Fabi";
let edad =30;
let esCasado = false;

const vacio = {} ;//objeto literal  // las llaves dicen que vacio es un objeto
console.log(typeof vacio); //tipo de dato

const arr = [];
console.log(arr);
console.log(typeof arr);

const nada = null;
console.log(nada);
console.log(typeof nada);


const producto = {
    nombre: "Mate", // propiedad que tiene como valor Mate
    precio: 1500,
    disponibilidad: true,
}

console.log(producto);

const obj = {
    x:25,
    y:33
}
console.log(obj)

//ACCEDER A VALORES+

//sintaxis de punto
console.log(producto.nombre) // MATE
console.log(producto.precio) //1500
console.log(producto.disponibilidad) //TRUE

//sintaxis de corchetes
console.log(producto["nombre"]) // MATE
console.log(producto["precio"]) // 1500
console.log(producto["disponibilidad"]) // TRUE


// document.write(producto)
// alert(producto)
// console.log(producto)
// console.dir(producto)

//cambiar valores de las propiedades

producto.precio = 2500;
console.log(producto.precio)

//los primitivos copian por valor
let x =25;
console.log(x)//25
let y = x;
console.log(y) //25

let obj1 = {
    x:25,
    y:33
}
//los objetos copian por referencia
let obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2.x = 10;

console.log(obj1) //10
console.log(obj2) //10

//espacio memoria

const lala = {};
lala.nombre = "hola"

console.log(lala)

const otro = lala ; 
otro.apellido ="chau"

console.log(otro)
console.log(lala)