import Accueil from '../../pages/accueil/accueil'
import SignIn from '../../pages/signin/signin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../navbar/navbar'

export default function Routage() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  )
}
