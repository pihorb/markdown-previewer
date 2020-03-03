import React from 'react'
import './toggle.css'

function Toggle({ toggle, name, lockSettings }) {
  return (
    <div id='toggle'>
      <label className="switch">
        <input 
          type="checkbox"
          onChange={toggle}
          name={name}
          disabled={lockSettings}
        />
        <span className="slider"></span>
      </label>
    </div>
  )
}

export default Toggle;