const MIN_POWER = 10;
const MAX_POWER = 30;

let energiaGoku = 100;
let energiaSuperman = 100;

let round = 0

while(energiaGoku > 0 && energiaSuperman > 0) {

//round = round +1;
round += 1;
//round++

let golpeGoku = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER )+ MIN_POWER);
let golpeSuperman= Math.ceil(Math.random() * (MAX_POWER - MIN_POWER )+ MIN_POWER);

console.log ("----------Round " + round + "----------");

console.log("Goku golpea con fuerza " + golpeGoku);
console.log("Superman golpea con fuerza " + golpeSuperman);

if(golpeGoku === golpeSuperman){
    console.log("Siga Siga")
} else if (golpeGoku > golpeSuperman) {
    energiaSuperman -= golpeGoku;
    if (energiaSuperman<0){
        energiaSuperman =0;
    }
    console.log ("La energia de Goku es " + energiaGoku);
    console.log ("La energia de Superman es " + energiaSuperman);
    document.write ('<div class= "card"><img src="assets/golpeGoku.jpeg"></div>')
} else {
    energiaGoku -= golpeSuperman;
    if (energiaGoku<0){
        energiaGoku =0;
    }
    console.log ("La energia de Superman es " + energiaSuperman);
    console.log ("La energia de Goku es " + energiaGoku);
    document.write ('<div class= "card"><img src="assets/golpeSuprtmsn.jpeg"></div>')

}
}

console.log("------------------- Ganador ------------------- ")
if (energiaGoku >0 ){
    console.log ("Gokú es el ganador");
    document.write ('<div class= "ganador"><img src="assets/winGoku.jpg"></div>');

} else {
    console.log ("Superman es el ganador");
    document.write ('<div class= "ganador><img src="assets/winSuperman.jpg"></div>');

}