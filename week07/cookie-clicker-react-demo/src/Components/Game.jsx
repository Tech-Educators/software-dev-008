import {useState, useEffect} from 'react'

import Shop from './Shop'


export default function Game() {
    // console.log('Component running...')
    const [cookies, setCookies] = useState(0)
    const [cps, setCPS] = useState(1)

    function purchaseItem(item) {
        // check if enough cookies
        if (cookies < item.cost) {
            alert('Not enough cookies'); 
            return 
        }
        // update the amount of cookies per second the player is going to get. 
        setCookies(cookies - item.cost)
        setCPS(cps + item.cps)
    }

    useEffect(() => {
        // console.log('Use Effect func running')
        let invertal = setInterval(() => {
            setCookies(prevCount => prevCount + cps)
        }, 1000)

        return () => clearInterval(invertal)
    }, [cps])

    // console.log('Component still rerendering')
    return (
        <div>
            <p>You have {cookies} cookies</p>
            <img src='https://pics.craiyon.com/2023-10-17/c9e6025160aa475b9d4fa8657c03454f.webp' onClick={() => {
                setCookies(cookies + 1)
            }} />
            <Shop purchaseItem={purchaseItem}/>
        </div>
    )
}