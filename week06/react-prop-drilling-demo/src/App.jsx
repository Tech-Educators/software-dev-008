import Timer from "./Components/Timer"
import ResetButton from "./Components/ResetButton"

import { useState } from "react"

export default function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <Timer count={count} setCount={setCount}/>
      <ResetButton functiontoChangeCount={setCount} />
      <ResetButton functiontoChangeCount={sayHello} />
    </div>
  )
}