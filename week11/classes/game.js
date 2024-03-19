// each player has HEALTH, ATTACK, DEFENSE 
// each player can attack another player
// when a player attacks an enemy player, they remove health from that player. 
// they themselves are going to loose health equal to the enemies defense value

class Player {
    constructor(name, hp, att, def) {
        this.name = name;
        this.hp = hp;
        this.att = att;
        this.def = def;
    }

    attack(defender) {
        // update opponents health
        defender.hp = defender.hp - this.att
        // display a message to the user
        console.log(`${this.name} attacks ${defender.name} ! They deal ${this.att} damage! `)
        // remove our own health
        this.hp = this.hp - defender.def
    }
}

const sam = new Player('Sam', 10, 6, 3)
const joe = new Player('Joe', 12, 4, 3)

console.log(sam);
console.log(joe)

sam.attack(joe)
joe.attack(sam)

console.log(sam);
console.log(joe)