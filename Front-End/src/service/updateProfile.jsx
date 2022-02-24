import { Rejected } from "../store/reducer/fetchReducer"

/**allow change firstname or lastname
 *
 * @param {string} token
 * @param {object} store
 * @return UpdateProfile
 */

export async function UpdateProfile(store, tokenAuth) {
  const token = tokenAuth

  try {
    const firstName = store.getState().Update.firstName
    const lastName = store.getState().Update.lastName

    const Profile = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    })

    const body = await Profile.json()
  } catch (error) {store.dispatch(Rejected({
      message: "Connection failed, contact Admin"
     }))}
}
