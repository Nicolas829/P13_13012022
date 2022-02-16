import { combineReducers, createStore } from 'redux'
import FetchReducer from './reducer/fetchReducer'
import UpdateProfileReducer from './reducer/updateProfileReducer'
import ProfileReducer from './reducer/profileReducer'

/**
 * @function reducer //use CombineReducers, native function from redux//
 *                   // allow to combine multiple reducer
 * @type {Redux.Reducer} FetchReducer <connection to API>
 * @type {Redux.Reducer} ProfileReducer <Catch userdata from API>
 * @type {Redux.Reducer} UpdateProfileReducer  <Update userData to API>
 * @param {function} reduxDevtools <tools Redux in navigator viewing>
 * @return redux.store
 */

const reducer = combineReducers({
  Fetch: FetchReducer,
  Profile: ProfileReducer,
  Update: UpdateProfileReducer,
})

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, reduxDevtools)

export default store
