import React from 'react'
import { Link } from 'react-router-dom'
import store from '../../store/store'
import Logout from '../../pages/logout/logout'
import { ResetState } from '../../store/reducer/fetchReducer'
import { FetchOrUpdate } from '../../service/authorization'
import { ResetStateProfile } from '../../store/reducer/profileReducer'

const button = document.getElementsByClassName('sign-in-button')
console.log(button)

export default class ButtonLoginLogout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
    }
  }

  componentDidMount() {
    this.setState({ isLoggedIn: store.getState().Profile.userAuth })
  }
  componentDidUpdate() {
    window.onclick = async () => {
      this.setState({ isLoggedIn: store.getState().Profile.userAuth })
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
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
      )
    } else {
      return (
        <Link class="main-nav-item" to="/sign-in">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      )
    }
  }
}
