import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const WhatWeSee = () => {
  return (
    <p>
     <App/>
    </p>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<WhatWeSee />)

