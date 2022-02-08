import { selectUser } from '../store/selector'
import store from '../store/store'
import { Link } from 'react-router-dom'

export default function Auth() {
  const Authorization = selectUser(store.getState()).userAuth
  const id = selectUser(store.getState()).id
  console.log(Authorization)
  if (Authorization) {
    return
  } else {
    return
  }
}
