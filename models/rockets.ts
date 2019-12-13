class Rocket{

   code: string;
   thrusters: number;
   boosts: Thruster[] = new Array();
   speed:number;

    constructor(code:string, thrusters:number) {
        this.code = code;
        this.thrusters = thrusters;
        this.speed = 0;
    }

    addThruster(propulsor:Thruster){
        this.boosts.push(propulsor);
    }

    currentSpeed(){
        this.speed = this.boosts.reduce((a,b) => a+b):
        return this.speed;
    }

    addSpeed(add){
        return this.speed += add
    }

}