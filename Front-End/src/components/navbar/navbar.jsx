import './navbar.css'
import logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import React from 'react'
import Logout from '../../pages/logout/logout'
import store from '../../store/store'
import { ResetStateProfile } from '../../store/reducer/profileReducer'
import { ResetState } from '../../store/reducer/fetchReducer'
import profil from '../../assets/profil.png'
import iconeLogout from '../../assets/logout.svg'

/**
 * @param {bolean} userAuth <login ou logout>
 * @param {string} lastName <in case of login -> user LastName
 * @returns Navbar // with the label login or logout
 */

export default function NavBar() {
  const userAuth = store.getState().Profile.userAuth
  const lastName = store.getState().Profile.lastName
  console.log(userAuth)
  if (userAuth) {
    return (
      <nav class="main-nav">
        <Link class="main-nav-logo" to="/">
          <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 class="sr-only">Argent Bank</h1>
        </Link>
        <div className="name-profil-logout">
          <div className="icone-name-profil">
            <img className="icone-profil" src={profil} />
            <span className="name-profil">{lastName}</span>
          </div>
          <Link
            className="main-nav-item"
            to="/logout"
            element={<Logout />}
            onClick={(e) => {
              store.dispatch(ResetStateProfile())
              store.dispatch(ResetState())
            }}
          >
            <img src={iconeLogout} className="icone-logout"></img>
            <span className="texte-logout">Logout</span>
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
