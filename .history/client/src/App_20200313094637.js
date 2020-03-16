import React from 'react'
import Chat from './components/Chat/Chat'
import Join from './components/Join/Join'
import Login from './components/Accounts/Login'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
      </nav>
      <Switch>
        <Route path = "/" component={Login} />
        <Route path = "/Join" component={Join} />
        <Route path = "/Chat" component={Chat} />
      </Switch>
    </div>
  )
}

