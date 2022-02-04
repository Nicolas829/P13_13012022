import { combineReducers, createStore } from 'redux'
import produce from 'immer'
import { selectUser } from './selector'
import Data from '../service/api'

// state

const reducer = combineReducers({
  fetch: Data,
})

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(Data, reduxDevtools)
console.log(store.getState())
