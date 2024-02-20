import { Route, Routes, Link} from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Root from "./pages/Root"

export default function App() {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <nav>
        <Link to='/home'>Home</Link>
        <Link to='/otters'>Otters</Link>
      </nav>
      <Routes>
        <Route path='/' element={ <Root />} />
        <Route path='/home' element={<Home />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}