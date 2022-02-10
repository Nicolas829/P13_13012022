import { combineReducers, createStore } from 'redux'
import FetchReducer from './reducer/fetchReducer'
import UpdateProfileReducer from './reducer/updateProfileReducer'
import ProfileReducer from './reducer/profileReducer'

// state

const reducer = combineReducers({
  Fetch: FetchReducer,
  Profile: ProfileReducer,
  Update: UpdateProfileReducer,
})

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, reduxDevtools)
console.log(store.getState())

export default store

store.subscribe(() => {
  console.log(store.getState())
})
