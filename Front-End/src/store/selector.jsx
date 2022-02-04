import { createStore, useDispatch, useSelector } from 'react-redux'

export const tokenState = (token) => {
  return (state) => state.token
}
console.log(tokenState)

export const selectUser = (state) => state
