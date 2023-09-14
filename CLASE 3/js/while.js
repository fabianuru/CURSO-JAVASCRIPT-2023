//CICLOS POR CONDICIONALES
// while (true) {
//     console.log("Lo que pasa aca queda aca")
// }

let i = 0 ;

while (i<10) {
    console.log("Numero "+ i);
i +=1;

}

let nombre = prompt ("Ingrese su nombre")

while (nombre != "ESC") {
    console.log ("El usuario ingreso " + nombre.toUpperCase());

    nombre = prompt ("Ingresar Nombre");
}

console.log ("Termino")