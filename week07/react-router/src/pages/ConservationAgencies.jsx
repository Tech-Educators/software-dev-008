import {useState, useEffect} from "react"

export default function ConservationAgencies() {
    const [agencies, setAgencies] = useState([])

    const [form, setForm] = useState({})

    useEffect(() => {
        getConservationAgecies()
    }, []) 

    let agenciesJSX = agencies.map((agency) => (
        <div>
         <h1>{agency.name}</h1>
         <p>{agency.founded_year}</p>
        </div>
     ))

     async function getConservationAgecies() {
        // fetch data from server - its gonna come back to us as JSON
        let data = await fetch(`http://localhost:4242/conservation`)
        // DATA IS JSON -> so we turn it into an object. 

        let toObject = await data.json()
        setAgencies(toObject)
     }

     function handleChange(e) {
        setForm({
            // spread previous value of form, so we can just 'add' changes instead of completely overwriting. 
            ...form,
            [e.target.name] : e.target.value
        }
        )
        console.log(form)
     }

    async function handleSubmit(e) {
        e.preventDefault()
        // could also submit form data directly. 
        let result = await fetch(`http://localhost:4242/conservation`, {
            method: 'POST',
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form) // send over the info to the database
        })

        // if the request is ok - nothing errored
        if (result.ok) {
            // call getConservationAgencies again so the UI updates. 
            getConservationAgecies()
        }
     }

    return (
        <div>
            <h2>Add a new agency</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder='Agency Name' name='name' onChange={handleChange}/>
                <input placeholder='Year' name='founded_year' onChange={handleChange}/>
                <input placeholder='Country' name='country' onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            {agenciesJSX ? agenciesJSX : <h1>NO agencies found</h1>}
        </div>
    )
}