import Accueil from '../pages/accueil/accueil'
import SignIn from '../pages/signin/signin'
import UserHome from '../pages/userHome/userHome'
import Update from '../pages/update/update'
import NavBar from '../components/navbar/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Logout from '../pages/logout/logout'

export default function Routage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-in/user/:id" element={<UserHome />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  )
}
