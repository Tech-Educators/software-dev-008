import { Route, Routes, Link} from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

import OtterGallery from "./pages/OtterGallery"
import { OtterDetails } from "./pages/OtterDetails"
import ConservationInfo from "./pages/ConservationInfo"

export default function App() {
  return (
    <div>
      <nav>
        <h1>Otter Adoption</h1>
        <Link to='/home' className="ibm-plex-sans-light-italic">>Home</Link>
        <Link to='/otters' className="ibm-plex-sans-light-italic">>Otters</Link>
      </nav>
      <Routes>
        <Route path='/otters' element={<OtterGallery />}></Route>
        {/* Anything after /otters is fine, : means dynamic route */}
        <Route path='/otters/:otter' element={<OtterDetails/>}>
          <Route path='conservation' element={<ConservationInfo/>} />
        </Route>

        {/* /otters/smooth-coat */}
        {/* /otters/smooth-coat/conservation */}

        <Route path='/home' element={<Home />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}