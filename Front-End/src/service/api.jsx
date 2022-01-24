import axios from 'axios'
import { Component } from 'react'

export default class Api extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      first_name: this.firstName,
      password: this.password,
    }

    axios
      .post('http://localhost:3001/api/v1/user/profile', data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
