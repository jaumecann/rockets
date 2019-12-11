"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code, thrusters) {
        this.boosts = new Array();
        this.code = code;
        this.thrusters = thrusters;
    }
    Rocket.prototype.addThruster = function (propulsor) {
        this.boosts.push(propulsor);
    };
    return Rocket;
}());
