import React from 'react'
import Chat from './components/Chat/Chat'
import Join from './components/Join/Join'
import Login from './components/Accounts/Login'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/Join">Join</Link>
              </li>
              <li>
                <Link to="/Chat">Chat</Link>
              </li>
            </ul>
        </nav>
        <Switch>
          <Route path = "/" component={Login} />
          <Route path = "/Join" component={Join} />
          <Route path = "/Chat" component={Chat} />
        </Switch>
      </div>
    </Router>
  )
}

