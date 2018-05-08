// function player(name, heroClass, weapon){
//     this.name = name;
//     this.class = heroClass;
//     this.weapon= weapon;
//     this.species = `human`;
//     // this.takeDamage = fuction(damagePoints){
//     //     console.log(`${this.name}` has taken ${damagePoints) damage!`);
//     // }
// }
//
//     Player.prototype.takeDamage = fuction(damagePoints){
//         console.log(`${this.name} has taken ${damagePoints} damage!`);
//     }
//
//
// let player1 = new player(`Dario`, `ulitmateWarrior`, `sword`);
//
// console.log(player1);
// console.log(player1.name);
// player1.numOfKills = 1000;
// console.log(player1);
// let player2= new player(`Hunter`, `Hunter`, `Bow`);
// console.log(player2);
//
// player1.takesDamage(15);
//

// The new way of doing things
// a class is NOT a fuction
class Player {
    constructor(name, heroClass, weapon, speed) {
        this.name = name;
        this.heroClass = heroClass;
        this.weapon = weapon;
        this.speed = speed;
    }

    takeDamage(damagePoints) {
        console.log(`${this.name} has taken ${damagePoints} of damage.`);
    }
}