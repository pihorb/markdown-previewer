import React, { Component } from 'react'
import SoundsBox from './sounds-box'
import SettingsBox from './settings-box'

class DrumMachine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: '',
      isBank: false, 
      volume: 5,
      lockSettings: false,
    }
  }

  playSound = (event) => {
    this.setState({
      key: event?.key?.toUpperCase() || event.target?.getAttribute('value') 
    })
  }

  toggle = (event) => {
    let name = [event.target.name]
    this.setState({
      [event.target.name]: name[0] === 'volume' 
        ? event.target.value 
        : event.target.checked
    })
  }

  render() {
    const styles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      border: '3px solid #9c9c9c',
      padding: '1em',
      backgroundColor: '#d2d2b1'
    }

    return (
      <div 
        id="drum-machine" 
        style={styles}
        tabIndex="0"
        onKeyDown={this.playSound}
        onClick={this.playSound}
      >
        <SoundsBox 
          playOn={this.state.key}
          isBank={this.state.isBank}
          volume={this.state.volume}
          lockSettings={this.state.lockSettings}>
        </SoundsBox>
        <SettingsBox 
          isBank={this.state.isBank}
          toggle={this.toggle}
          lockSettings={this.state.lockSettings}
          volume={this.state.volume}>
        </SettingsBox>
      </div>
    )
  }
}

export default DrumMachine;