import './navbar.css'
import logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import store from '../../store/store'
import Logout from '../../pages/logout/logout'

const userAuth = store.getState().Profile.userAuth

console.log(userAuth)

export default function NavBar() {
  if (userAuth) {
    store.subscribe(() => {
      console.log(store.getState())
    })
    return (
      <nav class="main-nav">
        <Link class="main-nav-logo" to="/">
          <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 class="sr-only">Argent Bank</h1>
        </Link>

        <div>
          <Link
            class="main-nav-item"
            to="/logout"
            element={<Logout />}
            onClick={(e) => {
              if (!userAuth) {
              } else {
                store.dispatch(Logout())
              }
            }}
          >
            <i class="fa fa-user-circle"></i>
            Logout
          </Link>
        </div>
      </nav>
    )
  } else {
    return (
      <nav class="main-nav">
        <Link class="main-nav-logo" to="/">
          <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 class="sr-only">Argent Bank</h1>
        </Link>

        <div>
          <Link
            class="main-nav-item"
            to="/sign-in"
            onClick={(e) =>
              store.subscribe(() => {
                console.log(store.getState())
              })
            }
          >
            <i class="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    )
  }
}
