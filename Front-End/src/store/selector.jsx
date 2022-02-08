import { createStore, useDispatch, useSelector } from 'react-redux'

export const tokenState = (token) => {
  return (state) => state.token
}
console.log(tokenState)
export const Authorization = (userAuth) => {
  return (draft) => draft.userAuth
}

export const selectUser = (draft) => draft

export const 