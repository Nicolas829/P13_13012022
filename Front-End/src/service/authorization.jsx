import { Rejected, Fetching } from '../store/reducer/fetchReducer'
import { Login } from '../store/reducer/profileReducer'

const apiUrl = 'http://localhost:3001/api/v1/'

//fetch api
export async function FetchOrUpdate(store) {
  const status = store.getState().Fetch.status
  const token = store.getState().Fetch.token
  const email = store.getState().Fetch.email
  console.log(store.getState().Fetch.password)
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
  } catch (error) {}
}
