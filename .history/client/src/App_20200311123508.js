import React from 'react'
import Chat from './components/Chat/Chat'
import Join from './components/Join/Join'

import {BrowserRouter as Router, Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Router>
        <Route to="/" exact component={Join} />
        <Route to="/chat" component={Chat} />
      </Router>
    </div>
  )
}

