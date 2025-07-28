import React from 'react'
import asset from '../assets/logotranparent.png'

function Logo({width = "80px"}) {
  return (
    <div>
      <img src={asset} alt="Logo"  width={width} />
    </div>
  )
}

export default Logo