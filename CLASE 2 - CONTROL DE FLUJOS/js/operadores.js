const usuario = false;
const puedePagar = true;
//ejemplo 1
if(usuario && puedePagar){
    console.log("tu pedido se realizo con exito");
} else {
    console.log("error en el pedido");
}
//ejemplo 2
if (usuario && puedePagar) {
    console.log ("tu pedido se realizo con exito");
} else if (!usuario) {
    console.log ("inicia sesion o registrarse")
    } else if (!puedePagar){
        console.log("fondos insuficientes")
    } else {
        console.log ("Eror en el pedido")
}
//ejemplo 3

let efectivo = 3000;
let credito = 4000;
let disponible = efectivo + credito;
let totalCompra =7000;

if (efectivo > totalCompra || credito >totalCompra) {
    console.log ("puedes pagar con efectivo o credito");
} else if (disponible >= totalCompra) {
    console.log ("Podes pagar con ambos");
} else {
    console.log ("No podes pagar")
}
