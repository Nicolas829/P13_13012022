import './signin.css'
import store from '../../store/store'
import { FetchOrUpdate } from '../../service/authorization'
import {
  AuthorizationPassword,
  AuthorizationMail,
} from '../../store/reducer/fetchReducer'
import { Navigate, useNavigate } from 'react-router-dom'

import { selectUser, tokenState } from '../../store/selector'
import NavBar from '../../components/navbar/navbar'

export default function SignIn() {
  const navigate = useNavigate()

  return (
    <body>
      <NavBar />
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <div>
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => {
                  const email = e.target.value
                  console.log(email)
                  store.dispatch(AuthorizationMail(email))
                }}
              />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => {
                  const password = e.target.value
                  store.dispatch(AuthorizationPassword(password))
                }}
              />
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>

            <button
              onClick={async (e) => {
                e.preventDefault()
                await FetchOrUpdate(store)
                const id = selectUser(store.getState()).Profile.id
                const Auth = selectUser(store.getState()).Profile.userAuth
                if (Auth) {
                  navigate(`/sign-in/user/${id}`)
                }
              }}
            >
              Sign In
            </button>
          </div>
        </section>
      </main>
    </body>
  )
}
