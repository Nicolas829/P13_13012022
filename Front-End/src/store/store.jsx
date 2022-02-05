import { applyMiddleware, combineReducers, createStore } from 'redux'
import produce from 'immer'
import { selectUser } from './selector'
import { Link } from 'react-router-dom'
import Data from '../service/api'
import { configureStore } from '@reduxjs/toolkit'

// state

const reducer = combineReducers({
  fetch: Data,
})

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(Data, reduxDevtools)
console.log(store.getState())

export default store

store.subscribe(() => {
  console.log('Nouveau state:')
  console.log(store.getState())
})
const userAuth = selectUser(store.getState()).userAuth

window.onchange = (userAuth) => {
  if (userAuth === false) {
    console.log('prout')
  }
  if (userAuth === true) {
    console.log('ok pour changer')
    return <Link to="user" />
  }
}
