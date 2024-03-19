// there are two animals
// cat - has a name, legs
// dog - has a name, legs

// bird - they can fly. name, legs

class Animal {
    // the word constructor matters
    // when we instansiate a new object using the Animal class, this function runs.
    // and this refers to that object that was just made. 
    constructor(nameP, legsP) {
        this.name = nameP;
        this.legs = legsP;
    }

    // create methods here. 'this' refers to the current object
    speak() {
        console.log(`${this.name} says hello`)
    }

    eat() {
        console.log(`${this.name} eats`)
    }
}

const fluffy = new Animal('fluffy', 4)
const sssnake = new Animal('ssssneek', 0)
sssnake.speak()
fluffy.speak()
sssnake.eat()

class Bird extends Animal {
    constructor(nameP, legsP, canFlyP) {
        super(nameP, legsP) // go run the Animal constructor
        this.canFly = canFlyP;
    }

    fly() {
        if (this.canFly) {
            console.log(`${this.name} soars through the air!`)
        } else {
            console.log(`${this.name} falls horrifically to the ground.`)
        }
    }
}

const tweety = new Bird('Tweety', 2, true)

tweety.fly()
tweety.speak()
tweety.eat()

console.log(tweety)




// let myObj = {
//     userName: 'Sam',
//     speak: function () {
//         console.log(`Hi my name is ${this.userName}`)
//     }
// }

// myObj.speak()

// myObj.age = 24;

// console.log(myObj)