import Home from '../pages/Home'
import About from '../pages/About'
import CoachingStaff from '../pages/CoachingStaff'
import Contact from '../pages/Contact'
import ImInterested from '../pages/ImInterested'
import { Routes, Route } from 'react-router-dom'

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/coaching-staff" element={<CoachingStaff />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/interested" element={<ImInterested />} />
    </Routes>
  )
}

export default Routers
