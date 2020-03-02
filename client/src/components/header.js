import React from 'react'

function Header({ text, expendBlock, name, shouldExpend}) {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '.5em',
    fontSize: '16px',
    border: '1px solid grey',
    boxShadow: '0px 2px 5px grey',
    width: '100%'
}

  const expend = shouldExpend 
    ? 'glyphicon glyphicon-resize-small'
    : 'glyphicon glyphicon-fullscreen' 
  
  return (
    <div id='header' style={styles}>
      <div>{text}</div>
      <i className={expend}
        onClick={expendBlock}
        name={name}
      ></i>
    </div>
  )
}

export default Header