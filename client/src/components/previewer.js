import React from 'react'
import parse from 'html-react-parser'
import showdown from 'showdown'
import Header from './header'

function Previewer ({ input, expendBlock, field, expended}) {
  const converter = new showdown.Converter()
  const view = converter.makeHtml(input)

  const styles = {
    border: '1px solid grey',
    minWidth: '700px',
    minHeight: '200px',
    fontSize: '1.1em',
    padding: '.5em'
  }

  const shouldExpend = expended && field === 'preview'
   
  const previewStyle = {
    width: shouldExpend ? '95%' : ' min-content',
    height: shouldExpend ? '95vh' : ' min-content',
    margin: '2em 0'
  }

  return (
    <div id='preview' style={previewStyle}>
      <Header 
        text='Preview' 
        name='preview'
        expendBlock={expendBlock}
        shouldExpend={shouldExpend}></Header>
      <div style={styles}>{parse(view)}</div>
    </div>
  )
}

export default Previewer