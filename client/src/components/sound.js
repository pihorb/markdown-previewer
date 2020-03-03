import React from 'react'

function Sound({ src, id, playOn, volume, lockSettings }) {
  const active = document.getElementById(playOn)

  const styles = {
    fontWeight: 'bold',
    padding: '2em',
    margin: '.3em',
    backgroundColor: '#e2e2e2',
    fontSize: '18px',
    boxShadow: '10px 5px 5px grey',
    cursor: 'pointer'
  }

  if(active && !lockSettings) {
    const parentElement = active.parentNode
    active.volume = (volume / 10)
    active.play() 
    parentElement.style.transform = 'translateY(2px)'
    setTimeout(() => {
      parentElement.style.transform = 'translateY(0px)'
    }, 300)
  }

  return (
    <div style={styles} value={id}>{id}
      <audio id={id} src={src}></audio>
    </div>
  )
}

export default Sound;