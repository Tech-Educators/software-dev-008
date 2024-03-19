console.log('Hello, typescript!')

// how to ignore typescript
//:any
// {@ts-ignore}

let myAge:number = 24;

const number = 0
const string = '0'
const boolean = true
const array = []
const object = {}

// how do we type these:

const number1:number = 0
const string1:string = '0'
const boolean1:boolean = true
const array1:Array<string> = ['this', 'is', 'an', 'array', 'of', 'strings']
const array2:Array<number> = [1,2,3,4]

let array3:number[] = [1,2,3]
let array4:string[][] = [['this'], ['is']]
let arrayObj:{name: string, age: number}[]= [{name: 'Sam', age: 4}, {name: 'mas', age: 8}]

const object1:{game: string, yearReleased: number} = {game: 'League', yearReleased: 2009}


function sum(num1: number, num2: number) {
    return num1 + num2
}

// error because i've told the function to expect two numbers. 
// sum('4', 4)
sum(3,3)

// =-=- type inferences =-=-

// infered as being a number
let declaredNum = 5;

// infered as any type - so has no typechecking. 
let noValue;
noValue = 5


// =-=- type inferences =-=-

// | are called union types - so equal to something or something or somethning else. 
type myExample = 'physics' | 'chemistry' | 'art'
let myCoolString: myExample = 'art'

export type otterType = {
    otterName: string,
    age: number,
    cute: boolean,
    img_url?: string
}

 

let myArrayOfObjects:otterType[] = [
    {
        otterName: 'boo',
        age: 3,
        cute: true,
        img_url: 'hello'
    },
    {
        otterName: 'foo',
        age: 1,
        cute: true
    },
    {
        otterName: 'coo',
        age: 2,
        cute: false
    }
]

// predefine what a function can take. 

function course(course: myExample) {

}