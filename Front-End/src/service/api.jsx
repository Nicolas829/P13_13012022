import axios from 'axios'
import { Component } from 'react'
import produce from 'immer'
import { selectUser } from '../store/selector'
import { combineReducers, createStore } from 'redux'
import { fetchOrUpdate, isLogin, store, tryLogin, signIn } from '../store/store'
import { useSelector } from 'react-redux'

const apiUrl = 'http://localhost:3001/api/v1/'

const FETCHING = 'fetching'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'
const AUTHORIZATIONMAIL = 'authorizationmail'
const AUTHORIZATIONPASSWORD = 'autorizationpassword'
const LOGIN = 'login'

const initialState = {
  status: 'void',
  firstName: '',
  lastName: '',
  id: '',
  token: '',
  userAuth: false,
  email: '',
  password: '',
  userAuth: false,
}
export const AuthorizationPassword = (password) => ({
  type: AUTHORIZATIONPASSWORD,
  payload: password,
})

export const AuthorizationMail = (email) => ({
  type: AUTHORIZATIONMAIL,
  payload: email,
})
const Fetching = (status, userAuth) => ({
  type: FETCHING,
  payload: status,
  userAuth,
})
const Resolved = (token, status) => ({ type: RESOLVED, payload: token, status })
const Rejected = (error) => ({ type: RESOLVED, payload: error })
const Login = (data) => ({ type: LOGIN, payload: data })
export default function Data(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case AUTHORIZATIONMAIL: {
        draft.email = action.payload
        return
      }
      case AUTHORIZATIONPASSWORD: {
        draft.password = action.payload
        return
      }
      case FETCHING: {
        console.log(action.payload)
        if (action.payload === 200) {
          draft.status = 'resolved'

          return
        }
        if (action.payload === 400) {
          draft.status = 'rejected'
          return
        }
        if (action.payload === 'pending') {
          console.log(draft.status)
          draft.status = 'pending'
          return
        }
        return
      }
      case RESOLVED: {
        console.log(draft.status)
        if (draft.status === 'resolved') {
          draft.token = action.payload

          return
        }
        return
      }
      case LOGIN: {
        if (draft.status === 'resolved') {
          draft.firstName = action.payload.firstName
          draft.lastName = action.payload.lastName
          draft.id = action.payload.id
          draft.userAuth = true
          return
        }
      }
      case REJECTED: {
        if (draft.status === 'rejected') {
          draft.error = action.payload
          draft.data = null
          draft.status = 'rejected'
          return
        }
        return
      }
      default:
        return
    }
  })
}

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

    store.dispatch(Fetching(Response.status))
    const data = await Response.json()
    store.dispatch(Resolved(data.body.token))
    const token = selectUser(store.getState()).token
    console.log(token)
    const Profile = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const userProfile = await Profile.json()
    console.log(userProfile.body)
    store.dispatch(Login(userProfile.body))
  } catch (error) {
    store.dispatch(Rejected(Response.message))
  }
}

/*const submit = async (e) => {
    e.preventDefault()
    const userData = {
      email: email,
      password: password,
      token: token,
    }

    await fetch(
      `${apiUrl}user/login`,
      userData,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${setToken}` },
      }
        .then((response) => JSON.stringify(response))
        .then((data) => console.log(data)),
      store.dispatch({ type: 'isLogin', firstName: 'prout' }),
    )
  }*/
