import { otters } from "../stores/otters";
import Otter from "./Otter";

import { useSearchParams, Link} from "react-router-dom";

// some buttons to be able to sort by asc, decing, none
// click on an otter and see some more info about that. 

export default function OtterGallery() {
    console.log('Hello... component running')
    const [ searchParams, setSearchParams ] = useSearchParams()

    // { 'sort' : 'asc'}
    console.log(searchParams)
    const sortType = searchParams.get('sort')
   
    console.log(sortType)

    const copy = [...otters]

    // pass by reference vs pass by value
    if (sortType == 'asc') {
        // sort alphabeticaly
       copy.sort(handleSort)
    } else if (sortType == 'desc') {
        // sort other way
        copy.sort(handleSort).reverse()
    }

    function handleSort(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    }

    //.sort() [object Object]
    // optionally take a callbackfunction. that callback function takes two things in the array, and swaps or doesnt swap depending on what comparison you do. 


    return (
        <div>
            <div className='sortButtons'>
                <Link to='/otters?sort=asc'>Sort Alphabetically</Link>
                <Link to='/otters?sort=desc'>Sort De-Alphabetically</Link>
                <Link to='/otters'>sort NOT</Link>
            </div>
        <div className="otter-container">
            {copy.map(otter => (
                    <Otter otter={otter}/>
            ))}
            <button onClick={() => {setSearchParams({'groupBy': 'something'})}}>Hmmm 🤔</button>
        </div>
        </div>
    )
}