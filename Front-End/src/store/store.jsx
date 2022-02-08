import { applyMiddleware, combineReducers, createStore } from 'redux'
import produce from 'immer'
import { selectUser } from './selector'
import { Link, renderMatches } from 'react-router-dom'

import { configureStore } from '@reduxjs/toolkit'
import FetchReducer from '../store/data/dataReducer'
import Data from '../store/data/dataReducer'

// state

const reducer = combineReducers({
  Data: Data,
})

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(Data, reduxDevtools)
console.log(store.getState())

export default store

store.subscribe(() => {
  console.log(store.getState())
})
