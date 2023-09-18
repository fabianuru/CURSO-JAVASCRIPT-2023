console.log("Bienvenid@ a la CLASE 3")

//CICLO FOR
//inicializar el for
//condicion
//incremento,decremento

//NUMEROS DEL 1 AL 10
// for (let i=0; i<10; i+=1){
//     console.log("El valor de i es " + i)
// }
//OTRA FORMA
// for (let i=0; i<10; i++){
//     console.log("El valor de i es " + i)
// }
//NUMEROS PARES
// for (let i=0;i<100; i++) {
//     if (i % 2 === 0){
//         console.log ("El numero " + i + " es par")
//     }
// }
// TABLA MATEMATICA A PARTIDE DE NUMERO INGRESADO
// let numero = parseInt (prompt("Ingresar numero"))
// for (let i=1; i<=10;i+=1){
//     let resultado = numero *i;
//     console.log(numero + " X " + i +" = " + resultado)
// }

//BREAK
// for (let i=0; i<=10; i+=1){
//     if(i==5) {
//         break;
//     }
//     console.log(i)
// }
//CONTINUE
// for (let i=0; i <=10; i+=1){
//     if(i==5) {
//         continue;
//     }
//     console.log(i)
// }

//FIZ BUZZ...
// 3 6 9 12 15 .... FIZZ
// 5 10 15 20 25 .... BUZZ
// 15 30 45 60 75 .... FIZZ BUZZ

// for (let i=1;i<200;i+=1){
//     if (i % 15 === 0) {
//         console.log (i + "FIZZ BUZZ")
//     } else if (i % 5 === 0) {
//         console.log (i+ "BUZZ")
//     }else if (i % 3 === 0) {
//         console.log (i+ "FIZZ")
//     } else {
//         console.log(i)
//     }
// }