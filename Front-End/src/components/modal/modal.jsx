import React from 'react'

export default function Modal(props) {
  function close() {
    console.log('close')
  }
  const ToggleShow = props.show
  const display = ''

  return (
    <form>
      <div className="form-group">
        <input type="text" placeholder="Username" />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Password" />
      </div>
      <div className="form-group">
        <input type="submit" value="Login" />
      </div>
    </form>
  )
}
