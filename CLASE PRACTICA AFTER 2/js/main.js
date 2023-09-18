class Cliente {
    constructor (nombre,saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarSaldo = () => "Hola " + this.nombre + " tu saldo es " + this.saldo;
    retirarDinero = (monto) => this.saldo -= monto;
    depositarDinero = (monto) => this.saldo += monto;
}

const pepe = new Cliente ("Jose",50000)
console.log(pepe)

pepe.retirarDinero(1000);
console.log(pepe.mostrarSaldo());

// class Empresa {
//     constructor (nombre,saldo, tel,tipo) {
//         this.nombre = nombre;
//         this.saldo = saldo;
//         this.telefono= tel;
//         this.tipo= tipo;
//     }
//     mostrarSaldo = () => "Hola " + this.nombre + " tu saldo es " + this.saldo;
//     retirarDinero = (monto) => this.saldo -= monto;
//     depositarDinero = (monto) => this.saldo += monto;
// }


class Empresa extends Cliente {
    constructor(nombre,saldo,tel,tipo){
        super(nombre,saldo);
        this.telefono =tel;
        this.tipo=tipo;
    }
}

const coca = new Empresa ("Coca-Cola",100000,91031902,"Gaseosas");
coca.retirarDinero(10000)
console.log(coca.mostrarSaldo)
console.log(coca)
