
let rocket: Rocket;

let flota:any[] = [];


function addRocket(modelo:string, propulsores:number, velocidades:any[]) {
rocket = new Rocket(modelo,propulsores);
flota.push(rocket);

for (let i=0; i<velocidades.length; i++){
 rocket.addThruster(velocidades[i]);
}

document.getElementById('output').innerHTML += `Rocket ${rocket.code} has ${rocket.thrusters} thrusters with a maxpower of (${rocket.boosts})<br>`;

}










/*
function addRocket2() {
rocket = new Rocket('LDSFJA32',6);
flota.push(rocket);

document.getElementById('output2').innerHTML = `Rocket ${rocket.code} has ${rocket.thrusters} thrusters`;

}

*/
