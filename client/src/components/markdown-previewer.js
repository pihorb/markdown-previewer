import React from 'react'
import TextInput from './text-input'
import Previewer from './previewer'

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: 'Test',
    }
  }

  changeInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    const screenStyles = {
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      fontFamily: 'serif',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      alignItems: 'center'
    }

    return (
      <div id="screen" style={screenStyles}>
        <TextInput 
          onChange={this.changeInput} 
          value={this.state.input}>
        </TextInput>
        <Previewer input={this.state.input}></Previewer>
      </div>
    )
  }
}

export default MarkdownPreviewer