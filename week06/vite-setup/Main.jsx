import React from "react"
import ReactDOM from "react-dom/client" 
import App from "./App"

let root = document.getElementById('root')

const ReactRoot = ReactDOM.createRoot(root)
// entry point to our HTML
ReactRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
)

