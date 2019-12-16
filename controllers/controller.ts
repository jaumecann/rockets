
let rocket: Rocket;

let flota:any[] = [];

let output:any = document.getElementById('output');


// CREAR COET

function addRocket(modelo:string, propulsores:number, velocidades:any[]) {
rocket = new Rocket(modelo,propulsores);

for (let i=0; i<velocidades.length; i++){
 rocket.addThruster(velocidades[i]);
}

flota.push(rocket);

var content = `Rocket <span style="color:blue;">${rocket.code}</span> has ${rocket.thrusters} thrusters with a maxpower of (${rocket.boosts})<br><br>`;

if (!output.innerHTML.includes(content)){
    output.innerHTML += content;
}
}

  
// CREAR ON CLICK

document.getElementById("coet1").addEventListener("click", function(){
    addRocket('32WESSDS', 3, [10,30,80]);
    document.getElementsByClassName('velocidad')[0].style.visibility = "visible";
    document.getElementById("speed").innerHTML = flota[0].currentSpeed();
});


document.getElementById("coet2").addEventListener("click", function(){
    if(output.innerHTML.length !== 0){
        addRocket('LDSFJA32', 6, [30,40,50,50,30,10]);
        document.getElementsByClassName('velocidad')[1].style.visibility = "visible";
        document.getElementById("speed2").innerHTML = flota[1].currentSpeed()
        }
    else {
        document.getElementById("speed2").innerHTML = "<p style=\"font-size:16px;\">crea el cohete 1 antes del 2!</p>"
    }
        
});

// ACCELERAR I FRENAR

document.getElementById("up").addEventListener("click", function(){
    document.getElementById("speed").innerHTML = flota[0].addSpeed(10);;
});

document.getElementById("down").addEventListener("click", function(){
    if (document.getElementById("speed").innerHTML >= 10){
        document.getElementById("speed").innerHTML = flota[0].addSpeed(-10);;
    }
    
});

document.getElementById("up2").addEventListener("click", function(){
    document.getElementById("speed2").innerHTML = flota[1].addSpeed(10);;
});

document.getElementById("down2").addEventListener("click", function(){
    if (document.getElementById("speed2").innerHTML >= 10){
    document.getElementById("speed2").innerHTML = flota[1].addSpeed(-10);;
    }
});

