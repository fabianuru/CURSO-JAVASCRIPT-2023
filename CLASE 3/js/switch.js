const metodoPago = "efectivo";

switch (metodoPago){
    case "efectivo":
        console.log("pagaste con " + metodoPago);
        break;
    case "cheque":
        console.log("pagaste con " + metodoPago);
        break;
    case "tarjeta":
        console.log("pagaste con " + metodoPago);
        break;
    case "bitcoin":
        console.log("pagaste con " + metodoPago);
        break;
    default: 
    console.log("Aún no pagaste");
}