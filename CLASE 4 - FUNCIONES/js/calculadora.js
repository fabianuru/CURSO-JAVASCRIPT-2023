function calculadora(n1,n2,op) {
    switch (op) {
        case "+":
            return n1+n2;
        case "-":
            return n1-n2;
        case "*":
            return n1*n2;
        case "/":
            return n1/n2;
        default:
            return 0;
    }
    
}

console.log (calculadora(5,3,"+"))
console.log (calculadora(5,3,"-"))
console.log (calculadora(5,3,"*"))
console.log (calculadora(10,5,"/"))
