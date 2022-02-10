import produce from 'immer'

const LOGIN = 'login'
const LOGOUT = 'logout'

export const Login = (firstName, lastName, id, token, status) => ({
  type: LOGIN,
  payload: { firstName, lastName, id, token, status },
})
export const Logout = (data, status, token) => ({
  type: LOGOUT,
  payload: { data, status, token },
})

const initialState = {
  firstName: '',
  lastName: '',
  id: '',
  token: '',
  status: '',
  userAuth: false,
}

export default function ProfileReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOGIN: {
        if (action.payload.status === 200) {
          draft.id = action.payload.id
          draft.firstName = action.payload.firstName
          draft.lastName = action.payload.lastName
          draft.token = action.payload.token
          draft.userAuth = true

          return
        }
      }
      case LOGOUT: {
        draft.token = ''
      }
    }
  })
}
