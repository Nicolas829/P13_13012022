import './navbar.css'
import logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import React from 'react'
import Logout from '../../pages/logout/logout'
import store from '../../store/store'
import { ResetStateProfile } from '../../store/reducer/profileReducer'
import { ResetState } from '../../store/reducer/fetchReducer'

export default function NavBar() {
  const userAuth = store.getState().Profile.userAuth
  console.log(userAuth)
  if (userAuth) {
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
              store.dispatch(ResetStateProfile())
              store.dispatch(ResetState())
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
          <Link class="main-nav-item" to="/sign-in">
            <i class="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    )
  }
}
