export const tokenState = (token) => {
  return (state) => state.token
}
console.log(tokenState)
export const Authorization = (userAuth) => {
  return (state) => state.userAuth
}

export const selectUser = (state) => state
export const selectStatus = (state) => state.status
console.log(selectStatus)
