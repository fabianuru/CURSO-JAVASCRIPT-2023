const heroe1 = {
    nombre: "Iron Man",
    alias: "Tony Stark",
    equipo: "Avengers",
    empresa: "Marvel"


}

const heroe2= {
    nombre: "Superman",
    alias: "Clark Kent",
    equipo: "Liga de la Justicia",
    empresa: "DC",
    atacar: function() {
        console.log(this.nombre + " Ataca")
    }
}

console.log(heroe2)
heroe2.atacar();

//funcion constructura

function Heroe() {
    this.nombre = "Iron Man"
    this.alias = "Tony Stark"
    this.equipo = "Avengers"
    this.empresa = "Marvel"
}

const h1 = new Heroe()
console.log (h1)

const h2 = new Heroe()
console.log(h2)

console.log(h1 == h2)

function Heroe1(n,a,e,em) {
    this.nombre = n
    this.alias = a
    this.equipo = e
    this.empresa = em
    
    //agregar propiedades fijas
    this.vive = true

    //agregar funciones
    this.revelar = function() {
        console.log(this.nombre + " es " + this.alias)
    }
}

const h3 = new Heroe1 ("Bruno Diaz","Batman","Liga de la Justicia","DC") 

console.log(h3)

const h4 = new Heroe1 ("Clar Kent","Superman","Liga de la Justicia","DC") 
console.log(h4)

const h5 = new Heroe1 ("Tony Stark", "Iron Man", "Avengers" , "Marvel")
console.log(h5)

const h6 = new Heroe1 ("Diana Prince", "Mujer Maravilla", "Liga de la Justicia" , "DC")
console.log(h6)

//agregar propiedades a un objeto creado por constructor

h3.superpoder = "Millonario";
console.log(h3)
h3.revelar();
h4.revelar();
h5.revelar();
h6.revelar();

//Agrega funcion luego de creado con el molde
h1.atacar = function () {
    console.log(h1.alias + " Ataca")
}

h1.atacar();

let nombre = "Adrian"
let edad =47;

nombre.toUpperCase();
console.log(nombre)


function saludar() {
    console.log("Hola")
}
saludar();

//Preguntar si tiene una propiedad

console.log("nombre" in h3);
console.log("edad" in h3);

for (const propiedad in h3) {
    console.log(propiedad) //recorred propiedades
    console.log(h3[propiedad]) //recorrer valores
} 