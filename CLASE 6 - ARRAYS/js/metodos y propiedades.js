//Metodos y Propiedades
const meses = new Array ("Febrero","Marzo","Abril","Mayo","Junio");
console.log(meses)

//Recorrer un array
for (let i=0; i < 12; i++){
    console.log(meses[i])
}

for (let i=0; i < meses.length; i+=1){
    console.log(meses[i])
}
//length la unica propiedad de los array
console.log(meses[0]) //acceder al primero
console.log(meses[meses.length -1]) //acceder al ultimo
meses[meses.length] = "Agosto" //Agrega agosto al final
console.table(meses);

// Metodos destructivos --> cambian el array original

//Push
meses.push("Septiembre") //agrega un elemento al final
console.log(meses);

//Unshift
meses.unshift("Enero") // agrega un elemento al principio
console.log(meses)

//Shift
meses.shift(); // borra el primer elemnto del array
console.log(meses)

//Pop
meses.pop(); // borra el ultimo elemento del array
console.log(meses)

//Splice
meses.splice(2,2) // borra desde la posicion 2 del array 2 elementos , si no le pones el segundo argumento quita todos los elementos desde la posicion inicial
console.log(meses)

//Metodos que no cambian el array original - metodos no destructivos
const superHeroes =  ["Batman","Superman","Mujer Maravilla"]

//Join
let strHeroes =superHeroes.join("-") // Crea un nuevo array y separa los elementos con - 
console.log(strHeroes) 
console.log(superHeroes)

//Concat
const marvel =["Capitan America","Hombre Araña","Natasha Romanov"];
const dc = ["Batman","Superman","Mujer Maravilla"];
const heroes = marvel.concat(dc) //Concatena los 2 array en uno nuevo
console.log(marvel)
console.log(dc)
console.log(heroes)

//Slice
const marvelMen = marvel.slice(0,3); // Devuelve un nuevo array con los elementos desde [0] hasta [2]
console.log(marvelMen)
console.log(marvel)

//indexOf Devuelve la posicion del objeto en el array
console.log(heroes.indexOf("Batman")); // posicion 3
console.log(heroes.indexOf("Robin")); // -1 porque no esta

//includes devuelve verdadero o falso si un objeto esta en el array o no
console.log(heroes.includes("Batman")); // true
console.log(heroes.includes("Robin")); // false


console.log("-------------------------")

//reverse este metodo si modifica el original

heroes.reverse();
console.log(heroes)