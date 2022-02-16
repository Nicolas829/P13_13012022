import produce from 'immer'

/**reducer to state management
 * 
 * @const {type} FETCHING
 * @const {type} REJECTED
 * @const {type} AUTHORIZATIONMAIL
 * @const {type} AUTHORIZATIONPASSWORD
 * @const {type} RESETSTATE* 
 * 
 *    * @redux
      * @reduxActionType @const {type}
      * @const {array} initialState
      * @return {Redux.Action} The generated action
     
 * @return reducer for store Redux
 */

const FETCHING = 'fetching'
const REJECTED = 'rejected'
const AUTHORIZATIONMAIL = 'authorizationmail'
const AUTHORIZATIONPASSWORD = 'autorizationpassword'
const RESETSTATE = 'resetstate'

const initialState = {
  status: '',
  token: '',
  message: '',
  userAuth: false,
  email: '',
  password: '',
}

export const ResetState = () => ({
  type: RESETSTATE,
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

export default function FetchReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
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
      case RESETSTATE: {
        return { ...initialState }
      }
      default:
        return
    }
  })
}
