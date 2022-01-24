import './signin.css'
import { Link, renderMatches } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'
import { useState } from 'react'
import axios from 'axios'

export default function SignIn() {
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [token, setToken] = useState()
  const submit = (token) => {
    console.log('prout')
    token.preventDefault()
    const data = {
      email: name,
      password: password,
    }
    console.log(data)
    axios
      .post('http://localhost:3001/api/v1/user/login', data, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ`,
        },
      })
      .then((res) => {
        return <Link to="/sign-in/user"></Link>
      })
      .catch((err) => {
        console.log(err)
        console.log(name)
        console.log(token)
      })
  }

  return (
    <body>
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => {
                  console.log(e.target.value)
                  setPassword(e.target.value)
                }}
              />
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>

            <button class="sign-in-button" onClick={submit}>
              Sign In
            </button>
          </form>
        </section>
      </main>
    </body>
  )
}
