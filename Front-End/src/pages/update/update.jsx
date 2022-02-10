import React from 'react'
import store from '../../store/store'
import { ChangeLastName } from '../../store/reducer/updateProfileReducer'
import { ChangeFirstName } from '../../store/reducer/updateProfileReducer'
import { UpdateProfile } from '../../service/updateProfile'
import { useNavigate } from 'react-router-dom'
import { FetchOrUpdate } from '../../service/authorization'

export default function Update() {
  const navigate = useNavigate()

  return (
    <form>
      <div className="form-group">
        <h2>Nouveau nom</h2>
        <input
          type="text"
          placeholder="Nouveau Nom"
          onChange={(e) => {
            console.log(e.target.value)
            store.dispatch(ChangeLastName(e.target.value))
          }}
        />
      </div>
      <div className="form-group">
        <h2>Nouveau prénom</h2>
        <input
          type="text"
          placeholder="Nouveau Prenom"
          onChange={(e) => {
            store.dispatch(ChangeFirstName(e.target.value))
          }}
        />
      </div>

      <div className="form-group">
        <input
          type="submit"
          value="Appliquer Changement"
          onClick={async (e) => {
            e.preventDefault()
            const token = store.getState().Profile.token
            const id = store.getState().Profile.id

            await UpdateProfile(store, token)
            await FetchOrUpdate(store)
            navigate(`/sign-in/user/${id}`)
          }}
        />
      </div>
    </form>
  )
}
