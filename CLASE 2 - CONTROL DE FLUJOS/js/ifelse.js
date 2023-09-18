//Estructura IF ELSE
let color = prompt("Ingrese un color");

if (color.toLowerCase() == "rojo") {
    console.log ("El color es rojo")
} else {
    console.log ("No es rojo")
}
//////////////////////////////////////
//Ejemplo

let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert ("No ingresaste el nombre de usuario");
} else {
    alert ("Nombre de usuario ingresado: " + nombreUsuario);
}


//////////////////////////////////////
//Ejemplo

let rol =prompt ("Ingresar su rol")

if (rol.toUpperCase() == "ADMIN") {
    console.log ("Puede editar, eliminar y ver toda la info");
} else if (rol.toUpperCase() == "EDITOR"){
    console.log ("Puede editar y ver toda la info ");
} else if (rol.toUpperCase() == "AUTOR"){
    console.log ("El usuario solo puede registrar  otros usuarios");
}else {
    console.log ("EL usuario es visitante solo puede ver la info");
};



let edad = Number(prompt("Ingresar edad"));

let esMayorDeEdad = edad > 17;

console.log (esMayorDeEdad);
console.log(typeof esMayorDeEdad);

if(esMayorDeEdad) {
    console.log ("La persona puede beber cerveza");
} else {
    console.log("No puede beber cerveza");
};