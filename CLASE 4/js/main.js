//declarar funcion
function sumar() {
    console.log(2+2)
}
// llamar funcion
sumar();

//IIFE
//funciones anonimas autoinvocadas
(function () {
    console.log("Función anonima")
})() //se ejecuta una sola vez

let resta = function() {
    console.log(5-3);
}
resta();