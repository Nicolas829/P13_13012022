import produce from 'immer'
import Auth from '../../components/Auth'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const FETCHING = 'fetching'
const REJECTED = 'rejected'
const AUTHORIZATIONMAIL = 'authorizationmail'
const AUTHORIZATIONPASSWORD = 'autorizationpassword'
const LOGIN = 'login'
const LOGOUT = 'logout'
const TOGGLESHOWMODAL = 'toggleshowmodal'

const initialState = {
  status: '',
  firstName: '',
  lastName: '',
  id: '',
  token: '',
  message: '',
  userAuth: false,
  email: '',
  password: '',
  showModal: 'false',
}

export const ShowModal = (showModal) => ({
  type: TOGGLESHOWMODAL,
  payload: showModal,
})

export const AuthorizationPassword = (password) => ({
  type: AUTHORIZATIONPASSWORD,
  payload: password,
})

export const AuthorizationMail = (email) => ({
  type: AUTHORIZATIONMAIL,
  payload: email,
})
export const Fetching = (data) => ({
  type: FETCHING,
  payload: data,
})

export const Rejected = (data) => ({ type: REJECTED, payload: data })
export const Login = (data) => ({ type: LOGIN, payload: data })
export const Logout = (data) => ({ type: LOGOUT, payload: data })

export default function Data(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case TOGGLESHOWMODAL: {
        draft.showModal = !action.payload
      }
      case AUTHORIZATIONMAIL: {
        draft.email = action.payload
        return
      }
      case AUTHORIZATIONPASSWORD: {
        draft.password = action.payload
        return
      }
      case FETCHING: {
        if (action.payload.status === 200) {
          draft.status = action.payload.status
          draft.token = action.payload.body.token
          draft.message = action.payload.message

          return
        }
        if (action.payload.status != 200) {
          draft.status = action.payload.status
          draft.userAuth = false

          return
        }
      }

      case LOGIN: {
        if (draft.status === 200) {
          draft.id = action.payload.id
          draft.firstName = action.payload.firstName
          draft.lastName = action.payload.lastName
          draft.userAuth = true

          return
        }
      }
      case LOGOUT: {
        draft.token = ''
      }
      case REJECTED: {
        if (draft.status != 200) {
          draft.token = ''
          draft.firstName = ''
          draft.lastName = ''
          draft.id = ''
          draft.userAuth = false
          draft.data = null
          draft.status = 'rejected'
          draft.message = action.payload.message
          alert(draft.message)

          return
        }
        return
      }
      default:
        return
    }
  })
}
