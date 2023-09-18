//ARRAY DE OBJETOS

const carrito = [];
console.log(carrito)

const producto1 ={
    nombre: "Tv Led",
    precio:2500
}

const producto2 ={
    nombre: "Playstation",
    precio: 3500
};

const producto3 ={
    nombre: "Heladera",
    precio: 2500
};

const producto4 ={
    nombre: "Celular",
    precio: 12500
};


carrito.push(producto3)

console.log(carrito)

carrito.push(producto4)

//recorrer carrito

// for (let i=0; i <carrito.length; i+=1){
//     alert(carrito[i].nombre + " "+ carrito[i].precio);
// }

//recorrer carrito
for (let item of carrito) {
    console.log(item.nombre + " " + item.precio)
}

for (let item of carrito) {
    console.log(item)
}