import './signin.css'
import { AuthorizationMail, FetchOrUpdate } from '../../service/api'
import store from '../../store/store'
import Resolved from '../../service/api'
import { AuthorizationPassword } from '../../service/api'

export default function SignIn() {
  return (
    <body>
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
              class="sign-in-button"
              onClick={() => {
                FetchOrUpdate(store)
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

//////
/*const submit = async (e) => {
    e.preventDefault()

    store.dispatch(signIn(name, password))

    const apiUrl = 'http://localhost:3001/api/v1/'

    const Response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    const data = await Response.json()

    if (data.status === 200) {
      const token = data.body.token
      store.dispatch(tryLogin(data.body.token))

      const Profile = await fetch(`${apiUrl}user/profile`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      })
      const profileData = await Profile.json()
      if (profileData.status === 200) {
        store.dispatch(
          isLogin(
            profileData.body.firstName,
            profileData.body.lastName,
            profileData.body.id,
          ),
        )
        console.log(store.getState())
        console.log(profileData)
      }
*/
