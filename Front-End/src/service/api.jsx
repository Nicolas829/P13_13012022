import { selectUser } from '../store/selector'
import { Rejected, Fetching, Login } from '../store/data/dataReducer'

import { useNavigate, useNavigationType } from 'react-router-dom'

const apiUrl = 'http://localhost:3001/api/v1/'

//fetch api
export async function FetchOrUpdate(store) {
  const status = selectUser(store.getState()).status
  const token = selectUser(store.getState()).token
  const email = selectUser(store.getState()).email

  const Auth = {
    email: store.getState().email,
    password: store.getState().password,
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

    const token = selectUser(store.getState()).token
    const Profile = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const userProfile = await Profile.json()

    store.dispatch(Login(userProfile.body))

    const id = selectUser(store.getState()).id
    const auth = selectUser(store.getState()).userAuth
  } catch (error) {}
}
