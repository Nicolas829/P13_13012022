import './navbar.css'
import logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import ButtonLoginLogout from '../LoginControl/buttonLoginLogout'

export default function NavBar() {
  return (
    <nav class="main-nav">
      <Link class="main-nav-logo" to="/">
        <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>

      <div>
        <ButtonLoginLogout />
      </div>
    </nav>
  )
}
