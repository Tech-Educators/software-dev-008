import TreeCard from "./Components/TreeCard"
import UseStateAndConditional from "./Components/useStateAndConditional"

export default function App() {
  return (
    <div>
      <h1>Cool Trees!</h1>
      <UseStateAndConditional/>
      <UseStateAndConditional/>
      <div className='treecard-container'>
        <TreeCard treeName='Baobab' location='Across Africa' imgLink='https://media.cntraveller.com/photos/611bf4e2f6bd8f17556db944/master/w_1600%2Cc_limit/gettyimages-994569360.jpg'/>
        <TreeCard treeName='Gnarled Juniper' location='Arizona' imgLink='https://media.cntraveller.com/photos/611bf4e3628f4910ed102938/master/w_1600%2Cc_limit/gettyimages-1281090177.jpg' />
      </div>
    </div>
  )
}
