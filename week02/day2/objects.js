// data types

let string = 'string'
let number = 42
let boolean = true

// arrays 

let myArray = ['string', number, ['hello', 'world'], true]

myArray[2][0]

// objects

// things made up of properties and values. 

let myHairClipper = {
    color: 'blueish',
    frayed: true,
    id: 1,
    dfasdfasdfdfafd: 'dfsdf',
    // we call functions that are associated with an object a method. 
    open: function() {
        console.log('The hair clipper opens')
    }
}

console.log(myHairClipper.color) // blueish
console.log(myHairClipper.id) // 1 
console.log(myHairClipper) // the whole object 
myHairClipper.open()

let samInfo = {
    name: 'sam',
    age: 24,
    occupation: 'js teacher',
    books: ['american pyscho', 'three body problem', 'human acts'],
    mycollection: {
        one: 1,
        two: 2,
        three: 3,
        four: {
            fourObj: 4
        }
    },
    listBooks: function() {
        for (let book of samInfo.books) {
            console.log(book)
        }
    },
    listBooksTwo: function() {
        samInfo.books.forEach(function(book) {
            // blah blah
        })
    }

}


console.log(samInfo.mycollection.three) // 3
console.log(samInfo.books[1])
console.log(samInfo.mycollection.four.fourObj)//

samInfo.listBooks()

// strech goal - how would we loop through this?
let items = [
    {
        name: 'microwave',
        price: 10
    },
    {
        name: 'hello',
        price: 20
    },
    4
]

for (let item of items) {
    let string = `${4 + 4} is 8`
    // not valid because this isn't refering to the object.
    // console.log(this.name, this.price)

    console.log(item.name, item.price)
}

