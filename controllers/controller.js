"use strict";
var rocket;
var flota = [];
var output = document.getElementById('output');
// CREAR COBETE
function addRocket(modelo, propulsores, velocidades) {
    rocket = new Rocket(modelo, propulsores);
    for (var i = 0; i < velocidades.length; i++) {
        rocket.addThruster(velocidades[i]);
    }
    flota.push(rocket);
    var content = "Rocket <span style=\"color:blue;\">" + rocket.code + "</span> has " + rocket.thrusters + " thrusters with a maxpower of (" + rocket.boosts + ")<br><br>";
    if (!output.innerHTML.includes(content)) {
        output.innerHTML += content;
    }
}
// CREAR ON CLICK
document.getElementById("coet1").addEventListener("click", function () {
    addRocket('32WESSDS', 3, [10, 30, 80]);
    document.getElementById("speed").innerHTML = flota[0].currentSpeed();
});
document.getElementById("coet2").addEventListener("click", function () {
    if (output.innerHTML.length !== 0) {
        addRocket('LDSFJA32', 6, [30, 40, 50, 50, 30, 10]);
        document.getElementById("speed2").innerHTML = flota[1].currentSpeed();
    }
});
// ACCELERAR I FRENAR
document.getElementById("up").addEventListener("click", function () {
    document.getElementById("speed").innerHTML = flota[0].addSpeed(10);
    ;
});
document.getElementById("down").addEventListener("click", function () {
    document.getElementById("speed").innerHTML = flota[0].addSpeed(-10);
    ;
});
document.getElementById("up2").addEventListener("click", function () {
    document.getElementById("speed2").innerHTML = flota[1].addSpeed(10);
    ;
});
document.getElementById("down2").addEventListener("click", function () {
    document.getElementById("speed2").innerHTML = flota[1].addSpeed(-10);
    ;
});
