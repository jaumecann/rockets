
let rocket: Rocket;

let flota:any[] = [];

let output:any = document.getElementById('output')
let speed = document.getElementById('speed')

function addRocket(modelo:string, propulsores:number, velocidades:any[]) {
rocket = new Rocket(modelo,propulsores);


for (let i=0; i<velocidades.length; i++){
 rocket.addThruster(velocidades[i]);
}

flota.push(rocket);

var content = `Rocket ${rocket.code} has ${rocket.thrusters} thrusters with a maxpower of (${rocket.boosts})<br><br>`;

if (!output.innerHTML.includes(content)){
    output.innerHTML += `Rocket <span style="color:blue;">${rocket.code}</span> has ${rocket.thrusters} thrusters with a maxpower of (${rocket.boosts})<br><br>`;
}
}

   // document.getElementById('speed').innerHTML = `${rocket.getSpeed()}`;




document.getElementById("coet1").addEventListener("click", function(){
    addRocket('32WESSDS', 3, [10,30,80])
});


document.getElementById("coet2").addEventListener("click", function(){
    if(output.innerHTML.length !== 0){
        addRocket('LDSFJA32', 6, [30,40,50,50,30,10])
        }
        
});



















/*
function addRocket2() {
rocket = new Rocket('LDSFJA32',6);
flota.push(rocket);

document.getElementById('output2').innerHTML = `Rocket ${rocket.code} has ${rocket.thrusters} thrusters`;

}

*/
