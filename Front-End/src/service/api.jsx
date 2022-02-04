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
const AUTHORIZATION = 'authorization'

const initialState = {
  status: 'void',
  data: null,
  token: '',
  email: '',
  password: '',
  userAuth: false,
}

export const AuthorizationMail = (email) => ({
  type: AUTHORIZATION,
  payload: email,
})
const Fetching = (status, userAuth) => ({
  type: FETCHING,
  payload: status,
  userAuth,
})
const Resolved = (token, status) => ({ type: RESOLVED, payload: token, status })
const Rejected = (error) => ({ type: RESOLVED, payload: error })
console.log(store.getState())
export default function Data(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCHING: {
        console.log(draft.status, draft.userAuth)
        if (draft.status === 'void' && draft.userAuth === true) {
          draft.status = 'pending'
          console.log(draft.status)
          return
        }
        if (draft.status === '400') {
          console.log('ok 400')
          draft.error = null
          draft.status = 'pending'
          return
        }
        if (draft.status === 'resolved') {
          draft.status = 'updating'
          return
        }
        return
      }
      case RESOLVED: {
        console.log(draft.status)
        if (
          draft.status === 'pending' ||
          draft.status === 'updating' ||
          draft.status === 'resolved'
        ) {
          draft.token = action.payload
          draft.status = 'resolved'
          console.log(draft.token)
          return
        }
        return
      }
      case REJECTED: {
        if (draft.status === 'pending' || draft.status === 'updating') {
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
  console.log(store.getState())
  const Auth = {
    email: selectUser(store.getState()).email,
    password: selectUser(store.getState()).password,
  }

  try {
    const Response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Auth),
    })
    console.log(Response.status)
    if (Response.status === '200') {
      store.dispatch(Fetching(Response.status))

      return
    }
    const data = await Response.json()
    console.log(data.body.token, status)

    store.dispatch(Resolved(data.body.token))
    console.log(store.getState())
    console.log(selectUser(store.getState()).token)
  } catch (error) {
    console.log(error)
    store.dispatch(Rejected(error))
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
