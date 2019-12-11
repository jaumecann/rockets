class Rocket{

   code: string;
   thrusters: number;
   boosts: Thruster[] = new Array();

    constructor(code:string, thrusters:number) {
        this.code = code;
        this.thrusters = thrusters;
    }

    addThruster(propulsor:Thruster){
        this.boosts.push(propulsor);
    }

}