import React from 'react'
import Chat from './components/Chat/Chat'
import Join from './components/Join/Join'

import {BrowserRouter as Router, Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <h1>App</h1>
      <Router>
        <Route to="" path="" />
        <Route to="" path="" />
      </Router>
      <Chat/>
      <Join/>
    </div>
  )
}

