import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/navbar/navbar'

export default function Logout() {
  const navigate = useNavigate()
  setTimeout(() => {
    navigate('/')
  }, 2000)
  return (
    <body>
      <NavBar />
      <h1 className="autorisation-denied">
        Vous vous êtes déconnecté avec succès
      </h1>
    </body>
  )
}
