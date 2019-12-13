"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code, thrusters) {
        this.boosts = new Array();
        this.code = code;
        this.thrusters = thrusters;
        this.speed = 0;
    }
    Rocket.prototype.addThruster = function (propulsor) {
        this.boosts.push(propulsor);
    };
    Rocket.prototype.currentSpeed = function () {
        this.speed = this.boosts.reduce(function (a, b) { return a + b; });
        return this.speed;
    };
    Rocket.prototype.addSpeed = function (add) {
        return this.speed += add;
    };
    return Rocket;
}());
