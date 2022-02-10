import { selectUser } from '../../store/selector'
import store from '../../store/store'
import { Link, useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom'

import './userHome.css'

import Update from '../update/update'

export default function UserHome() {
  const Name = selectUser(store.getState()).Profile.firstName
  const userAuth = selectUser(store.getState()).Profile.userAuth

  const navigate = useNavigate()
  store.subscribe(() => {
    console.log(store.getState())
  })

  console.log(userAuth)
  if (userAuth) {
    return (
      <main class="main bg-dark">
        <div class="header">
          <h1>
            Welcome back
            <br />
            {Name}
          </h1>
          <div>
            <Link class="edit-button" to="/logout">
              Sign out
            </Link>
          </div>
          <button
            class="edit-button"
            onClick={(e) => {
              navigate('/update')
            }}
          >
            Edit Name
          </button>
        </div>
        <h2 class="sr-only">Accounts</h2>
        <section class="account">
          <div class="account-content-wrapper">
            <h3 class="account-title">Argent Bank Checking (x8349)</h3>
            <p class="account-amount">$2,082.79</p>
            <p class="account-amount-description">Available Balance</p>
          </div>
          <div class="account-content-wrapper cta">
            <button class="transaction-button">View transactions</button>
          </div>
        </section>
        <section class="account">
          <div class="account-content-wrapper">
            <h3 class="account-title">Argent Bank Savings (x6712)</h3>
            <p class="account-amount">$10,928.42</p>
            <p class="account-amount-description">Available Balance</p>
          </div>
          <div class="account-content-wrapper cta">
            <button class="transaction-button">View transactions</button>
          </div>
        </section>
        <section class="account">
          <div class="account-content-wrapper">
            <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
            <p class="account-amount">$184.30</p>
            <p class="account-amount-description">Current Balance</p>
          </div>
          <div class="account-content-wrapper cta">
            <button class="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    )
  } else {
    return (
      <h1 className="autorisation-denied">
        Vous devez vous reconnecter pour voir cette page
      </h1>
    )
  }
}
