import { useState } from "react"

export default function App() {

  const [input, setInput] = useState('')

  const [form, setForm] = useState({
    location: '',
    destination: '',
    notes: ''
  })
  function handleChange(e) {
    console.log(e)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  console.log(form)
  return (
    <div>
      {/* simple input */}
      {/* <form>
        <input type="text" onChange={(e) => {
          setInput(e.target.value)
        }}/>
      </form> */}
      {/* More complext input */}
      <form>
        <input name='location' type='text' onChange={handleChange} id='01'/>
        <input name='destination' type='text' onChange={handleChange} id='02'/>
        <input name='notes' type='text' onChange={handleChange} id='03'/>
      </form>
      <p>You inputed: {input} </p>
      <Counter hi={'hello'}/>
    </div>
  )
}

function Counter({hi}) {
  const [counter, setCounter] = useState(0)
  return (
    <button onClick={(e) => {setCounter(counter + 1); console.log(e)}}>{hi}</button>
  )
}