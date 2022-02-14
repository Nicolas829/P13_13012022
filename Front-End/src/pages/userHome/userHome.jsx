import { selectUser } from '../../store/selector'
import store from '../../store/store'
import { useNavigate } from 'react-router-dom'

import './userHome.css'
import NavBar from '../../components/navbar/navbar'

export default function UserHome() {
  const firstName = selectUser(store.getState()).Profile.firstName
  const lastName = selectUser(store.getState()).Profile.lastName
  const userAuth = selectUser(store.getState()).Profile.userAuth

  const navigate = useNavigate()

  if (userAuth) {
    return (
      <body>
        <NavBar />
        <main class="main bg-dark">
          <div class="header">
            <h1>
              Welcome back
              <br />
              {lastName} {firstName}
            </h1>

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
      </body>
    )
  } else {
    return (
      <h1 className="autorisation-denied">
        Vous devez vous reconnecter pour voir cette page
      </h1>
    )
  }
}
