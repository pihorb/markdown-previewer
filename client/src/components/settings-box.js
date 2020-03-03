import React from 'react'
import Toggle from './toggle/toggle'
function SettingsBox({ toggle, lockSettings, volume }) {

  const styles = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    minWidth: '15em',
    minHeight: '15em',
    margin: '0 5em',
    justifyContent: 'space-between'
  }

  return (
    <div id='settings' style={styles}>
      <div style={{textAlign: 'center'}}>
        <label>Power</label>
        <Toggle 
          toggle={toggle} 
          name='lockSettings'>
        </Toggle>
      </div>
      <input 
        name='volume'
        type='range' 
        min='1' 
        max='10' 
        value={volume} 
        onChange={toggle}
        disabled={lockSettings}/>
      <div style={{textAlign: 'center'}}>
        <label>Bank</label>
        <Toggle 
          toggle={toggle} 
          name='isBank' 
          lockSettings={lockSettings}>
        </Toggle>
      </div>
    </div>
  )
}

export default SettingsBox;