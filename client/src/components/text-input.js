import React from 'react';
import Header from './header'

function TextInput({ onChange, expendBlock, value, field, expended }) {
  const textareaStyles = {
    minWidth: '700px',
    minHeight: '200px',
    fontSize: '1.1em',
    width: '100%',
    height: '100%'
  }

  const shouldExpend = expended && field === 'edit'

  const headerStyle = {
    width: shouldExpend ? '95%' : 'min-content',
    height: shouldExpend ? '95vh' : 'min-content',
    margin: '2em 0'
  }

  return (
    <div id='editor' style={headerStyle}>
      <Header text='Enter text ...' 
        expendBlock={expendBlock}
        name='edit'
        shouldExpend={shouldExpend}></Header>
      <textarea 
        style={textareaStyles}
        onChange={onChange}
        value={value}>
      </textarea>
    </div>
  )
}

export default TextInput;
