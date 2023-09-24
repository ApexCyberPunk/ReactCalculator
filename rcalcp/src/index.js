import React from 'react'
import ReactDOM from 'react-dom/client'

const WhatWeSee = () => {
  return (
    <p>
      hello world
      <h1>what</h1>
    </p>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<WhatWeSee />)

