import React from 'react'
import MarkdownIt from 'markdown-it"'

function Previewer({ input }) {
  const styles = {
    border: '1px solid grey',
    minWidth: '700px',
    minHeight: '150px',
  }
  return (
    <div id='preview' style={{margin: '2em 0'}}>
      <header>Preview</header>
      <div style={styles}>{input}</div>
    </div>
  )
}

export default Previewer