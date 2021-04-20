import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Register from './Register'

import Home from './Home'

function App() {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path = '/Register' component={Register} />
    </>
  )
}

export default App
