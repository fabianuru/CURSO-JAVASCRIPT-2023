let saldo = 500000;

function salir(){
    alert("Fin del proceso")
}

function depositar(monto){ 
    saldo += monto;
    // console.log("Se deposito: "+ monto);
    // saldo += monto; 
    // seleccionarOperacion();
    
}

function consultarSaldo(){
    console.log("Su saldo es: " + saldo);
    seleccionarOperacion();
}

function retirarDinero(dinero){
    if(dinero > saldo) {
        alert("Saldo insuficiente")
    } else {
        saldo -= dinero
    }
    // console.log("dinero a retirar " + dinero);
    // seleccionarOperacion();
}

function seleccionarOperacion(){
    console.log("1: retirar dinero");
    console.log("2: consultar saldo");
    console.log("3: depositar");
    console.log("4: salir");

    console.log("--------------------")

    let op = prompt ("seleccione una opcion");

    switch(op){
        case "1":
            monto = Number(prompt("Ingrese Monto a Retirar"));
            retirarDinero(monto);+
            consultarSaldo();
            // console.log ("Su saldo es: " + saldo);
            // seleccionarOperacion();
            break;
        case "2":
            consultarSaldo();
            break;
        case "3":
            monto = Number(prompt("Dinero a depositar"));
            depositar(monto);
            consultarSaldo();
            // console.log ("Su saldo es: " + saldo)
            // seleccionarOperacion();
            break;
        case "4":
            salir();
            break;
        default:
            console.log("Operacion Invalida")
            seleccionarOperacion()
    }
}

function validarClave(pin){
    if (pin === "1234") {
        seleccionarOperacion();
    }else {
        alert ("Clave Incorrecta")
    }
}

function ingresarClave(valor){
    console.log(valor);
    if (valor) {
        let clave = prompt ("Ingresar Clave");
        validarClave(clave);
    }else {
    alert ("Es necesario ingreses una tarjeta");
    }
}


function entrarAlCajero(){
    let tarjeta = confirm("El ingreso de la tarjeta");
    ingresarClave(tarjeta)
}

entrarAlCajero();