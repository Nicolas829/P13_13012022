import './update.css'
import React from 'react'
import store from '../../store/store'
import { ChangeLastName } from '../../store/reducer/updateProfileReducer'
import { ChangeFirstName } from '../../store/reducer/updateProfileReducer'
import { UpdateProfile } from '../../service/updateProfile'
import { useNavigate } from 'react-router-dom'
import { FetchOrUpdate } from '../../service/authorization'

/** to change user firstname or lastname
 * @function navigate //native function from react router
 * @function dispatch // native function from Redux use with Action.type
 * @function changelastName action.type from reducer in store redux
 * @function changefirstName  action.type  from reducer in store redux
 * @function FetchorUpdate //allow access or denied connection to API
 * @function updateProfile // allow update firstName and lastName
 * @const {string} token <catch token from the store>
 * @const {string} id <catch token from the store>
 * @returns Update
 */

export default function Update(props) {
  const navigate = useNavigate()
  const firstName = props.firstName
  const lastName = props.lastName

  return (
    <div className="form-update">
      <form className="container-update">
        <div className="form-group-input">
          <input
            type="text"
            className="input-update"
            placeholder={lastName}
            id={lastName}
            onChange={(e) => {
              console.log(e.target.value)
              store.dispatch(ChangeLastName(e.target.value))
            }}
          />
          <button
            className="update-button"
            value="Confirmer changement"
            onClick={async (e) => {
              e.preventDefault()
              const token = store.getState().Profile.token
              const id = store.getState().Profile.id

              await UpdateProfile(store, token)
              await FetchOrUpdate(store)

              navigate(`/sign-in/user/${id}`)
            }}
          >
            Save
          </button>
        </div>

        <div className="form-group-input2">
          <input
            className="input-update"
            type="text"
            id={firstName}
            placeholder={firstName}
            onChange={(e) => {
              store.dispatch(ChangeFirstName(e.target.value))
            }}
          />
          <button
            className="update-button"
            value="Confirmer changement"
            onClick={async (e) => {
              e.preventDefault()
              const token = store.getState().Profile.token
              const id = store.getState().Profile.id

              document.getElementById(lastName).value = lastName
              document.getElementById(firstName).value = firstName
              navigate(`/sign-in/user/${id}`)
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
