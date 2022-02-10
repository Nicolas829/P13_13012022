import produce from 'immer'

const CHANGEFIRSTNAME = 'changefirstname'
const CHANGELASTNAME = 'changelastname'

export const ChangeFirstName = (data) => ({
  type: CHANGEFIRSTNAME,
  payload: data,
})
export const ChangeLastName = (data) => ({
  type: CHANGELASTNAME,
  payload: data,
})
const initialState = {
  firstName: '',
  lastName: '',
  id: '',
  token: '',
}

export default function UpdateProfileReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case CHANGEFIRSTNAME: {
        console.log(action.payload)
        draft.firstName = action.payload
        return
      }

      case CHANGELASTNAME: {
        draft.lastName = action.payload
        return
      }
    }
  })
}
