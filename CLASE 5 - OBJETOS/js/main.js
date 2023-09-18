class Heroe {
    constructor(n,a,e,em) {
        this.nombre = n
        this.alias = a
        this.equipo = e
        this.empresa = em
        this.vive =true                
    }

    atacar() {
        console.log(this.nombre+" Ataca")
    }
}

const h1 = new Heroe ("Bruno Diaz", "Batman", "Liga de la Justicia", "DC")
console.log(h1)