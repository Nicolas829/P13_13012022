import './navbar.css'
import logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import store from '../../store/store'
import { selectUser } from '../../store/selector'
import { isLogout } from '../../store/store'

export default function NavBar() {
  return (
    <nav class="main-nav">
      <Link class="main-nav-logo" to="/">
        <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>

      <div>
        <Link class="main-nav-item" to="/sign-in">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  )
}
