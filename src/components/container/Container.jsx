import React from 'react'

function Container({children}) {
  return (
    <div className='w-full max-w-8xl mx-auto'>{children}</div>
  )
}

export default Container