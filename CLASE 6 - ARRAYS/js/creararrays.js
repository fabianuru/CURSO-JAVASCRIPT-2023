//ARRAYS
//CREAR ARRAYS CORCHETES
const arr = []; //array vacío
console.log(arr);
console.log(typeof arr); // tipo objeto

const numeros = [100,200,300,400,500];
console.log(numeros);

const string =["cadena1","cadena2"];
console.log(string);

const deTodo = [100,"hola", true , [], {}];
console.log(deTodo)

const dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
console.log(dias)
console.log(typeof dias)
//CREAR ARRAYS 
const meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio");
console.log(meses)
console.log(typeof meses)

//Crear cadena de caracteres

let str1 = "";
let str2 = "";
console.log(str1)
console.log(typeof str1)
console.log(str2)
console.log(typeof str2)

let cadena = new String ("Hola Mundo");
console.log(cadena);
console.log(typeof cadena);

const arr1 = [];
const arr2 = arr1;
const arr3 = [];

console.log(arr1 === arr2) // true
console.log(arr1 === arr3) // false

arr1[0] =100;
console.log(arr1)
console.log(arr2)
