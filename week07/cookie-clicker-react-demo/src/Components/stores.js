export const shopItems = [
    {
        name: 'Grannies',
        cps: 5,
        cost: 5,
        id: 0
    },
    {
        name: 'Bakeries',
        cps: 10,
        cost: 50,
        id: 1
    },
    {
        name: 'Factories',
        cps: 40,
        cost: 500,
        id: 2
    },
    {
        name: 'Mines',
        cps: 100,
        cost: 2000,
        id: 3
    },
    {
        name: 'Banks',
        cps: 200,
        cost: 10000,
        id: 4
    },
    {
        name: 'Temples',
        cps: 500,
        cost: 40000,
        id: 5
    },
    {
        name: 'Wizard Towers',
        cps: 1000,
        cost: 200000,
        id: 6
    },
    {
        name: 'Shipyards',
        cps: 2000,
        cost: 500000,
        id: 7
    },
    {
        name: 'Alchemy Labs',
        cps: 5000,
        cost: 1000000,
        id: 8
    },
    {
        name: 'Portals',
        cps: 10000,
        cost: 5000000,
        id: 9
    },
    {
        name: 'Time Machines',
        cps: 50000,
        cost: 10000000,
        id: 10
    }
]

export const a = 10


const greet = () => {
    return 'Hello'
}

const greetWithoutFuncBody = () => 'Hello'

const greetWithMultiLineReturn = () => (
    'Hello'
)

// undefined because it's not returning anything. 
function greetTwo() {
    'Hello'
}

console.log(greet()); // Hello
console.log(greetTwo()) // undefined