import { Route, Routes, Link} from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

import OtterGallery from "./pages/OtterGallery"

export default function App() {
  return (
    <div>
      <nav>
        <h1>Otter Adoption</h1>
        <Link to='/home'>Home</Link>
        <Link to='/otters'>Otters</Link>
      </nav>
      <Routes>
        <Route path='/otters' element={<OtterGallery />} />
        <Route path='/home' element={<Home />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}