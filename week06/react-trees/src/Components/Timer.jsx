import {useState, useEffect} from "react"

export default function Timer() {
    // useState will take the intial state of something as its argument
    // returns an array of two things - [value, functoUpdateValue]
    // console.log('Timer compoonent is re-rednering....')
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     console.log('Running...')
    //     let interval = setInterval(() => {
    //         setCount((count) => count + 1)
    //     }, 1000)

    //     // return the callback function (which in this case is calling clearInterval.)
    //     return () => clearInterval(interval)
    // }, [])

    return (
        <>
            <p>Count: {count}</p>
        </>
    )
}


// we can think of this as an approximation of what useState looks like. 
// function useSam(name) {
//     return [name, function(updatedName) {
//        name = updatedName
//     }]
// }

// const myNewArray = useSam('sam')


// // function five() {
// //     return 5
// // }

// const FiveAgain = five() // 5

// const FiveAgain = 5 // 5