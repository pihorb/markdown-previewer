import React from 'react';

function TextInput({ onChange, value }) {
  const styles = {
    minWidth: '500px',
    minHeight: '150px',
    fontSize: '1.1em'
  }

  return (
    <div id='editor'>
      <header>Enter text</header>
      <textarea 
        style={styles}
        onChange={onChange}
        value={value}>
      </textarea>
    </div>
  )
}

export default TextInput;
