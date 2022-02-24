import { Rejected, Fetching } from '../store/reducer/fetchReducer'
import { Login } from '../store/reducer/profileReducer'

const apiUrl = 'http://localhost:3001/api/v1/'

/**
 *
 * @param {*} store
 * @const {string} email <catch userAuth from the store>
 * @const {string} token <catch userAuth from the store>
 * @const {number} status <catch userAuth from the store>
 * @function dispatch // native function from Redux
 * use with Fetching / Rejected / Login
 * @function Fetching // type from reducer in store redux -> change data
 * @function Rejected //  type from reducer in store redux -> change data
 * @function Login //  type from reducer in store redux -> change state userinformation
 * @function Fetch // native function from js
 * @const {object} data <transform response.json to js>
 * @const {object} userProfile <transform Profile.json to js>
 * @returns FetchorUpdate to connect user with the API to catch or to update data
 */

//fetch api
export async function FetchOrUpdate(store) {
  const status = store.getState().Fetch.status
  const token = store.getState().Fetch.token
  const email = store.getState().Fetch.email

  const Auth = {
    email: store.getState().Fetch.email,
    password: store.getState().Fetch.password,
  }

  try {
    const Response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Auth),
    })

    const data = await Response.json()

    store.dispatch(Fetching(data))
    store.dispatch(Rejected(data))

    const token = store.getState().Fetch.token
    const Profile = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const userProfile = await Profile.json()
    const status = store.getState().Fetch.status

    store.dispatch(
      Login(
        userProfile.body.firstName,
        userProfile.body.lastName,
        userProfile.body.id,
        token,
        status,
      ),
    )
  } catch (error) {
    
    store.dispatch(Rejected({
      message: "Connection failed, contact Admin"
     }))
  }
}
