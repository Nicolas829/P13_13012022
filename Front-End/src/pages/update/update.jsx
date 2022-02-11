import './update.css'
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
    <main class="main bg-dark">
      <div className="form-update">
        <form>
          <div className="form-group">
            <h2>Nouveau nom</h2>
            <input
              type="text"
              className="input-update"
              onChange={(e) => {
                console.log(e.target.value)
                store.dispatch(ChangeLastName(e.target.value))
              }}
            />
          </div>
          <div className="form-group">
            <h2>Nouveau prénom</h2>
            <input
              className="input-update"
              type="text"
              onChange={(e) => {
                store.dispatch(ChangeFirstName(e.target.value))
              }}
            />
          </div>

          <div className="form-group">
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
              Confirmer changement
            </button>
          </div>
          <div className="form-group">
            <button
              className="update-button"
              value="Confirmer changement"
              onClick={async (e) => {
                e.preventDefault()
                const token = store.getState().Profile.token
                const id = store.getState().Profile.id

                navigate(`/sign-in/user/${id}`)
              }}
            >
              Annuler{' '}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
