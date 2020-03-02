import React from 'react'
import TextInput from './text-input'
import Previewer from './previewer'
import defaultInput from './default'

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: defaultInput,
      expended: false,
      field: ''
    }
  }

  changeInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  expendBlock = (e) => {
    this.setState({
      expended: !this.state.expended,
      field: e.target.getAttribute('name')
    })
  }

  render() {

    const screenStyles = {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'serif',
      // position: 'fixed',
      // top: '50%',
      // left: '50%',
      // transform: 'translate(-50%, -50%)',
      alignItems: 'center',
      marginTop: '4em',
      minWidth: '700px',
      minHeight: '200px'
    }

    return (
      <div id="screen" style={screenStyles}>
        <TextInput 
          onChange={this.changeInput} 
          value={this.state.input}
          expendBlock={this.expendBlock}
          expended={this.state.expended}
          field={this.state.field}
        ></TextInput>
        <Previewer 
          input={this.state.input} 
          expendBlock={this.expendBlock}
          expended={this.state.expended}
          field={this.state.field}
        ></Previewer>
      </div>
    )
  }
}

export default MarkdownPreviewer