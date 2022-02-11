import React from 'react'
import { Link } from 'react-router-dom'
import store from '../../store/store'
import Logout from '../../pages/logout/logout'
import { ResetState } from '../../store/reducer/fetchReducer'
import { FetchOrUpdate } from '../../service/authorization'

export default class ButtonLoginLogout extends React.Component {
  constructor(props) {
    super(props)

    this.Auth = store.getState().Profile.userAuth
    console.log(this.Auth)
    this.isLoggedIn = this.Auth
    console.log(this.isLoggedIn)
  }
  render() {
    if (this.isLoggedIn) {
      return (
        <Link
          class="main-nav-item"
          to="/logout"
          element={<Logout />}
          onClick={(e) => {
            store.dispatch(ResetState())
            FetchOrUpdate()
            this.isLoggedIn = 'false'
            console.log(this.isLoggedIn)
          }}
        >
          <i class="fa fa-user-circle"></i>
          Logout
        </Link>
      )
    } else {
      return (
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
      )
    }
  }
}
