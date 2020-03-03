import React from 'react'
import Sound from './sound'
const drums = {
  0: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  1: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  2: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  4: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', 
  5: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  6: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', 
  7: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  8: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
} 

const bank = {
  0: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  1: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  3: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  4: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  5: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  6: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  7: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  8: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}

function SoundsBox({ playOn, isBank, volume, lockSettings }) {
  let src = isBank ? bank : drums

  const styles = {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateRows: '1fr 1fr 1fr',
    justifyContent: 'center'
  }

  return (
    <div id='sound-box' style={styles}>
      <Sound src={src[0]} 
        id='Q' 
        playOn={playOn}
        volume={volume}
        lockSettings={lockSettings}
      ></Sound>
      <Sound src={src[3]} id='A'></Sound>
      <Sound src={src[6]} id='Z'></Sound>
      <Sound src={src[1]} id='W'></Sound>
      <Sound src={src[4]} id='S'></Sound>
      <Sound src={src[7]} id='X'></Sound>
      <Sound src={src[2]} id='E'></Sound>
      <Sound src={src[5]} id='D'></Sound>
      <Sound src={src[8]} id='C'></Sound>
    </div>
  )
}

export default SoundsBox;